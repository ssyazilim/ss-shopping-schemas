import { z } from 'zod';
import { registry } from '../registry';
import { ImagesSchema, PriceSchema, VariantsTypeSchema } from '../product/schema';
import { DeleteModelSchema } from '../common';

export const VariantSchema = registry.register(
  'Variant',
  z.object({
    name: z.string().meta({ examples: ['Siyah'] }),
    images: ImagesSchema,
    price: PriceSchema,
    stockQuantity: z.number().meta({ examples: [100] }),
    sku: z.string().meta({ examples: ['4SN106C'] }),
    gtin: z
      .string()
      .optional()
      .meta({ examples: ['0123450123456'] }),
    desi: z.number().meta({ examples: [2] }),
  }),
);

export const AddVariantSchema = registry.register(
  'AddVariant',
  z.object({
    variantsType: VariantsTypeSchema,
    variant: VariantSchema,
  }),
);

export const AddVariantsMultiSchema = registry.register(
  'AddVariantsMulti',
  z.array(
    VariantSchema.extend({
      productId: z.string().meta({ examples: ['66f29aefff9245b28d05482f'] }),
      _id: z
        .string()
        .optional()
        .meta({ examples: ['66f29aefff9245b28d05482e'] }),
    }),
  ),
);

export const UpdateVariantSchema = registry.register(
  'UpdateVariant',
  z.object({
    variantsType: VariantsTypeSchema,
    _id: z
      .string()
      .optional()
      .meta({ examples: ['66f27bdc8a01cf36d27cbe1c'] }),
    name: z.string().meta({ examples: ['Siyah'] }),
  }),
);

export const DeleteForVariantSchema = registry.register(
  'DeleteForVariant',
  DeleteModelSchema.extend({
    productId: z.string(),
    variantsType: VariantsTypeSchema,
  }),
);
