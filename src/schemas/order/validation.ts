import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_ORDER_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable()
      .meta({ examples: [null] }),
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Bayram Sarı'] }),
    phoneNumber: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['+905549374713'] }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['arda164@hotmail.com'] }),
  });
};
export const ADD_ORDER_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .nullable()
      .meta({ examples: [null] }),
    method: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['cash'] }),
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['pending'] }),
    provider: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['manual'] }),
  });
};
export const ADD_ORDER_BUYER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ayşe Sarı'] }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['no-reply@ssyazilim.com'] }),
    identityNumber: z
      .string()
      .length(11, { message: m.public_forms_validations_minLength(11) })
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
      .optional()
      .meta({ examples: ['Hediye paketi olsun.'] }),
  });
};
export const ADD_ORDER_SHIPPING = (locale: ILocale = 'tr') => {
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
export const ADD_ORDER_BILLING = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Varyant'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Restauran A.S'] }),
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
export const ADD_ORDER_BASKET_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    productId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['6960bf13ad01e3ca157174cb'] }),
    variantId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable()
      .meta({ examples: ['69a684c0f550d1c854bb6ec9'] }),
    quantity: z
      .number()
      .int()
      .min(1)
      .meta({ examples: [1] }),
  });
};
export const ADD_ORDER_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    method: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['automatic'] }),
    statusCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['PRE_TRANSIT'] }),
    offerProviderCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SURAT_STANDART'] }),
    offerTotalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [150.5] }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    orderId: z
      .string()
      .optional()
      .meta({ examples: ['8959beed-0296-4ca7-8112-563829252bfa'] }),
    orderNumber: z
      .string()
      .optional()
      .meta({ examples: ['ABC12333322'] }),
    orderOrganizationId: z
      .string()
      .optional()
      .meta({ examples: ['5f9d1b07-0296-4ca7-8112-563829252bfa'] }),
    offerId: z
      .string()
      .optional()
      .meta({ examples: ['8e8cd00c-6fc4-4ae1-af46-013d78309287'] }),
    offerAverageEstimatedTime: z
      .string()
      .optional()
      .meta({ examples: ['02 gün 00 saat'] }),
    barcode: z
      .string()
      .optional()
      .meta({ examples: ['88242290375'] }),
    trackingId: z
      .string()
      .optional()
      .meta({ examples: ['1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
    trackingNumber: z
      .string()
      .optional()
      .meta({ examples: ['21634385'] }),
    trackingUrl: z
      .string()
      .optional()
      .meta({ examples: ['https://app.geliver.io/tracking/1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
    trackingStatusCode: z.string().optional(),
    trackingSubStatusCode: z.string().optional(),
    trackingStatusUpdate: z
      .string()
      .optional()
      .meta({ examples: ['2026-01-30T12:09:13.3327+03:00'] }),
    labelFileType: z
      .string()
      .optional()
      .meta({ examples: ['PROVIDER_PDF'] }),
    labelUrl: z
      .string()
      .optional()
      .meta({ examples: ['https://labels3.geliver.io/labels/....pdf'] }),
    labelResponsiveUrl: z
      .string()
      .optional()
      .meta({ examples: ['https://api.geliver.io/api/v1/responsivelabels/...'] }),
  });
};

export const SAVE_ORDER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['awaiting'] }),
    orderId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['2157861776'] }),
    orderNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ORD-20260803-A1B2C3D4E5'] }),
    language: z
      .string()
      .length(2, { message: m.public_forms_validations_minLength(2) })
      .meta({ examples: ['en'] }),
    user: ADD_ORDER_USER(locale),
    payment: ADD_ORDER_PAYMENT(locale),
    buyer: ADD_ORDER_BUYER(locale),
    shippingAddress: ADD_ORDER_SHIPPING(locale),
    billingAddress: ADD_ORDER_BILLING(locale),
    basketItems: z.array(ADD_ORDER_BASKET_ITEM(locale)),
    shipment: ADD_ORDER_SHIPMENT(locale),
  });
};

export const ADD_ORDER_INFORMATIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    email: z.email({ message: m.public_forms_validations_email }),
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
    message: z.string(),
  });
};
export const ADD_ORDER_CASH = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    email: z.email({ message: m.public_forms_validations_email }),
  });
};
