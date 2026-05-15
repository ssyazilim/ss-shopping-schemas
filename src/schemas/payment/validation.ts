import { z } from 'zod';

export const BASKET_ITEM = () =>
  z.object({
    id: z.string().meta({ examples: ['674094c121add706a8980815'] }),
    name: z.string().meta({ examples: ['Alluve Lilac Superslims - 20 Cigarettes'] }),
    price: z.number().meta({ examples: [500] }),
    quantity: z.number().meta({ examples: [1] }),
    category1: z.string().meta({ examples: ['Sigaralar'] }),
    category2: z.string().meta({ examples: ['product'] }),
    itemType: z.string().meta({ examples: ['PHYSICAL'] }),
    tax: z.number().meta({ examples: [20] }),
  });

const PAYMENT_ADDRESS = (examples: {
  name: string;
  surname: string;
  address: string;
  zipCode: string;
}) =>
  z.object({
    name: z.string().meta({ examples: [examples.name] }),
    surname: z.string().meta({ examples: [examples.surname] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    address: z.string().meta({ examples: [examples.address] }),
    zipCode: z.string().optional().meta({ examples: [examples.zipCode] }),
  });

export const BILLING_ADDRESS = () =>
  PAYMENT_ADDRESS({
    name: 'Halil',
    surname: 'Gür',
    address: 'Bahçelievler Mahallesi, Atatürk Parkı 25/21',
    zipCode: '07030',
  });

export const BUYER = () =>
  z.object({
    email: z.email().meta({ examples: ['davidmashadow@yandex.com'] }),
    identityNumber: z.string().meta({ examples: ['19342410262'] }),
    registrationAddress: z
      .string()
      .meta({ examples: ['Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik'] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07500'] }),
  });

export const PAYMENT_CARD = () =>
  z.object({
    name: z.string().meta({ examples: ['ALI'] }),
    surname: z.string().meta({ examples: ['SARI'] }),
    cardNumber: z.string().meta({ examples: ['5890040000000016'] }),
    expireMonth: z.string().meta({ examples: ['11'] }),
    expireYear: z.string().meta({ examples: ['2026'] }),
    cvc: z.string().meta({ examples: ['704'] }),
    installment: z.number().meta({ examples: [1] }),
    registerCard: z.number().meta({ examples: [0] }),
  });

export const SHIPPING_ADDRESS = () =>
  PAYMENT_ADDRESS({
    name: 'Ayşe',
    surname: 'Sarı',
    address: 'Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik',
    zipCode: '07500',
  });

export const SHIPMENT = () =>
  z.object({
    method: z.string().meta({ examples: ['standard'] }),
    orderID: z
      .string()
      .optional()
      .meta({ examples: ['8959beed-0296-4ca7-8112-563829252bfa'] }),
    orderNumber: z
      .string()
      .optional()
      .meta({ examples: ['ABC12333322'] }),
    orderOrganizationID: z
      .string()
      .optional()
      .meta({ examples: [''] }),
    offerID: z
      .string()
      .optional()
      .meta({ examples: ['8e8cd00c-6fc4-4ae1-af46-013d78309287'] }),
    offerProviderCode: z.string().meta({ examples: ['GELIVER'] }),
    offerTotalAmount: z.number().meta({ examples: [0] }),
    desi: z.number().meta({ examples: [1] }),
    barcode: z
      .string()
      .optional()
      .meta({ examples: ['88242290375'] }),
    trackingID: z
      .string()
      .optional()
      .meta({ examples: ['1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
    trackingNumber: z
      .string()
      .optional()
      .meta({ examples: ['21634385'] }),
    trackingURL: z
      .string()
      .optional()
      .meta({ examples: ['https://app.geliver.io/tracking/1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
    trackingStatusCode: z
      .string()
      .optional()
      .meta({ examples: ['PRE_TRANSIT'] }),
    trackingStatusUpdate: z
      .string()
      .optional()
      .meta({ examples: ['2026-01-30T12:09:13.3327+03:00'] }),
    labelFileType: z
      .string()
      .optional()
      .meta({ examples: ['PROVIDER_PDF'] }),
    labelURL: z
      .string()
      .optional()
      .meta({
        examples: ['https://labels3.geliver.io/labels/1186e0d8-dd49-4fb9-b5ec-2d6af4146e32.pdf'],
      }),
    labelResponsiveURL: z
      .string()
      .optional()
      .meta({
        examples: [
          'https://api.geliver.io/api/v1/responsivelabels/1186e0d8-dd49-4fb9-b5ec-2d6af4146e32/1f6b',
        ],
      }),
  });

export const PAYMENT_USER = () =>
  z.object({
    id: z.string().meta({ examples: ['66ae616a9d86f0da5d4d25f6'] }),
    paymentId: z.string().meta({ examples: ['22629933'] }),
    token: z.string().meta({ examples: ['649eb03e-cfd2-4f24-86b0-95628a37a029'] }),
    contactName: z.string().meta({ examples: ['Halil Erbil Gür'] }),
    phoneNumber: z.string().meta({ examples: ['905527406607'] }),
    email: z.email().meta({ examples: ['halilerbilgur@gmail.com'] }),
  });

export const ADD_PAYMENT = () =>
  z.object({
    paymentCard: PAYMENT_CARD(),
    buyer: BUYER(),
    shippingAddress: SHIPPING_ADDRESS(),
    billingAddress: BILLING_ADDRESS(),
    basketItems: z.array(BASKET_ITEM()),
    shipment: SHIPMENT().optional(),
  });

export const SAVE_PAYMENT = () =>
  z.object({
    method: z.number().meta({ examples: [0] }),
    status: z.string().meta({ examples: ['pending'] }),
    paymentUser: PAYMENT_USER(),
    buyer: BUYER(),
    shippingAddress: SHIPPING_ADDRESS(),
    billingAddress: BILLING_ADDRESS(),
    basketItems: z.array(BASKET_ITEM()),
    shipment: SHIPMENT(),
  });

export const CHECK_HTML_FOR_IYZICO = () =>
  z.object({
    paymentCard: z.object({
      name: z.string().meta({ examples: ['Ali'] }),
      surname: z.string().meta({ examples: ['SARI'] }),
    }),
    buyer: BUYER(),
    shippingAddress: SHIPPING_ADDRESS(),
    billingAddress: BILLING_ADDRESS(),
    basketItems: z.array(BASKET_ITEM()),
  });

export const COMPLETE_PAYMENT_3D = () =>
  z.object({
    conversationId: z.string().meta({ examples: ['e1e4b5c04f3a4b6a9d8ca0a6f3e3f4a1'] }),
    conversationData: z.string().meta({ examples: [''] }),
  });

export const CHECK_INSTALLMENT = () =>
  z.object({
    binNumber: z.string().meta({ examples: ['531157'] }),
    price: z.string().meta({ examples: ['2500'] }),
  });

export const CANCEL_PAYMENT = () =>
  z.object({
    paymentId: z.string(),
  });

export const UPDATE_TAX = () =>
  z.object({
    tax: z.number().meta({ examples: [20] }),
  });
