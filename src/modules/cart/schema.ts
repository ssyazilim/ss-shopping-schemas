import { z } from 'zod';
import { MongoSchema } from '../../types/common';
import { ImageSchema, PriceSchema, ProductSchema } from '../product/schema';
import { BrandSchema } from '../brand/schema';
import { CategorySchema } from '../category/schema';
import { UserSchema } from '../user/schema';
import { VariantSchema } from '../product-variant/schema';

/*************************
 *       TYPES           *
 *************************/

export type ICartEntry = z.infer<typeof CartEntrySchema>;
export const CartEntrySchema = z.object({
  _id: z.string(),
  quantity: z.number(),
  basePrice: z.number(),
  totalPrice: z.number(),
  product: z.union([z.string(), ProductSchema]),
  variant: z.union([z.string(), VariantSchema]),
});

export type ICart = z.infer<typeof CartSchema>;
export const CartSchema = z
  .object({
    userId: z.union([z.string(), UserSchema]),
    entries: z.array(CartEntrySchema),
    totalPrice: z.number(),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Cart' });

export type ICartItem = z.infer<typeof CartItemSchema>;
export const CartItemSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    images: z.array(ImageSchema),
    price: PriceSchema,
    stockQuantity: z.number(),
    sku: z.string(),
    desi: z.number(),
    brand: BrandSchema,
    category: CategorySchema,
  })
  .extend(MongoSchema.shape);
