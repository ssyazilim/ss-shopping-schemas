import { z } from 'zod';
import { fields } from '../../utils/fields';
import { ILocale } from '../../locales';
import { messages } from '../../locales';

export const SHIPPING_ITEM = (locale: ILocale) => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    title: f.text(),
    quantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger }),
  });
};

export const SHIPPING_ORDER_INFO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    sourceCode: f.text(),
    sourceIdentifier: f.text(),
    orderNumber: f.text(),
    totalAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .optional(),
    totalAmountCurrency: z.string().optional(),
  });
};
export const ADD_SHIPPING_SHIPMENT_ADDRESS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      name: f.text(),
      email: f.email(),
      phone: f.phone(),
      address1: f.text(),
      address2: f.text(0).optional(),
      countryCode: f.text(),
      cityName: f.text(),
      cityCode: f.text(),
      districtID: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .positive({ message: m.public_forms_validations_mustNumberPositive })
        .optional(),
      districtName: f.text(),
      zip: f.text(),
      isRecipientAddress: z.boolean(),
      shortName: f.text(),
    })
    .meta({ id: 'addShippingAddress' });
};
export const SHIPPING_PACKAGE_DIMENSIONS = (locale: ILocale = 'tr', optional = false) => {
  const f = fields(locale);
  const size = () => {
    const base = f.text();
    return optional ? base.optional() : base;
  };

  return z.object({
    length: size(),
    width: size(),
    height: size(),
    weight: size(),
    distanceUnit: f.text(),
    massUnit: f.text(),
  });
};
export const SHIPPING_RECIPIENT_ADDRESS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    email: f.email(),
    phone: f.phone(),
    address1: f.text(),
    countryCode: f.text(),
    cityCode: f.text(),
    districtName: f.text(),
  });
};
export const ADD_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      test: z.boolean(),
      items: z.array(SHIPPING_ITEM(locale)),
      senderAddressID: f.text(),
      returnAddressID: f.text(),
      recipientAddress: SHIPPING_RECIPIENT_ADDRESS(locale).optional(),
      recipientAddressID: f.text().optional(),
      order: SHIPPING_ORDER_INFO(),
      parcelTemplateID: f.text().optional(),
      productPaymentOnDelivery: z.boolean().optional(),
      hidePackageContentOnTag: z.boolean().optional(),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale, true).shape)
    .meta({ id: 'addShippingShipment' });
};
export const CREATE_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  return z
    .object({
      providerServiceCode: z.string().optional(),
      providerAccountID: z.string().optional(),
      shipment: ADD_SHIPPING_SHIPMENT(locale),
    })
    .meta({ id: 'createShippingShipment' });
};
export const SHIPPING_RETURN_ADDRESS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    email: f.email().optional(),
    phone: f.text().optional(),
    address1: f.text().optional(),
    countryCode: f.text().optional(),
    cityCode: f.text().optional(),
    districtName: f.text().optional(),
  });
};
export const RETURN_SHIPPING_SHIPMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      isReturn: z.boolean().optional(),
      providerServiceCode: f.text().optional(),
      count: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .optional(),
      senderAddress: SHIPPING_RETURN_ADDRESS(locale).optional(),
    })
    .meta({ id: 'returnShippingShipment' });
};
export const UPDATE_SHIPPING_PACKAGE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      length: f.text().optional(),
      width: f.text().optional(),
      height: f.text().optional(),
      weight: f.text().optional(),
    })
    .meta({ id: 'updateShippingPackage' });
};
export const SHIPPING_TEMPLATE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      name: f.text(),
    })
    .extend(SHIPPING_PACKAGE_DIMENSIONS(locale).shape)
    .meta({ id: 'shippingTemplate' });
};
export const SHIPPING_PROVIDER = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      username: f.text(),
      password: f.text().optional(),
      providerCode: f.text(),
      version: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger }),
      isActive: z.boolean(),
      isC2C: z.boolean().optional(),
      sharable: z.boolean(),
      isTest: z.boolean().optional(),
      parameters: z.record(z.string(), z.unknown()).optional(),
    })
    .meta({ id: 'shippingProvider' });
};
export const SHIPPING_WEBHOOK = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      url: f.url(),
      type: f.text(),
      headerName: f.text(0).optional(),
      headerValue: f.text(0).optional(),
    })
    .meta({ id: 'shippingWebhook' });
};
