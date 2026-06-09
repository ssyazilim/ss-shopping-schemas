import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BASKET_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['674094c121add706a8980815'] }),
    productId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['674094c121add706a8980816'] }),
    variantId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable()
      .meta({ examples: [null] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Alluve Lilac Superslims - 20 Cigarettes'] }),
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [500] }),
    quantity: z
      .number()
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [1] }),
    category1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sigaralar'] }),
    category2: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['product'] }),
    itemType: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['PHYSICAL'] }),
    tax: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [20] }),
  });
};
export const ADD_SHIPPING_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ayşe'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarı'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    district: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Serik'] }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik'] }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07500'] }),
  });
};
export const ADD_BILLING_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Halil'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Gür'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    district: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Konyaaltı'] }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Bahçelievler Mahallesi, Atatürk Parkı 25/21'] }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07500'] }),
  });
};
export const ADD_BUYER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({
        examples: ['ayse.sari@mailinator.com'],
        description: 'https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true&to=ayse.sari',
      }),
    identityNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['19342410262'] }),
    registrationAddress: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    district: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Serik'] }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07500'] }),
    message: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .or(z.literal(''))
      .optional()
      .meta({ examples: ['Hediye paketi olsun!'] }),
  });
};
export const ADD_PAYMENT_CARD = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ALI'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SARI'] }),
    cardNumber: z
      .string()
      .min(16, { message: m.public_forms_validations_minLength(16) })
      .max(16, { message: m.public_forms_validations_maxLength(16) })
      .meta({ examples: ['5890040000000016'] }),
    expireMonth: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(2, { message: m.public_forms_validations_maxLength(2) })
      .meta({ examples: ['11'] }),
    expireYear: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['2026'] }),
    cvc: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['704'] }),
    installment: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    registerCard: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
  });
};
export const ADD_SHIPMENT = () => {
  return z.object({
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
};
export const ADD_PAYMENT_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['66ae616a9d86f0da5d4d25f6'] }),
    paymentId: z
      .string()
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(12, { message: m.public_forms_validations_maxLength(12) })
      .meta({ examples: ['22629933'] }),
    token: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['649eb03e-cfd2-4f24-86b0-95628a37a029'] }),
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Halil Erbil Gür'] }),
    phoneNumber: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['905527406607'] }),
    email: z.email().meta({ examples: ['halilerbilgur@gmail.com'] }),
  });
};
export const ADD_PAYMENT = (locale: ILocale = 'tr') => {
  return z.object({
    paymentCard: ADD_PAYMENT_CARD(locale),
    buyer: ADD_BUYER(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS(locale),
    billingAddress: ADD_BILLING_ADDRESS(locale),
    basketItems: z.array(ADD_BASKET_ITEM(locale)),
    shipment: ADD_SHIPMENT().optional(),
  });
};
export const SAVE_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    method: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['pending'] }),
    paymentUser: ADD_PAYMENT_USER(locale),
    buyer: ADD_BUYER(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS(locale),
    billingAddress: ADD_BILLING_ADDRESS(locale),
    basketItems: z.array(ADD_BASKET_ITEM(locale)),
    shipment: ADD_SHIPMENT(),
  });
};
export const CHECK_HTML_FOR_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentCard: z.object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['Ali'] }),
      surname: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['SARI'] }),
    }),
    buyer: ADD_BUYER(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS(locale),
    billingAddress: ADD_BILLING_ADDRESS(locale),
    basketItems: z.array(ADD_BASKET_ITEM(locale)),
  });
};
export const COMPLETE_PAYMENT_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    conversationId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['e1e4b5c04f3a4b6a9d8ca0a6f3e3f4a1'] }),
    conversationData: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: [''] }),
  });
};
export const CHECK_INSTALLMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    binNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['531157'] }),
    price: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['2500'] }),
  });
};
export const CANCEL_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const UPDATE_TAX = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    tax: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [20] }),
  });
};

export const ADD_PAYMENT_INFORMATIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    email: z.email(),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    district: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
