import { z } from 'zod';
import { MongoSchema } from './common';
import { ImageSchema, PriceSchema, ProductSchema } from './product';
import { BrandSchema } from './brand';
import { CategorySchema } from './category';
import { UserSchema } from './user';
import { VariantSchema } from './variant';

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
  .extend(MongoSchema.shape);

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
