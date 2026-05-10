import { z } from 'zod';
import { registry } from '../registry';

export const ImagesSchema = registry.register(
  'Images',
  z.object({
    staticImages: z
      .array(z.object({ name: z.string(), image: z.string() }))
      .optional()
      .meta({ examples: [[]] }),
    dynamicImages: z
      .array(z.string())
      .optional()
      .meta({ examples: [[]] }),
  }),
);

export const PriceSchema = registry.register(
  'Price',
  z.object({
    currency: z.string().meta({ examples: ['TRY'] }),
    purchase: z.number().meta({ examples: [1000] }),
    sell: z.number().meta({ examples: [1500] }),
    dealerCode: z.string().meta({ examples: ['SURAT'] }),
    shipping: z.number().meta({ examples: [150] }),
    discount: z.number().meta({ examples: [10] }),
    tax: z.number().meta({ examples: [20] }),
  }),
);

export const ProductPropertiesSchema = registry.register(
  'ProductProperties',
  z.object({
    hidePrice: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    isFeatured: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    isShippingFree: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
  }),
);

export const VariantsTypeSchema = registry.register(
  'VariantsType',
  z.array(
    z.object({
      name: z.string().meta({ examples: ['Renk'] }),
      variants: z.array(z.string()).meta({ examples: [['Siyah']] }),
    }),
  ),
);

export const ProductSchema = registry.register(
  'Product',
  z.object({
    title: z.string().meta({ examples: ['Lorem ipsum dolor sit amet'] }),
    description: z.string().optional(),
    images: ImagesSchema,
    price: PriceSchema,
    stockQuantity: z.number().meta({ examples: [100] }),
    desi: z.number().meta({ examples: [2] }),
    brand: z.string().meta({ examples: ['67d15594f49546e19c4f2342'] }),
    gtin: z
      .string()
      .optional()
      .meta({ examples: ['0123456789012'] }),
    sku: z.string().meta({ examples: ['0123456'] }),
    category: z.string().meta({ examples: ['67f38474e1d5b52fee02dcba'] }),
    properties: ProductPropertiesSchema,
  }),
);

export const AddProductsSchema = registry.register(
  'AddProducts',
  z.array(
    ProductSchema.extend({
      _id: z
        .string()
        .optional()
        .meta({ examples: ['66f29aefff9245b28d05482e'] }),
      variantsType: VariantsTypeSchema,
      variants: z.array(z.string()).meta({ examples: [['66f29aefff9245b28d05482c']] }),
    }),
  ),
);

export const EditProductSchema = registry.register(
  'EditProduct',
  z.object({
    title: z
      .string()
      .optional()
      .meta({ examples: ['Grundig Gpdh 9634'] }),
  }),
);

export const ProductImageSchema = registry.register(
  'ProductImage',
  z.object({
    image: z.object({
      name: z.string(),
      image: z.string(),
    }),
  }),
);
