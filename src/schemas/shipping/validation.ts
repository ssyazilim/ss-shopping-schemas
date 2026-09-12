import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const SHIPPING_ITEM = (locale: ILocale) => {
  const m = messages[locale];
  return z.object({
    title: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    quantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger }),
  });
};

export const SHIPPING_ORDER_INFO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    sourceCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    sourceIdentifier: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    orderNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    totalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .optional(),
    totalAmountCurrency: z.string().optional(),
  });
};
export const ADD_SHIPPING_SHIPMENT_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    email: z.email({ message: m.public_forms_validations_email }),
    phone: z.e164({ message: m.public_forms_validations_phoneNumber }),
    address1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    address2: z.string().optional(),
    countryCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cityName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cityCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    districtID: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .optional(),
    districtName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    zip: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    isRecipientAddress: z.boolean(),
    shortName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const SHIPPING_PACKAGE_DIMENSIONS = (locale: ILocale = 'tr', optional = false) => {
  const m = messages[locale];
  const size = () => {
    const base = z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) });
    return optional ? base.optional() : base;
  };
  const unit = () => z.string().optional();
  return z.object({
    length: size(),
    width: size(),
    height: size(),
    weight: size(),
    distanceUnit: unit(),
    massUnit: unit(),
  });
};
export const SHIPPING_RECIPIENT_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    email: z.email({ message: m.public_forms_validations_email }),
    phone: z.e164({ message: m.public_forms_validations_phoneNumber }),
    address1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    countryCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cityCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    districtName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      test: z.boolean(),
      items: z.array(SHIPPING_ITEM(locale)),
      senderAddressID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      returnAddressID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      recipientAddress: SHIPPING_RECIPIENT_ADDRESS(locale).optional(),
      recipientAddressID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .optional(),
      order: SHIPPING_ORDER_INFO(),
      parcelTemplateID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .optional(),
      productPaymentOnDelivery: z.boolean().optional(),
      hidePackageContentOnTag: z.boolean().optional(),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale, true).shape);
};
export const CREATE_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  return z.object({
    providerServiceCode: z.string().optional(),
    providerAccountID: z.string().optional(),
    shipment: ADD_SHIPPING_SHIPMENT(locale),
  });
};
export const SHIPPING_RETURN_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    email: z.email({ message: m.public_forms_validations_email }).optional(),
    phone: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    address1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    countryCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    cityCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    districtName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
  });
};
export const RETURN_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    isReturn: z.boolean().optional(),
    providerServiceCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    count: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .optional(),
    senderAddress: SHIPPING_RETURN_ADDRESS(locale).optional(),
  });
};
export const UPDATE_SHIPPING_PACKAGE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    length: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    width: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    height: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    weight: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
  });
};
export const SHIPPING_TEMPLATE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      name: z
        .string()
        .min(1, { message: m.public_forms_validations_minLength(1) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale).shape);
};
export const SHIPPING_PROVIDER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    username: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    password: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    providerCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    version: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger }),
    isActive: z.boolean(),
    isC2C: z.boolean().optional(),
    sharable: z.boolean(),
    isTest: z.boolean().optional(),
    parameters: z.record(z.string(), z.unknown()).optional(),
  });
};
export const SHIPPING_WEBHOOK = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    url: z.url({ message: m.public_forms_validations_url }),
    type: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    headerName: z.string().optional(),
    headerValue: z.string().optional(),
  });
};
