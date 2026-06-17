import { z } from 'zod';
import { registry } from './registry';

export const PaginationQuerySchema = registry.register(
  'PaginationQuery',
  z.object({
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(100).default(20).optional(),
  }),
);

export const ListQuerySchema = registry.register(
  'ListQuery',
  z.object({
    page: z.number().int().min(1).default(1).optional(),
    limit: z.number().int().min(1).max(100).default(25).optional(),
    sort: z.string().default('updatedAt,desc'),
    text: z.string().default('').optional(),
  }),
);

export const DateRangeQuerySchema = registry.register(
  'DateRangeQuery',
  z.object({
    startDate: z
      .string()
      .optional()
      .meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
    endDate: z
      .string()
      .optional()
      .meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
  }),
);

export const ApiSuccessSchema = registry.register(
  'ApiSuccess',
  z.object({
    success: z.object({
      message: z.string().meta({ description: 'Success message' }),
    }),
  }),
);

export const ApiErrorSchema = registry.register(
  'ApiError',
  z.object({
    error: z.object({
      message: z.string().meta({ description: 'Error message' }),
    }),
  }),
);

export const DeleteModelSchema = registry.register(
  'DeleteModel',
  z.object({
    selectedIds: z.array(z.string()).meta({ description: 'IDs to delete' }),
  }),
);

export const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

export function buildRequestBody(schema: z.ZodType) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

// Bir alanı (ve iç içe objelerini) opsiyonel yapar; kendisini sarmaz — onu çağıran .optional() ekler.
function toDeepPartial(field: z.ZodType): z.ZodType {
  if (field instanceof z.ZodOptional) return toDeepPartial(field.unwrap() as z.ZodType);
  if (field instanceof z.ZodObject) return deepPartial(field);
  return field;
}

/**
 * Bir ZodObject'in TÜM alanlarını (iç içe objeler dahil, derinlemesine) opsiyonel yapar.
 * PATCH/partial update şemaları için: create şemasını verirsin, hepsi opsiyonel döner.
 * Zod 4'te .deepPartial() yok; .partial() ise yüzeysel (iç objeleri katı bırakır) + export
 * edilen şemalarda TS2742 riski taşır. Bu yüzden recursive olarak elle kuruyoruz.
 * Sonuç ZodObject olduğu için kullanırken .strict() zincirleyebilirsin.
 */
export function deepPartial(schema: z.ZodObject): z.ZodObject {
  const shape = schema.shape as Record<string, z.ZodType>;
  const out: Record<string, z.ZodType> = {};
  for (const [key, field] of Object.entries(shape)) {
    out[key] = toDeepPartial(field).optional();
  }
  return z.object(out);
}
