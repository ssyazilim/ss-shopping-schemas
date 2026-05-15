import { z } from 'zod';
import { VARIANT } from '../../schemas';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import { PriceSchema, ProductSchema } from './product';
import { ImageSchema } from './product';

/*************************
 *       TYPES           *
 *************************/
export type IVariant = z.infer<typeof VariantSchema>;
export const VariantSchema = VARIANT()
  .extend({
    productId: z.union([z.string(), ProductSchema]),
    order: z.object({ totalCount: z.number() }),
    price: PriceSchema,
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_VARIANT: IVariant = getDefaultsForSchema(VariantSchema);

export type IVariantValue = z.infer<typeof VariantValueSchema>;
export const VariantValueSchema = z.object({
  name: z.string(),
  images: ImageSchema,
  price: PriceSchema,
  stockQuantity: z.number(),
  gtin: z.string().optional(),
  sku: z.string(),
  desi: z.number(),
});
