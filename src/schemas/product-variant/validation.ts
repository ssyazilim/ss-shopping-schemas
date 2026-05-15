import { z } from 'zod';
import { PRICE, VARIANTS_TYPE } from '../product/validation';
import { ImageSchema } from '../../types/zod/image';

export const VARIANT = () =>
  z.object({
    name: z.string().meta({ examples: ['Siyah'] }),
    images: ImageSchema,
    price: PRICE(),
    stockQuantity: z.number().meta({ examples: [100] }),
    sku: z.string().meta({ examples: ['4SN106C'] }),
    gtin: z
      .string()
      .optional()
      .meta({ examples: ['0123450123456'] }),
    desi: z.number().meta({ examples: [2] }),
  });

export const ADD_VARIANT = () =>
  z.object({
    variantsType: VARIANTS_TYPE(),
    variant: VARIANT(),
  });

export const ADD_VARIANTS_MULTI = () =>
  z.array(
    VARIANT().extend({
      productId: z.string().meta({ examples: ['66f29aefff9245b28d05482f'] }),
      _id: z
        .string()
        .optional()
        .meta({ examples: ['66f29aefff9245b28d05482e'] }),
    }),
  );

export const UPDATE_VARIANT = () =>
  z.object({
    variantsType: VARIANTS_TYPE(),
    _id: z
      .string()
      .optional()
      .meta({ examples: ['66f27bdc8a01cf36d27cbe1c'] }),
    name: z.string().meta({ examples: ['Siyah'] }),
  });

export const DELETE_FOR_VARIANT = () =>
  z.object({
    selectedIds: z.array(z.string()).meta({ description: 'IDs to delete' }),
    productId: z.string(),
    variantsType: VARIANTS_TYPE(),
  });
