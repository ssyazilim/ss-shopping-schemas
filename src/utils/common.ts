import { z } from 'zod';
import { DeleteMongoSchema, InsertMongoSchema, UpdateMongoSchema } from '../types/common';

export const ListQuerySchema = z
  .object({
    page: z.number().int().min(1).default(1).optional(),
    limit: z.number().int().min(1).max(5000).default(25).optional(),
    sort: z.string().default('updatedAt,desc'),
    text: z.string().default('').optional(),
  })
  .meta({ id: 'ListQuery' });

export const DateRangeQuerySchema = z
  .object({
    startDate: z
      .string()
      .optional()
      .meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
    endDate: z
      .string()
      .optional()
      .meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
  })
  .meta({ id: 'DateRangeQuery' });

export const ApiErrorSchema = z
  .object({
    error: z.object({
      message: z.string().meta({ description: 'Error message' }),
    }),
  })
  .meta({ id: 'ApiError' });

export const DeleteModelSchema = z
  .object({
    selectedIds: z.array(z.string()).meta({ description: 'IDs to delete' }),
  })
  .meta({ id: 'DeleteModel' });

export const errorResponse = {
  description: 'BAD_REQUEST',
  content: { 'application/json': { schema: ApiErrorSchema } },
};

export function jsonResponse(schema: z.ZodType, description = 'OK') {
  return {
    200: {
      description,
      content: {
        'application/json': {
          schema: z.object({
            success: z.object({
              message: z.string().meta({ description: 'Success message' }),
              data: schema,
            }),
          }),
        },
      },
    },
    400: errorResponse,
  };
}

export function messageResponse(description = 'OK') {
  return {
    200: {
      description,
      content: {
        'application/json': {
          schema: z.object({
            success: z.object({
              message: z.string().meta({ description: 'Success message' }),
            }),
          }),
        },
      },
    },
    400: errorResponse,
  };
}

export function binaryResponse(description = 'OK') {
  return {
    200: {
      description,
      content: {
        'application/octet-stream': {
          schema: z.any().meta({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: errorResponse,
  };
}

export function xmlResponse(description = 'OK') {
  return {
    200: {
      description,
      content: {
        'text/xml': { schema: z.string() },
      },
    },
    400: errorResponse,
  };
}

export function listResponse(schema: z.ZodType, description = 'OK') {
  return jsonResponse(z.array(schema), description);
}

export const DeleteResultSchema = DeleteMongoSchema.meta({ id: 'DeleteResult' });

export const UpdateResultSchema = UpdateMongoSchema.meta({ id: 'UpdateResult' });

export const InsertResultSchema = InsertMongoSchema.meta({ id: 'InsertResult' });

export function buildRequestBody(schema: z.ZodType) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

function toDeepPartial(field: z.ZodType): z.ZodType {
  if (field instanceof z.ZodOptional) return toDeepPartial(field.unwrap() as z.ZodType);
  if (field instanceof z.ZodNullable) return toDeepPartial(field.unwrap() as z.ZodType).nullable();
  if (field instanceof z.ZodDefault) return toDeepPartial(field.def.innerType as z.ZodType);
  if (field instanceof z.ZodArray) return z.array(toDeepPartial(field.element as z.ZodType));
  if (field instanceof z.ZodObject) return deepPartial(field);
  return field;
}

export function deepPartial(schema: z.ZodObject): z.ZodObject {
  const shape = schema.shape as Record<string, z.ZodType>;
  const out: Record<string, z.ZodType> = {};
  for (const [key, field] of Object.entries(shape)) {
    out[key] = toDeepPartial(field).optional();
  }
  return z.object(out);
}
