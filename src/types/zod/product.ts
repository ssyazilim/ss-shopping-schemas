import { z } from 'zod';
import { getDefaultsForSchema } from 'zod-defaults';
import { PRICE, PRODUCT } from '../../schemas';
import { BrandSchema } from './brand';
import { CategorySchema } from './category';
import { MongoSchema } from './common';
import { ImageSchema, StaticImageSchema, DynamicImageSchema } from './image';
import type { IImage } from './image';
import type { IVariant } from './variant';

export type { IStaticImage, IDynamicImage, IImage } from './image';
export { StaticImageSchema, DynamicImageSchema, ImageSchema };

export type ILike = z.infer<typeof LikeSchema>;
export const LikeSchema = z.object({
  rating: z.number(),
  count: z.number(),
});

export type IPrice = z.infer<typeof PriceSchema>;
export const PriceSchema = PRICE().extend({
  currencyLocale: z.string().optional(),
  purchaseLocale: z.number().optional(),
  sellLocale: z.number().optional(),
  shippingLocale: z.number().optional(),
  total: z.number().optional(),
  totalLocale: z.number().optional(),
});

export type IType = z.infer<typeof TypeSchema>;
export const TypeSchema = z.object({
  name: z.string(),
  variants: z.array(z.string()),
});

export type IProduct = Omit<z.infer<typeof ProductSchema>, 'variants'> & {
  variants: string[] | IVariant[];
};
export const ProductSchema = PRODUCT()
  .extend({
    price: PriceSchema,
    video: z.string().optional(),
    viewCount: z.number(),
    like: z.object({
      percentage: z.array(LikeSchema),
      average: z.number(),
      totalCount: z.number(),
    }),
    question: z.object({ totalCount: z.number() }),
    order: z.object({ totalCount: z.number() }),
    variantsType: TypeSchema,
    brand: z.union([z.string(), BrandSchema]),
    category: z.union([z.string(), CategorySchema]),
    variants: z.array(z.string()),
  })
  .extend(MongoSchema.shape);

export type IPopProduct = z.infer<typeof PopProductSchema>;
export const PopProductSchema = ProductSchema.pick({
  _id: true,
  title: true,
  images: true,
});

export type IBasketProduct = z.infer<typeof BasketProductSchema>;
export const BasketProductSchema = PopProductSchema.extend({
  description: z.string(),
});

export type IVariantProduct = z.infer<typeof VariantProductSchema>;
export const VariantProductSchema = PopProductSchema.extend({
  sku: z.string(),
  brand: z.string(),
  categoryTree: z.array(z.string()),
  variantsType: z.array(TypeSchema),
});

export type ITopSellingItem = z.infer<typeof TopSellingItemSchema>;
export const TopSellingItemSchema = z.object({
  id: z.string(),
  images: ImageSchema,
  name: z.string(),
  price: z.number(),
  category1: z.string(),
  category2: z.string(),
  tax: z.number(),
  totalQuantity: z.number(),
});

export type IProductAndVariant = z.infer<typeof ProductAndVariantSchema>;
export const ProductAndVariantSchema = z
  .object({
    productId: z.string(),
    quantity: z.number(),
    title: z.string(),
    name: z.string(),
    images: ImageSchema,
    price: PriceSchema,
    category: z.string(),
    stockQuantity: z.number(),
    sku: z.string(),
    desi: z.number(),
  })
  .extend(MongoSchema.shape);

export type IBestProducts = z.infer<typeof BestProductsSchema>;
export const BestProductsSchema = z.object({
  _id: z.string(),
  productId: z.string(),
  name: z.string(),
  order: z.object({ totalCount: z.number() }),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_IMAGE: IImage = getDefaultsForSchema(ImageSchema);
export const DEFAULT_PRICE: IPrice = getDefaultsForSchema(PriceSchema);
export const DEFAULT_PRODUCT: IProduct = getDefaultsForSchema(ProductSchema);
export const DEFAULT_PRODUCT_AND_VARIANT: IProductAndVariant =
  getDefaultsForSchema(ProductAndVariantSchema);
