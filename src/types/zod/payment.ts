import { z } from 'zod';
import {
  BASKET_ITEM,
  BUYER,
  BILLING_ADDRESS,
  SHIPPING_ADDRESS,
  PAYMENT_USER,
  SAVE_PAYMENT,
} from '../../schemas/payment/validation';
import { MongoSchema } from './common';
import { ImageSchema } from './product';
import type { IProduct } from './product';
import type { IVariant } from './variant';
import { DEFAULT_USER } from './user';
import type { IUser } from './user';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import type { IDefault } from './contact';

/*************************
 *       TYPES           *
 *************************/
export type IPaymentStatus = string;

export type IPayAddress = z.infer<typeof PayAddressSchema>;
export const PayAddressSchema = z.object({
  contactName: z.string(),
  country: z.string(),
  city: z.string(),
  district: z.string(),
  zipCode: z.string(),
  line: z.string(),
});

export type IPayShipping = z.infer<typeof PayShippingSchema>;
export const PayShippingSchema = z.object({
  name: z.string(),
  price: z.number(),
  couponId: z.string(),
});

export type IProductBasket = z.infer<typeof ProductBasketSchema>;
export const ProductBasketSchema = z.object({
  _id: z.string(),
  images: ImageSchema,
  sku: z.string(),
  description: z.string().optional(),
  productId: z.string().optional(),
});

export type IPaymentBasketItems = Omit<
  z.infer<typeof PaymentBasketItemsSchema>,
  'productId' | 'variantId'
> & {
  productId: string | IProduct;
  variantId: string | IVariant | null;
};
export const PaymentBasketItemsSchema = BASKET_ITEM().omit({ id: true }).extend({
  _id: z.string(),
  productId: z.string(),
  variantId: z.string().nullable(),
  updatedAt: z.string(),
  createdAt: z.string(),
});

export type IShipment = z.infer<typeof ShipmentSchema>;
export const ShipmentSchema = z.object({
  method: z.string(),
  orderId: z.string(),
  orderNumber: z.string(),
  orderOrganizationId: z.string(),
  offerId: z.string(),
  offerProviderCode: z.string(),
  offerTotalAmount: z.number(),
  offerAverageEstimatedTime: z.string(),
  desi: z.number(),
  barcode: z.string(),
  statusCode: z.string(),
  trackingId: z.string(),
  trackingNumber: z.string(),
  trackingUrl: z.string(),
  trackingStatusCode: z.string(),
  trackingSubStatusCode: z.string(),
  trackingStatusUpdate: z.string(),
  labelFileType: z.string(),
  labelUrl: z.string(),
  labelResponsiveUrl: z.string(),
});

export type IPayment = Omit<z.infer<typeof PaymentSchema>, 'paymentUser' | 'basketItems'> & {
  paymentUser: Omit<z.infer<typeof PaymentSchema>['paymentUser'], 'id'> & { id: IUser | string };
  basketItems: IPaymentBasketItems[];
};
export const PaymentSchema = SAVE_PAYMENT()
  .extend({
    method: z.number(),
    paymentUser: PAYMENT_USER().extend({
      ipAddress: z.string().optional(),
      userAgent: z.string().optional(),
    }),
    buyer: BUYER().extend({
      district: z.string(),
      message: z.string(),
      zipCode: z.string(),
    }),
    shippingAddress: SHIPPING_ADDRESS().extend({
      district: z.string(),
      zipCode: z.string(),
    }),
    billingAddress: BILLING_ADDRESS().extend({
      district: z.string(),
      zipCode: z.string(),
    }),
    basketItems: z.array(PaymentBasketItemsSchema),
    shipment: ShipmentSchema,
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_PAYMENT_BUYER: IPayment['buyer'] = getDefaultsForSchema(
  PaymentSchema.shape.buyer,
);

export const DEFAULT_PAYMENT_ADDRESS: IPayment['shippingAddress'] = getDefaultsForSchema(
  PaymentSchema.shape.shippingAddress,
);

export const DEFAULT_SHIPMENT: IPayment['shipment'] = getDefaultsForSchema(ShipmentSchema);

export const DEFAULT_PAYMENT_USER: IPayment['paymentUser'] = {
  id: DEFAULT_USER,
  paymentId: '',
  token: '',
  contactName: '',
  phoneNumber: '',
  email: '',
  ipAddress: '',
  userAgent: '',
};

export const DEFAULT_PAYMENT: IPayment = {
  ...getDefaultsForSchema(PaymentSchema),
  paymentUser: DEFAULT_PAYMENT_USER,
  shipment: DEFAULT_SHIPMENT,
};

export interface IPaymentData extends IDefault {
  payment: {
    method: number;
    status: IPaymentStatus;
    paymentUser: IPayment['paymentUser'];
    buyer: IPayment['buyer'];
    shippingAddress: IPayment['shippingAddress'];
    billingAddress: IPayment['billingAddress'];
    basketItems: IPayment['basketItems'];
    shipment: IPayment['shipment'];
  };
}
