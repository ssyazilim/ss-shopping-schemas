import type { z } from 'zod';
import type { PaginationQuerySchema, ApiErrorSchema } from '../schemas';

export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
export type ApiError = z.infer<typeof ApiErrorSchema>;

export * from './address';
export * from './auth';
