import { z } from 'zod';
import { ImageSchema } from '../../types/product';

export const PRICE = () =>
  z.object({
    currency: z.string().meta({ examples: ['TRY'] }),
    purchase: z.number().meta({ examples: [1000] }),
    sell: z.number().meta({ examples: [1500] }),
    dealerCode: z.string().meta({ examples: ['SURAT'] }),
    shipping: z.number().meta({ examples: [150] }),
    discount: z.number().meta({ examples: [10] }),
    tax: z.number().meta({ examples: [20] }),
  });

export const PRODUCT_PROPERTIES = () =>
  z.object({
    hidePrice: z.boolean().optional().meta({ examples: [false] }),
    isFeatured: z.boolean().optional().meta({ examples: [false] }),
    isShippingFree: z.boolean().optional().meta({ examples: [false] }),
  });

export const VARIANTS_TYPE = () =>
  z.array(
    z.object({
      name: z.string().meta({ examples: ['Renk'] }),
      variants: z.array(z.string()).meta({ examples: [['Siyah']] }),
    }),
  );

export const PRODUCT = () =>
  z.object({
    title: z.string().meta({ examples: ['Lorem ipsum dolor sit amet'] }),
    description: z.string().optional(),
    images: ImageSchema,
    price: PRICE(),
    stockQuantity: z.number().meta({ examples: [100] }),
    desi: z.number().meta({ examples: [2] }),
    brand: z.string().meta({ examples: ['67d15594f49546e19c4f2342'] }),
    gtin: z.string().optional().meta({ examples: ['0123456789012'] }),
    sku: z.string().meta({ examples: ['0123456'] }),
    category: z.string().meta({ examples: ['67f38474e1d5b52fee02dcba'] }),
    properties: PRODUCT_PROPERTIES(),
  });

export const ADD_PRODUCTS = () =>
  z.array(
    PRODUCT().extend({
      _id: z.string().optional().meta({ examples: ['66f29aefff9245b28d05482e'] }),
      variantsType: VARIANTS_TYPE(),
      variants: z.array(z.string()).meta({ examples: [['66f29aefff9245b28d05482c']] }),
    }),
  );

export const EDIT_PRODUCT = () =>
  z.object({
    title: z.string().optional().meta({ examples: ['Grundig Gpdh 9634'] }),
  });

export const PRODUCT_IMAGE = () =>
  z.object({
    image: z.object({
      name: z.string(),
      image: z.string(),
    }),
  });
