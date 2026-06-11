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
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Lorem ipsum dolor sit amet'] }),
    quantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [2] }),
  });
};

export const SHIPPING_ORDER_INFO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    sourceCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['API'] }),
    sourceIdentifier: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['http://localhost:5000'] }),
    orderNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['1234567890'] }),
    totalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .optional()
      .meta({ examples: [250] }),
    totalAmountCurrency: z
      .string()
      .optional()
      .meta({ examples: ['TL'] }),
  });
};
export const ADD_SHIPPING_SHIPMENT_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ufuk Sarı'] }),
    email: z.email().meta({ examples: ['ufuk.sari@mailinator.com'] }),
    phone: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['+905309464864'] }),
    address1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Belek mahallesi Atatürk caddesi No: 11/1'] }),
    address2: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .or(z.literal(''))
      .optional()
      .meta({ examples: [''] }),
    countryCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['TR'] }),
    cityName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    cityCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07'] }),
    districtID: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .optional(),
    districtName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Belek'] }),
    zip: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07500'] }),
    isRecipientAddress: z.boolean().meta({ examples: [true] }),
    shortName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['UFUKSARI'] }),
  });
};
export const SHIPPING_PACKAGE_DIMENSIONS = (locale: ILocale = 'tr', optional = false) => {
  const m = messages[locale];
  const size = (examples: string[]) => {
    const base = z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) });
    return (optional ? base.optional() : base).meta({ examples });
  };
  const unit = (examples: string[]) =>
    z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples });
  return z.object({
    length: size(['100']),
    width: size(['50']),
    height: size(['2']),
    weight: size(['5']),
    distanceUnit: unit(['cm']),
    massUnit: unit(['kg']),
  });
};
export const ADD_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      test: z.boolean().meta({ examples: [true] }),
      items: z.array(SHIPPING_ITEM(locale)),
      senderAddressID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['7f76e149-9d63-4993-b62a-ac0eee05f830'] }),
      returnAddressID: z.string().optional(),
      recipientAddressID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['64c4f70f-83b8-4195-85c3-cb5a16751e3d'] }),
      order: SHIPPING_ORDER_INFO(),
      parcelTemplateID: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .optional()
        .meta({ examples: ['3cb149af-8c2b-4712-863a-25b39c1dbe0a'] }),
      productPaymentOnDelivery: z
        .boolean()
        .optional()
        .meta({ examples: [false] }),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale, true).shape);
};
export const CREATE_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  return z
    .object({
      providerServiceCode: z
        .string()
        .optional()
        .meta({ examples: ['GELIVER_STANDART'] }),
      providerAccountID: z
        .string()
        .optional()
        .meta({ examples: [''] }),
    })
    .extend(ADD_SHIPPING_SHIPMENT(locale).shape);
};
export const SHIPPING_RETURN_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['İzzet Sarı'] }),
    email: z.email().optional(),
    phone: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['+905332810759'] }),
    address1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional(),
    countryCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['TR'] }),
    cityCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['07'] }),
    districtName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['Serik'] }),
  });
};
export const RETURN_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    isReturn: z
      .boolean()
      .optional()
      .meta({ examples: [true] }),
    providerServiceCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['GELIVER_STANDART'] }),
    count: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .optional()
      .meta({ examples: [1] }),
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
      .optional()
      .meta({ examples: ['20'] }),
    width: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['15'] }),
    height: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['10'] }),
    weight: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['0.8'] }),
  });
};
export const SHIPPING_TEMPLATE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      name: z
        .string()
        .min(1, { message: m.public_forms_validations_minLength(1) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['kilim-olcusu'] }),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale).shape);
};
export const SHIPPING_PROVIDER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    username: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['test'] }),
    password: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['pass'] }),
    providerCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SURAT'] }),
    version: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [1] }),
    isActive: z.boolean().meta({ examples: [false] }),
    isC2C: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    sharable: z.boolean().meta({ examples: [true] }),
    isTest: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    parameters: z.record(z.string(), z.unknown()).optional(),
  });
};
export const SHIPPING_WEBHOOK = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    url: z
      .url({ message: m.public_forms_validations_url })
      .meta({ examples: ['https://webhook.site/test'] }),
    type: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['TRACK_UPDATED'] }),
    headerName: z.string().optional(),
    headerValue: z.string().optional(),
  });
};
