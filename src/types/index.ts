import type { z } from 'zod';
import type { PaginationQuerySchema, ApiErrorSchema } from '../schemas/index';

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
export type ApiError = z.infer<typeof ApiErrorSchema>;

export * from './user';
