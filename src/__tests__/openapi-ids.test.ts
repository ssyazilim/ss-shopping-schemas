import { describe, it, expect } from 'vitest';
import { z } from 'zod';
import { getRefId, OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import type { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { registry } from '../modules';

const isZod = (value: unknown): value is z.ZodType => value instanceof z.ZodType;

function walk(schema: unknown, visit: (s: z.ZodType) => void, seen = new Set<unknown>()): void {
  if (!isZod(schema) || seen.has(schema)) return;
  seen.add(schema);
  visit(schema);

  const def = (schema as unknown as { _zod?: { def?: Record<string, unknown> } })._zod?.def;
  if (!def) return;

  for (const [key, value] of Object.entries(def)) {
    if (key === 'type') continue;
    if (key === 'getter' && typeof value === 'function') {
      try {
        walk((value as () => unknown)(), visit, seen);
      } catch {
        // lazy şema çözülemiyorsa atla
      }
      continue;
    }
    visitValue(value, visit, seen);
  }
}

function visitValue(value: unknown, visit: (s: z.ZodType) => void, seen: Set<unknown>): void {
  if (isZod(value)) return walk(value, visit, seen);
  if (Array.isArray(value)) {
    value.forEach((v) => visitValue(v, visit, seen));
    return;
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach((v) => visitValue(v, visit, seen));
  }
}

function collectFromRoute(route: RouteConfig, out: unknown[]): void {
  const request = route.request;
  if (request) {
    out.push(request.params, request.query, request.cookies);
    if (Array.isArray(request.headers)) out.push(...request.headers);
    else out.push(request.headers);
    for (const media of Object.values(request.body?.content ?? {})) out.push(media?.schema);
  }
  for (const response of Object.values(route.responses ?? {})) {
    if (!response || !('content' in response)) continue;
    for (const media of Object.values(response.content ?? {})) out.push(media?.schema);
    out.push((response as { headers?: unknown }).headers);
  }
}

function rootSchemas(): unknown[] {
  const out: unknown[] = [];
  for (const definition of registry.definitions) {
    if (definition.type === 'schema' || definition.type === 'parameter')
      out.push(definition.schema);
    else if (definition.type === 'route') collectFromRoute(definition.route, out);
    else if (definition.type === 'webhook') collectFromRoute(definition.webhook, out);
  }
  return out;
}

/**
 * `.optional()` id'yi korur ama üretilen dokümanda component'i etkilemez —
 * sadece parent'ın `required` listesinden düşer, yani gerçek bir çakışma değil.
 * `.nullable()` ise component'in kendisini `type: [..., 'null']` yapar, o yüzden sarılı kalır.
 */
function unwrapOptional(schema: z.ZodType): z.ZodType {
  return schema instanceof z.ZodOptional ? unwrapOptional(schema.unwrap() as z.ZodType) : schema;
}

function structureOf(schema: z.ZodType): string {
  return JSON.stringify(
    z.toJSONSchema(unwrapOptional(schema), { io: 'input', unrepresentable: 'any' }),
  );
}

/** Çakışma mesajında iki şemanın nerede ayrıldığını göstermek için kısa özet. */
function describe_(structure: string): string {
  const parsed = JSON.parse(structure) as {
    type?: unknown;
    properties?: Record<string, unknown>;
    required?: string[];
  };
  if (!parsed.properties) return `tip: ${JSON.stringify(parsed.type) ?? 'bilinmiyor'}`;
  const fields = Object.keys(parsed.properties).join(', ') || '(alan yok)';
  const required = parsed.required?.join(', ') || '(yok)';
  return `alanlar: ${fields}\n      zorunlu: ${required}`;
}

describe('OpenAPI component isimleri', () => {
  it('her isim tek bir şemaya karşılık gelir', () => {
    const byName = new Map<string, Set<string>>();
    const seen = new Set<unknown>();

    for (const root of rootSchemas()) {
      walk(
        root,
        (schema) => {
          const name = getRefId(schema);
          if (!name) return;
          const structures = byName.get(name) ?? new Set<string>();
          structures.add(structureOf(schema));
          byName.set(name, structures);
        },
        seen,
      );
    }

    expect(byName.size).toBeGreaterThan(0);

    const collisions = [...byName.entries()]
      .filter(([, structures]) => structures.size > 1)
      .map(([name, structures]) => {
        const shapes = [...structures].map(describe_);
        return `${name} -> ${structures.size} farklı şema:\n    - ${shapes.join('\n    - ')}`;
      });

    expect(collisions, `Aynı isim farklı şemalara verilmiş:\n  ${collisions.join('\n  ')}`).toEqual(
      [],
    );
  });

  it('üretilen dokümandaki her $ref bir component’e çözülür', () => {
    const document = new OpenApiGeneratorV31(registry.definitions).generateDocument({
      openapi: '3.1.0',
      info: { title: 'test', version: '0' },
    });

    const components = new Set(Object.keys(document.components?.schemas ?? {}));
    const refs = [...JSON.stringify(document).matchAll(/"#\/components\/schemas\/([^"]+)"/g)].map(
      (match) => match[1]!,
    );

    expect(refs.length).toBeGreaterThan(0);
    expect([...new Set(refs)].filter((ref) => !components.has(ref))).toEqual([]);
  });
});
