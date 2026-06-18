import { z } from 'zod';
import {
  ADD_BUYER,
  ADD_SHIPPING_ADDRESS,
  ADD_BASKET_ITEM,
  ADD_PAYMENT_USER,
  ADD_SHIPMENT,
  SAVE_PAYMENT,
} from '../schemas/payment/validation';
import { MongoSchema } from './common';
import { ImageSchema } from './product';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import type { IProduct } from './product';
import type { IVariant } from './variant';
import type { IUser } from './user';

export type IPaymentStatus = z.infer<typeof PaymentStatusSchema>;
export const PaymentStatusSchema = z.string();

export type IProductBasket = z.infer<typeof ProductBasketSchema>;
export const ProductBasketSchema = z.object({
  _id: z.string(),
  productId: z.string(),
  images: ImageSchema,
  sku: z.string(),
  description: z.string().optional(),
});

export type IPaymentBasketItems = Omit<
  z.infer<typeof PaymentBasketItemsSchema>,
  'productId' | 'variantId'
> & {
  productId: string | IProduct;
  variantId: string | IVariant | null;
};
export const PaymentBasketItemsSchema = ADD_BASKET_ITEM().extend(MongoSchema.shape);

export type IPayment = Omit<z.infer<typeof PaymentSchema>, 'paymentUser'> & {
  paymentUser: Omit<z.infer<typeof PaymentSchema>['paymentUser'], 'id'> & { id: IUser | string };
};
export const PaymentSchema = SAVE_PAYMENT()
  .extend({
    paymentUser: ADD_PAYMENT_USER().extend({
      ipAddress: z.string().optional(),
      userAgent: z.string().optional(),
    }),
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_PAYMENT_BUYER: IPayment['buyer'] = getDefaultsForSchema(ADD_BUYER());
export const DEFAULT_PAYMENT_ADDRESS: IPayment['shippingAddress'] =
  getDefaultsForSchema(ADD_SHIPPING_ADDRESS());
export const DEFAULT_SHIPMENT: IPayment['shipment'] = getDefaultsForSchema(ADD_SHIPMENT());
export const DEFAULT_PAYMENT_USER: IPayment['paymentUser'] =
  getDefaultsForSchema(ADD_PAYMENT_USER());
export const DEFAULT_PAYMENT: IPayment = getDefaultsForSchema(PaymentSchema);
