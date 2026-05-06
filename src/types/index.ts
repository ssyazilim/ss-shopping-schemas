import type { z } from 'zod';
import type {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
  ProductCategorySchema,
  PaginationQuerySchema,
  ApiErrorSchema,
} from '../schemas/index.js';

// Schema'dan otomatik türetilen tipler — elle yazmaya gerek yok
export type Product = z.infer<typeof ProductSchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type UpdateProduct = z.infer<typeof UpdateProductSchema>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
export type ApiError = z.infer<typeof ApiErrorSchema>;
