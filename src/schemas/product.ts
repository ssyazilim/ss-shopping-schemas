import { z } from 'zod';
import { registry } from './registry.js';

export const ProductCategorySchema = z.enum([
  'catheter',
  'gel',
  'instillation',
  'implant',
  'irrigation',
]);

export const ProductSchema = registry.register(
  'Product',
  z.object({
    id: z.string().uuid().meta({ description: 'Ürün ID' }),
    name: z.string().min(1).max(200).meta({ description: 'Ürün adı', examples: ['LUBRAGEL'] }),
    category: ProductCategorySchema.meta({ description: 'Ürün kategorisi' }),
    catalogCode: z.string().regex(/^[A-Z0-9-]+$/).meta({ description: 'Katalog kodu', examples: ['LUB-006'] }),
    isActive: z.boolean().default(true).meta({ description: 'Ürün aktif mi?' }),
    createdAt: z.string().datetime().meta({ description: 'Oluşturulma tarihi' }),
  })
);

export const CreateProductSchema = registry.register(
  'CreateProduct',
  ProductSchema.omit({ id: true, createdAt: true })
);

export const UpdateProductSchema = registry.register(
  'UpdateProduct',
  CreateProductSchema.partial()
);
