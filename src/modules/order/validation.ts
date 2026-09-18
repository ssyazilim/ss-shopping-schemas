import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import { ILocale } from '../../locales';
import { messages } from '../../locales';

export const ADD_ORDER_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z.object({
    id: f.text(24,24).nullable(),
    contactName: f.text(),
    phoneNumber: f.phone(),
    email: f.email(),
  });
};
export const ADD_ORDER_PAYMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    id: f.text(0).nullable(),
    method: f.text(),
    status: f.text(),
    provider: f.text(),
  });
};
export const ADD_ORDER_BUYER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z.object({
    contactName: f.text(),
    email: f.email(),
    identityNumber: f.text(11, 11),
    registrationAddress: f.text(),
    country: f.text(),
    city: f.text(),
    district: f.text(),
    zipCode: f.text(),
    message: f.text(0).optional(),
  });
};
export const ADD_ORDER_SHIPPING = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    surname: f.text(),
    country: f.text(),
    city: f.text(),
    district: f.text(),
    address: f.text(),
    zipCode: f.text(),
  });
};
export const ADD_ORDER_BILLING = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    surname: f.text(),
    country: f.text(),
    city: f.text(),
    district: f.text(),
    address: f.text(),
    zipCode: f.text(),
  });
};
export const ADD_ORDER_BASKET_ITEM = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z.object({
    productId: f.text(24, 24),
    variantId: f.text(24,24).nullable(),
    quantity: z.number().int().min(1),
  });
};
export const ADD_ORDER_SHIPMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    method: f.text(),
    statusCode: f.text(),
    offerProviderCode: f.text(),
    offerTotalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    orderId: f.text(0).optional(),
    orderNumber: f.text(0).optional(),
    orderOrganizationId: f.text(0).optional(),
    offerId: f.text(0).optional(),
    offerAverageEstimatedTime: f.text(0).optional(),
    barcode: f.text(0).optional(),
    trackingId: f.text(0).optional(),
    trackingNumber: f.text(0).optional(),
    trackingUrl: f.text(0).optional(),
    trackingStatusCode: f.text(0).optional(),
    trackingSubStatusCode: f.text(0).optional(),
    trackingStatusUpdate: f.text(0).optional(),
    labelFileType: f.text(0).optional(),
    labelUrl: f.text(0).optional(),
    labelResponsiveUrl: f.text(0).optional(),
  });
};

export const SAVE_ORDER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      status: f.text(),
      orderId: f.text(),
      orderNumber: f.text(),
      languageId: f.text(2,2),
      user: ADD_ORDER_USER(locale),
      payment: ADD_ORDER_PAYMENT(locale),
      buyer: ADD_ORDER_BUYER(locale),
      shippingAddress: ADD_ORDER_SHIPPING(locale),
      billingAddress: ADD_ORDER_BILLING(locale),
      basketItems: z.array(ADD_ORDER_BASKET_ITEM(locale)),
      shipment: ADD_ORDER_SHIPMENT(locale),
    })
    .meta({ id: 'saveOrder' });
};

export const UPDATE_ORDER = (locale: ILocale = 'tr') =>
  deepPartial(SAVE_ORDER(locale)).meta({ id: 'editOrder' });

export const ADD_ORDER_INFORMATIONS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    contactName: f.text(),
    phoneNumber: f.phone(),
    email: f.email(),
    country: f.text(),
    city: f.text(),
    district: f.text(),
    zipCode: f.text(),
    address: f.text(),
    message: f.text(0).optional(),
  });
};
export const ADD_ORDER_CASH = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    surname: f.text(),
    phoneNumber: f.phone(),
    email: f.email(),
  });
};
