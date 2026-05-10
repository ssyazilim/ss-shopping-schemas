import { z } from 'zod';
import { registry } from '../registry';

const BasketItemSchema = z.object({
  id: z.string().meta({ examples: ['674094c121add706a8980815'] }),
  name: z.string().meta({ examples: ['Alluve Lilac Superslims'] }),
  price: z.number().meta({ examples: [500] }),
  quantity: z.number().meta({ examples: [1] }),
  category1: z.string().meta({ examples: ['Sigaralar'] }),
  category2: z.string().meta({ examples: ['product'] }),
  itemType: z.string().meta({ examples: ['PHYSICAL'] }),
  tax: z.number().meta({ examples: [20] }),
});

const BasketItemsSchema = registry.register('BasketItems', z.array(BasketItemSchema));

const BillingAddressSchema = registry.register(
  'BillingAddress',
  z.object({
    name: z.string().meta({ examples: ['Halil'] }),
    surname: z.string().meta({ examples: ['Gür'] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    address: z.string().meta({ examples: ['Bahçelievler Mahallesi, Atatürk Parkı 25/21'] }),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07030'] }),
  }),
);

const BuyerSchema = registry.register(
  'Buyer',
  z.object({
    email: z.email().meta({ examples: ['david@example.com'] }),
    identityNumber: z.string().meta({ examples: ['19342410262'] }),
    registrationAddress: z.string(),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07500'] }),
  }),
);

const PaymentCardSchema = registry.register(
  'PaymentCard',
  z.object({
    name: z.string().meta({ examples: ['ALI'] }),
    surname: z.string().meta({ examples: ['SARI'] }),
    cardNumber: z.string().meta({ examples: ['5890040000000016'] }),
    expireMonth: z.string().meta({ examples: ['11'] }),
    expireYear: z.string().meta({ examples: ['2026'] }),
    cvc: z.string().meta({ examples: ['704'] }),
    installment: z.number().meta({ examples: [1] }),
    registerCard: z.number().meta({ examples: [0] }),
  }),
);

const PaymentShippingAddressSchema = registry.register(
  'PaymentShippingAddress',
  z.object({
    name: z.string().meta({ examples: ['Ayşe'] }),
    surname: z.string().meta({ examples: ['Sarı'] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    address: z.string(),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07500'] }),
  }),
);

const ShipmentSchema = registry.register(
  'PaymentShipment',
  z.object({
    method: z.string().meta({ examples: ['standard'] }),
    orderID: z.string().optional(),
    orderNumber: z.string().optional(),
    orderOrganizationID: z.string().optional(),
    offerID: z.string().optional(),
    offerProviderCode: z.string().meta({ examples: ['GELIVER'] }),
    offerTotalAmount: z.number().meta({ examples: [0] }),
    desi: z.number().meta({ examples: [1] }),
    barcode: z.string().optional(),
    trackingID: z.string().optional(),
    trackingNumber: z.string().optional(),
    trackingURL: z.string().optional(),
    trackingStatusCode: z.string().optional(),
    trackingStatusUpdate: z.string().optional(),
    labelFileType: z.string().optional(),
    labelURL: z.string().optional(),
    labelResponsiveURL: z.string().optional(),
  }),
);

export const AddPaymentSchema = registry.register(
  'AddPayment',
  z.object({
    paymentCard: PaymentCardSchema,
    buyer: BuyerSchema,
    shippingAddress: PaymentShippingAddressSchema,
    billingAddress: BillingAddressSchema,
    basketItems: BasketItemsSchema,
    shipment: ShipmentSchema.optional(),
  }),
);

export const CheckHTMLForIyzicoSchema = registry.register(
  'CheckHTMLForIyzico',
  z.object({
    paymentCard: z.object({
      name: z.string().meta({ examples: ['Ali'] }),
      surname: z.string().meta({ examples: ['SARI'] }),
    }),
    buyer: BuyerSchema,
    shippingAddress: PaymentShippingAddressSchema,
    billingAddress: BillingAddressSchema,
    basketItems: BasketItemsSchema,
  }),
);

export const CheckInstallmentSchema = registry.register(
  'CheckInstallment',
  z.object({
    binNumber: z.string().meta({ examples: ['531157'] }),
    price: z.string().meta({ examples: ['2500'] }),
  }),
);

export const CompletePayment3DSchema = registry.register(
  'CompletePayment3D',
  z.object({
    conversationId: z.string().meta({ examples: ['e1e4b5c04f3a4b6a9d8ca0a6f3e3f4a1'] }),
    conversationData: z.string(),
  }),
);

const PaymentUserSchema = registry.register(
  'PaymentUser',
  z.object({
    id: z.string().meta({ examples: ['66ae616a9d86f0da5d4d25f6'] }),
    paymentId: z.string().meta({ examples: ['22629933'] }),
    token: z.string(),
    contactName: z.string().meta({ examples: ['Halil Erbil Gür'] }),
    phoneNumber: z.string().meta({ examples: ['905527406607'] }),
    email: z.email().meta({ examples: ['halilerbilgur@gmail.com'] }),
  }),
);

export const SavePaymentSchema = registry.register(
  'SavePayment',
  z.object({
    method: z.number().meta({ examples: [0] }),
    status: z.string().meta({ examples: ['pending'] }),
    paymentUser: PaymentUserSchema,
    buyer: BuyerSchema,
    shippingAddress: PaymentShippingAddressSchema,
    billingAddress: BillingAddressSchema,
    basketItems: BasketItemsSchema,
    shipment: ShipmentSchema.optional(),
  }),
);

export const CancelPaymentSchema = registry.register(
  'CancelPayment',
  z.object({
    paymentId: z.string(),
  }),
);

export const UpdateTaxSchema = registry.register(
  'UpdateTax',
  z.object({
    tax: z.number().meta({ examples: [20] }),
  }),
);
