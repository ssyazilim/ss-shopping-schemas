import { z } from 'zod';
import { registry } from '../registry';

export const AddToCartSchema = registry.register(
  'AddToCart',
  z.object({
    productId: z.string(),
    variantId: z.string(),
    quantity: z.number(),
  }),
);

export const SetQuantitySchema = registry.register(
  'SetQuantity',
  z.object({
    itemId: z.string(),
    quantity: z.number().meta({ examples: [1] }),
  }),
);
