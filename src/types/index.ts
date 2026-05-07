import type { z } from 'zod';
import type {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
  ProductCategorySchema,
  PaginationQuerySchema,
  ApiErrorSchema,
} from '../schemas/index.js';

// Zod schema'dan otomatik türetilen tipler
export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
export type ApiError = z.infer<typeof ApiErrorSchema>;

// Düz TypeScript tipleri
export * from './user.js';
