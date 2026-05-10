import { z } from 'zod';
import { registry } from './registry';

export const PaginationQuerySchema = registry.register(
  'PaginationQuery',
  z.object({
    page: z.coerce.number().int().min(1).default(1).meta({ description: 'Page number' }),
    limit: z.coerce.number().int().min(1).max(100).default(20).meta({ description: 'page limit' }),
  }),
);

export const ListQuerySchema = registry.register(
  'ListQuery',
  z.object({
    page: z.coerce.number().int().min(1).default(1).optional().meta({ description: 'Page number' }),
    limit: z.coerce
      .number()
      .int()
      .min(1)
      .max(100)
      .default(10)
      .optional()
      .meta({ description: 'Page limit' }),
    sort: z.string().meta({ description: 'Order and type', examples: ['updatedAt,desc'] }),
    text: z.string().optional().meta({ description: 'Search text' }),
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
