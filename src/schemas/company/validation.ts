import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';
import { deepPartial } from '../common';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const UPDATE_COMPANY = (locale: ILocale = 'tr') => deepPartial(ADD_COMPANY(locale));

export const ADD_COMPANY_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    isCompany: z.boolean().meta({ examples: [false] }),
    companyName: z
      .string()
      .optional()
      .meta({ examples: ['Varyant Et & Balık Restaurant'] }),
    name: z
      .string()
      .optional()
      .meta({ examples: ['Halil'] }),
    surname: z
      .string()
      .optional()
      .meta({ examples: ['Gür'] }),
    taxOffice: z
      .string()
      .optional()
      .meta({ examples: ['Üçkapılar'] }),
    taxNumber: z
      .string()
      .optional()
      .meta({ examples: ['2780943302'] }),
    identityNumber: z
      .string()
      .optional()
      .meta({ examples: ['25054218850'] }),
    phoneNumber: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['+905446627836'] }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['varyantrestaurant@hotmail.com'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Turkey'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    district: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Muratpasa'] }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['07030'] }),
    line: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(6500, { message: m.public_forms_validations_maxLength(6500) })
      .meta({ examples: ['Bahçelievler Mahallesi Atatürk Parkı 25/21'] }),
  });
};
export const ADD_COMPANY_SOCIAL_MEDIA = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Facebook'] }),
    link: z
      .url({ message: m.public_forms_validations_url })
      .meta({ examples: ['https://www.facebook.com'] }),
    icon: z.string(),
  });
};
export const ADD_COMPANY_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ["{'_id':'0','name':'IBAN'}"] }),
    content: z.any().meta({ examples: ['<p>Halil Gür</p>'] }),
  });
};
export const ADD_COMPANY_PROPERTIES_HOME_PAGE = () => {
  return z.object({
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
  });
};
export const ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    cashDiscount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
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
  });
};
export const ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
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
  });
};
export const ADD_COMPANY_PROPERTIES_ORDER_SETTINGS = () => {
  return z.object({
    orderPrefix: z.boolean(),
    orderCanDelete: z.boolean(),
  });
};
export const ADD_COMPANY_PROPERTIES = (locale: ILocale = 'tr') => {
  return z.object({
    paymentMethod: z.enum(['cash', 'iyzico', 'paytr', 'lemonSqueezy']).meta({ examples: ['cash'] }),
    liveChatMethod: z.enum(['none', 'whatsapp', 'tawkTo', 'crisp']).meta({ examples: ['none'] }),
    homePage: ADD_COMPANY_PROPERTIES_HOME_PAGE(),
    paymentSettings: ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS(locale),
    productSettings: ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS(locale),
    orderSettings: ADD_COMPANY_PROPERTIES_ORDER_SETTINGS(),
  });
};
export const ADD_COMPANY_MAIL_OPTIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    user: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['no-reply@example.com'] }),
    password: z
      .string()
      .min(8, { message: m.public_forms_validations_minLength(8) })
      .max(64, { message: m.public_forms_validations_maxLength(64) })
      .meta({ examples: ['12345678'] }),
    host: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['mail.ssyazilim.com'] }),
    port: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [465] }),
    secure: z.boolean().meta({ examples: [true] }),
    rejectUnauthorized: z.boolean().meta({ examples: true }),
    mainMail: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['erbil.gur@ssyazilim.com'] }),
    secondMail: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['hande.kaya@ssyazilim.com'] }),
    from: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SS-YAZILIM-✉-<no-reply@ssyazilim.com>'] }),
  });
};
export const ADD_COMPANY_COMMUNICATION_OPTIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    method: z.enum(['none', 'netgsm', 'twilio']).meta({ examples: ['none'] }),
    netgsm: z.object({
      sender: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    }),
    twilio: z.object({
      accountSid: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      authToken: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    }),
  });
};
export const ADD_COMPANY_SHIPPING_OPTIONS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    method: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['standard'] }),
    shipment: z.object({
      automatic: z
        .object({
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
          name: z
            .string()
            .min(2, { message: m.public_forms_validations_minLength(2) })
            .max(254, { message: m.public_forms_validations_maxLength(254) }),
          code: z
            .string()
            .min(2, { message: m.public_forms_validations_minLength(2) })
            .max(254, { message: m.public_forms_validations_maxLength(254) }),
          price: z
            .number({ message: m.public_forms_validations_mustNumber })
            .int({ message: m.public_forms_validations_mustNumberInteger })
            .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
          priceLocale: z
            .number({ message: m.public_forms_validations_mustNumber })
            .int({ message: m.public_forms_validations_mustNumberInteger })
            .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
          currency: z
            .string()
            .min(2, { message: m.public_forms_validations_minLength(2) })
            .max(254, { message: m.public_forms_validations_maxLength(254) }),
          currencyLocale: z
            .string()
            .min(2, { message: m.public_forms_validations_minLength(2) })
            .max(254, { message: m.public_forms_validations_maxLength(254) }),
        })
        .optional(),
      geliver: z
        .object({
          isTest: z.boolean(),
        })
        .optional(),
    }),
    free: z.object({
      isEnabled: z.boolean(),
      price: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      priceLocale: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      currency: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      currencyLocale: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
    }),
  });
};
export const ADD_COMPANY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Opia Heart'] }),
    baseUrl: z
      .url({ message: m.public_forms_validations_url })
      .optional()
      .meta({ examples: ['https://opiaheart.com'] }),
    logo: IMAGES(locale).shape.staticImages.optional(),
    favicon: IMAGES(locale).shape.staticImages.optional(),
    description: z
      .string()
      .max(1000, { message: m.public_forms_validations_maxLength(1000) })
      .optional(),
    timeZone: z
      .string()
      .optional()
      .meta({ examples: ['Ankara'] }),
    currency: z
      .string()
      .optional()
      .meta({ examples: ['TRY'] }),
    address: ADD_COMPANY_ADDRESS(locale),
    socialMedia: z.array(ADD_COMPANY_SOCIAL_MEDIA(locale)),
    payments: z.array(ADD_COMPANY_PAYMENT(locale)),
    properties: ADD_COMPANY_PROPERTIES(),
    mailOptions: ADD_COMPANY_MAIL_OPTIONS(locale),
    communicationOptions: ADD_COMPANY_COMMUNICATION_OPTIONS(locale),
    shippingOptions: ADD_COMPANY_SHIPPING_OPTIONS(),
  });
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
