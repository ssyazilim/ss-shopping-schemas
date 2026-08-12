import { z } from 'zod';
import {
  ADD_ORDER_USER,
  ADD_ORDER_PAYMENT,
  ADD_ORDER_BUYER,
  ADD_ORDER_SHIPPING,
  ADD_ORDER_BILLING,
  ADD_ORDER_BASKET_ITEM,
  ADD_ORDER_SHIPMENT,
  SAVE_ORDER,
  ADD_ORDER_INFORMATIONS,
} from '../schemas/order/validation';
import { MongoSchema } from './common';
import { ImageSchema } from './product';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { PriceSchema } from './product';
import type { IProduct } from './product';
import type { IVariant } from './variant';
import type { IUser } from './user';

export type IBuyerStore = z.infer<typeof AddOrderInformationsSchema>;
export const AddOrderInformationsSchema = ADD_ORDER_INFORMATIONS();

export type IOrderStatus = z.infer<typeof OrderStatusSchema>;
export const OrderStatusSchema = z.string();

export type IProductBasket = z.infer<typeof ProductBasketSchema>;
export const ProductBasketSchema = z.object({
  _id: z.string(),
  productId: z.string(),
  images: ImageSchema,
  sku: z.string(),
  description: z.string().optional(),
});

export type IOrderUser = Omit<z.infer<typeof OrderUserSchema>, 'id'> & {
  id: IUser | string | null;
};
export const OrderUserSchema = ADD_ORDER_USER().extend({
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
});

export type IOrderPayment = z.infer<typeof OrderPaymentSchema>;
export const OrderPaymentSchema = ADD_ORDER_PAYMENT().extend({
  conversationId: z.string().optional(),
  token: z.string().optional(),
});

export type IOrderBuyer = z.infer<typeof OrderBuyerSchema>;
export const OrderBuyerSchema = ADD_ORDER_BUYER();

export type IOrderShipping = z.infer<typeof OrderShippingSchema>;
export const OrderShippingSchema = ADD_ORDER_SHIPPING();

export type IOrderBilling = z.infer<typeof OrderBillingSchema>;
export const OrderBillingSchema = ADD_ORDER_BILLING();

export type IOrderBasketItem = Omit<
  z.infer<typeof OrderBasketItemSchema>,
  'productId' | 'variantId'
> & {
  productId: string | IProduct;
  variantId: string | IVariant | null;
};
export const OrderBasketItemSchema = ADD_ORDER_BASKET_ITEM()
  .extend({
    variantId: z.string().length(24).nullable(),
    name: z.string().optional(),
    price: PriceSchema.optional(),
    category1: z.string().optional(),
    category2: z.string().optional(),
    itemType: z.string().optional(),
  })
  .extend(MongoSchema.shape);

export type IOrderShipment = z.infer<typeof OrderShipmentSchema>;
export const OrderShipmentSchema = ADD_ORDER_SHIPMENT();

export type IOrderTotal = z.infer<typeof OrderTotalSchema>;
export const OrderTotalSchema = z.object({
  currency: z.string().optional(),
  subtotalLocale: z.number().optional(),
  discountLocale: z.number().optional(),
  taxLocale: z.number().optional(),
  shippingLocale: z.number().optional(),
  grandTotalLocale: z.number().optional(),
  paidLocale: z.number().optional(),
  refundedLocale: z.number().optional(),
});

export type ISaveOrder = z.infer<ReturnType<typeof SAVE_ORDER>>;

export type IOrder = Omit<z.infer<typeof OrderSchema>, 'user' | 'basketItems'> & {
  user: IOrderUser;
  basketItems: IOrderBasketItem[];
};
export const OrderSchema = SAVE_ORDER()
  .extend({
    user: OrderUserSchema,
    payment: OrderPaymentSchema,
    buyer: OrderBuyerSchema,
    shippingAddress: OrderShippingSchema,
    billingAddress: OrderBillingSchema,
    basketItems: z.array(OrderBasketItemSchema),
    shipment: OrderShipmentSchema,
    totals: OrderTotalSchema.optional(),
  })
  .extend(MongoSchema.shape);

export type IOrderContext = z.infer<typeof OrderContextSchema>;
export const OrderContextSchema = z.object({
  ipAddress: z.string(),
  userAgent: z.string(),
  isTax: z.boolean(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export type IOrderStatuses = (typeof ORDER_STATUSES)[number];
export const ORDER_STATUSES = [
  'awaiting',
  'picking',
  'created',
  'invoiced',
  'shipped',
  'atCollectionPoint',
  'cancelled',
  'unpacked',
  'unsupplied',
  'delivered',
  'unDelivered',
  'returned',
] as const;

export type IPaymentStatuses = (typeof ORDER_STATUSES)[number];
export const PAYMENT_STATUSES = [
  'pending',
  'paid',
  'failed',
  'cancelled',
  'partially_refunded',
  'refunded',
  'confirmed',
] as const;

export type IPaymentMethodes = (typeof ORDER_STATUSES)[number];
export const PAYMENT_METHODES = [
  'checkout_form',
  'non_3ds',
  '3ds',
  'bank_transfer',
  'cash',
] as const;

export type IPaymentProviders = (typeof PAYMENT_PROVIDERS)[number];
export const PAYMENT_PROVIDERS = ['manual', 'iyzico'];

export type IProviderServiceCodes = (typeof PROVIDER_SERVICE_CODES)[number];
export const PROVIDER_SERVICE_CODES = [
  'SURAT_STANDART',
  'YURTICI_STANDART',
  'PTT_STANDART',
  'PTT_KAPIDA_ODEME',
  'DHL_STANDART',
  'HEPSIJET_STANDART',
  'KOLAYGELSIN_STANDART',
  'PAKETTAXI_STANDART',
  'ARAS_STANDART',
  'GELIVER_STANDART',
];

export type IShippingStatusCodes = (typeof SHIPPING_STATUS_CODES)[number];
export const SHIPPING_STATUS_CODES = [
  'GOT_OFFERS',
  'TRACKING_CODE_CREATED',
  'SHIPPED',
  'DELIVERED',
  'RETURNED',
  'CANCELLED',
  'FAILED',
];

export type ITrackingStatusCodes = (typeof TRACKING_STATUS_CODES)[number];
export const TRACKING_STATUS_CODES = [
  'PRE_TRANSIT',
  'TRANSIT',
  'DELIVERED',
  'FAILURE',
  'RETURNED',
  'CANCELED',
  'UNKNOWN',
];

export type ITrackingSubStatusCodes = (typeof ORDER_STATUSES)[number];
export const TRACKING_SUB_STATUS_CODES = [
  'information_received',
  'pickup_scheduled',
  'pickup_out_for_collection',
  'pickup_failed',
  'package_accepted',
  'package_departed',
  'package_processing',
  'delivery_scheduled ',
  'out_for_delivery ',
  'package_damaged ',
  'package_forwarded_to_another_carrier ',
  'delivery_rescheduled ',
  'delivered',
  'package_lost',
  'package_undeliverable',
  'return_to_sender ',
  'package_canceled ',
  'other',
] as const;

export const DEFAULT_SAVE_ORDER: ISaveOrder = getDefaultsForSchema(SAVE_ORDER());
export const DEFAULT_ORDER_USER: IOrder['user'] = getDefaultsForSchema(OrderUserSchema);
export const DEFAULT_ORDER_PAYMENT: IOrder['payment'] = getDefaultsForSchema(OrderPaymentSchema);
export const DEFAULT_ORDER_BUYER: IOrder['buyer'] = getDefaultsForSchema(OrderBuyerSchema);
export const DEFAULT_ORDER_SHIPPING: IOrder['shippingAddress'] =
  getDefaultsForSchema(OrderShippingSchema);
export const DEFAULT_ORDER_BILLING: IOrder['billingAddress'] =
  getDefaultsForSchema(OrderBillingSchema);
export const DEFAULT_ORDER_SHIPMENT: IOrder['shipment'] = getDefaultsForSchema(OrderShipmentSchema);
export const DEFAULT_ORDER: IOrder = getDefaultsForSchema(OrderSchema);
