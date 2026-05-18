import { z } from 'zod';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { IMAGES, PRICE, VARIANTS_TYPE, ADD_PRODUCT } from '../../schemas';
import { MongoSchema } from './common';
import type { IBrand } from './brand';
import type { ICategory } from './category';
import type { IVariant } from './variant';

export type IImage = z.infer<typeof ImageSchema>;
export const ImageSchema = IMAGES();

export type IStaticImage = z.infer<typeof StaticImageSchema>;
export const StaticImageSchema = ImageSchema.shape.staticImages;

export type IDynamicImage = z.infer<typeof DynamicImageSchema>;
export const DynamicImageSchema = ImageSchema.shape.dynamicImages;

export type ILike = z.infer<typeof LikeSchema>;
export const LikeSchema = z.object({
  rating: z.number(),
  count: z.number(),
});

export type IPrice = z.infer<typeof PriceSchema>;
export const PriceSchema = PRICE().extend({
  currencyLocale: z.string().optional(),
  purchaseDisplay: z.string().optional(),
  purchaseLocale: z.number().optional(),
  sellDisplay: z.string().optional(),
  sellLocale: z.number().optional(),
  shippingDisplay: z.string().optional(),
  shippingLocale: z.number().optional(),
  total: z.number().optional(),
  totalLocale: z.number().optional(),
});

export type IType = z.infer<typeof TypeSchema>;
export const TypeSchema = VARIANTS_TYPE().element;

export type IProduct = Omit<z.infer<typeof ProductSchema>, 'variants' | 'category'> & {
  brand: string | IBrand;
  category: string | ICategory;
  variants: string[] | IVariant[];
};
export const ProductSchema = ADD_PRODUCT()
  .extend({
    price: PriceSchema,
    brand: z.string(),
    category: z.string(),
    video: z.string().optional().optional(),
    viewCount: z.number().optional(),
    like: z
      .object({
        percentage: z.array(LikeSchema),
        average: z.number(),
        totalCount: z.number(),
      })
      .optional(),
    question: z.object({ totalCount: z.number() }).optional(),
    order: z.object({ totalCount: z.number() }).optional(),
    variantsType: z.array(TypeSchema),
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
