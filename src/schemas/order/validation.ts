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
      .nullable(),
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    email: z.email({ message: m.public_forms_validations_email }),
  });
};
export const ADD_ORDER_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z.string().nullable(),
    method: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    provider: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_ORDER_BUYER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    email: z.email({ message: m.public_forms_validations_email }),
    identityNumber: z.string().length(11, { message: m.public_forms_validations_minLength(11) }),
    registrationAddress: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
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
    message: z.string().optional(),
  });
};
export const ADD_ORDER_SHIPPING = (locale: ILocale = 'tr') => {
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
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_ORDER_BILLING = (locale: ILocale = 'tr') => {
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
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_ORDER_BASKET_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    productId: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    variantId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable(),
    quantity: z.number().int().min(1),
  });
};
export const ADD_ORDER_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    method: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    statusCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    offerProviderCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    offerTotalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    orderId: z.string().optional(),
    orderNumber: z.string().optional(),
    orderOrganizationId: z.string().optional(),
    offerId: z.string().optional(),
    offerAverageEstimatedTime: z.string().optional(),
    barcode: z.string().optional(),
    trackingId: z.string().optional(),
    trackingNumber: z.string().optional(),
    trackingUrl: z.string().optional(),
    trackingStatusCode: z.string().optional(),
    trackingSubStatusCode: z.string().optional(),
    trackingStatusUpdate: z.string().optional(),
    labelFileType: z.string().optional(),
    labelUrl: z.string().optional(),
    labelResponsiveUrl: z.string().optional(),
  });
};

export const SAVE_ORDER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    orderId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    orderNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    language: z.string().length(2, { message: m.public_forms_validations_minLength(2) }),
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
