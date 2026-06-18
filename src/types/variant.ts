import { z } from 'zod';
import { VARIANT } from '../schemas';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import { PriceSchema, ProductSchema } from './product';
import { ImageSchema } from './product';

export type IVariant = z.infer<typeof VariantSchema>;
export const VariantSchema = VARIANT()
  .extend({
    productId: z.union([z.string(), ProductSchema]),
    order: z.object({ totalCount: z.number() }),
    price: PriceSchema,
  })
  .extend(MongoSchema.shape);

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

export type IgV = z.infer<typeof gVSchema>;
export const gVSchema = z.record(z.string(), z.array(z.string()));

export type IActionItem = z.infer<typeof ActionItemSchema>;
export const ActionItemSchema = z.object({
  name: z.string(),
  variants: z.array(z.string()),
});

export type IAction = z.infer<typeof ActionSchema>;
export const ActionSchema = z.enum(['helper', 'table']);

export type ISellPrice = z.infer<typeof SellPriceSchema>;
export const SellPriceSchema = z.object({
  sellDefault: z.number(),
  sell: z.number(),
  discount: z.number(),
});

export type IFields = z.infer<typeof FieldsSchema>;
export const FieldsSchema = z.enum(['stockQuantity', 'sku', 'desi', 'selectedLabel', 'gtin']);

export type IInputValue = z.infer<typeof InputValueSchema>;
export const InputValueSchema = z.object({
  index: z.number(),
  field: z.string(),
  value: z.enum(['stockQuantity', 'sku', 'desi']),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_VARIANT: IVariant = getDefaultsForSchema(VariantSchema);
