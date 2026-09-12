import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';
import { deepPartial } from '../common';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const UPDATE_COMPANY = (locale: ILocale = 'tr') =>
  deepPartial(ADD_COMPANY(locale)).meta({ id: 'UpdateCompany' });

export const UPDATE_COMPANY_PAYMENT = (locale: ILocale = 'tr') =>
  ADD_COMPANY_PAYMENT(locale)
    .partial()
    .extend({ paymentId: z.string().length(24) })
    .meta({ id: 'UpdateCompanyPayment' });

export const ADD_COMPANY_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      isCompany: z.boolean(),
      companyName: z.string().optional(),
      name: z.string().optional(),
      surname: z.string().optional(),
      taxOffice: z.string().optional(),
      taxNumber: z.string().optional(),
      identityNumber: z.string().optional(),
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
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .optional(),
      line: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(6500, { message: m.public_forms_validations_maxLength(6500) }),
    })
    .meta({ id: 'CompanyAddress' });
};
export const ADD_COMPANY_SOCIAL_MEDIA = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      link: z.url({ message: m.public_forms_validations_url }),
      icon: z.string(),
    })
    .meta({ id: 'CompanySocialMedia' });
};
export const ADD_COMPANY_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      status: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      content: z.any(),
    })
    .meta({ id: 'CompanyPayment' });
};
export const ADD_COMPANY_PROPERTIES_HOME_PAGE = () => {
  return z
    .object({
      article: z.boolean(),
      blog: z.boolean(),
      event: z.boolean(),
      news: z.boolean(),
      category: z.boolean(),
      categoryPreview: z.boolean(),
      cta: z.boolean(),
      feature: z.boolean(),
      hero: z.boolean(),
      logoCloud: z.boolean(),
      newsLetter: z.boolean(),
      slider: z.boolean(),
      stat: z.boolean(),
      teamSection: z.boolean(),
      testimonial: z.boolean(),
    })
    .meta({ id: 'CompanyPropertiesHomePage' });
};
export const ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      cashDiscount: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      doorToDoor: z.object({
        isEnabled: z.boolean(),
        minValue: z
          .number({ message: m.public_forms_validations_mustNumber })
          .int({ message: m.public_forms_validations_mustNumberInteger })
          .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
        maxValue: z
          .number({ message: m.public_forms_validations_mustNumber })
          .int({ message: m.public_forms_validations_mustNumberInteger })
          .positive({ message: m.public_forms_validations_mustNumberPositive }),
      }),
    })
    .meta({ id: 'CompanyPropertiesPaymentSettings' });
};
export const ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      callMe: z.boolean(),
      addFavorites: z.boolean(),
      notifyWhenPriceDrops: z.boolean(),
      notifyWhenProductBackInStock: z.boolean(),
      hideNoStockProducts: z.boolean(),
      hideNoPriceProducts: z.boolean(),
      hideReturnPeriod: z.boolean(),
      selectedProductListing: z.string(),
      taxAmount: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      showTaxAmount: z.boolean(),
    })
    .meta({ id: 'CompanyPropertiesProductSettings' });
};
export const ADD_COMPANY_PROPERTIES_ORDER_SETTINGS = () => {
  return z
    .object({
      orderPrefix: z.boolean(),
      orderCanDelete: z.boolean(),
    })
    .meta({ id: 'CompanyPropertiesOrderSettings' });
};
export const ADD_COMPANY_PROPERTIES = (locale: ILocale = 'tr') => {
  return z
    .object({
      homePage: ADD_COMPANY_PROPERTIES_HOME_PAGE(),
      paymentSettings: ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS(locale),
      productSettings: ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS(locale),
      orderSettings: ADD_COMPANY_PROPERTIES_ORDER_SETTINGS(),
    })
    .meta({ id: 'CompanyProperties' });
};
export const ADD_COMPANY_MAIL_OPTIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      user: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      password: z
        .string()
        .min(8, { message: m.public_forms_validations_minLength(8) })
        .max(64, { message: m.public_forms_validations_maxLength(64) }),
      host: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      port: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .positive({ message: m.public_forms_validations_mustNumberPositive }),
      secure: z.boolean(),
      rejectUnauthorized: z.boolean(),
      mainMail: z.email({ message: m.public_forms_validations_email }),
      secondMail: z.email({ message: m.public_forms_validations_email }),
      from: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
    })
    .meta({ id: 'CompanyMailOptions' });
};
export const ADD_COMPANY_SHIPPING_OPTIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      shipment: z.object({
        all: z
          .object({
            isEnabled: z.boolean(),
          })
          .optional(),
        geliver: z
          .object({
            isEnabled: z.boolean(),
          })
          .optional(),
        automatic: z
          .object({
            isEnabled: z.boolean(),
            name: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
            code: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
          })
          .optional(),
        standard: z
          .object({
            isEnabled: z.boolean(),
            name: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
            code: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
            price: z.object({
              currency: z
                .string()
                .min(2, { message: m.public_forms_validations_minLength(2) })
                .max(254, { message: m.public_forms_validations_maxLength(254) }),
              currencyLocale: z
                .string()
                .min(2, { message: m.public_forms_validations_minLength(2) })
                .max(254, { message: m.public_forms_validations_maxLength(254) }),
              sell: z
                .number({ message: m.public_forms_validations_mustNumber })
                .int({ message: m.public_forms_validations_mustNumberInteger })
                .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
              sellLocale: z
                .number({ message: m.public_forms_validations_mustNumber })
                .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
            }),
          })
          .optional(),
      }),
      properties: z.object({
        free: z.object({
          isEnabled: z.boolean(),
          price: z.object({
            currency: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
            currencyLocale: z
              .string()
              .min(2, { message: m.public_forms_validations_minLength(2) })
              .max(254, { message: m.public_forms_validations_maxLength(254) }),
            sell: z
              .number({ message: m.public_forms_validations_mustNumber })
              .int({ message: m.public_forms_validations_mustNumberInteger })
              .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
            sellLocale: z
              .number({ message: m.public_forms_validations_mustNumber })
              .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
          }),
        }),
      }),
    })
    .meta({ id: 'CompanyShippingOptions' });
};
export const ADD_COMPANY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      baseUrl: z.url({ message: m.public_forms_validations_url }).optional(),
      logo: IMAGES(locale).shape.staticImages.optional(),
      favicon: IMAGES(locale).shape.staticImages.optional(),
      description: z
        .string()
        .max(1000, { message: m.public_forms_validations_maxLength(1000) })
        .optional(),
      timeZone: z.string().optional(),
      currency: z.string().optional(),
      address: ADD_COMPANY_ADDRESS(locale),
      socialMedia: z.array(ADD_COMPANY_SOCIAL_MEDIA(locale)),
      payments: z.array(ADD_COMPANY_PAYMENT(locale)),
      properties: ADD_COMPANY_PROPERTIES(),
      mailOptions: ADD_COMPANY_MAIL_OPTIONS(locale),
      shippingOptions: ADD_COMPANY_SHIPPING_OPTIONS(),
    })
    .meta({ id: 'AddCompany' });
};

export const UPDATE_TAX = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      tax: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    })
    .meta({ id: 'UpdateTax' });
};

export const ADD_SOCIAL_MEDIA_LINKS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    facebook: z.url({ message: m.public_forms_validations_url }).or(z.literal('')),
    twitter: z.url({ message: m.public_forms_validations_url }).or(z.literal('')),
    instagram: z.url({ message: m.public_forms_validations_url }).or(z.literal('')),
    youtube: z.url({ message: m.public_forms_validations_url }).or(z.literal('')),
  });
};
