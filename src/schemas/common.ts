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

// Makes a field (and its nested objects) optional; It doesn't wrap itself — the caller adds .optional().
function toDeepPartial(field: z.ZodType): z.ZodType {
  if (field instanceof z.ZodOptional) return toDeepPartial(field.unwrap() as z.ZodType);
  if (field instanceof z.ZodObject) return deepPartial(field);
  return field;
}

/**
 * Makes ALL fields of a ZodObject (in depth, including nested objects) optional.
 * For PATCH/partial update schemes: You provide the create scheme, all are optional.
 * No .deepPartial() in Zod 4; .partial() is superficial (leaves internal objects solid) + export
 * There is a risk of TS2742 in the given schemes. That's why we install it manually, recursively.
 * Since the result is ZodObject, you can chain .strict() when using it.
 */
export function deepPartial(schema: z.ZodObject): z.ZodObject {
  const shape = schema.shape as Record<string, z.ZodType>;
  const out: Record<string, z.ZodType> = {};
  for (const [key, field] of Object.entries(shape)) {
    out[key] = toDeepPartial(field).optional();
  }
  return z.object(out);
}
