import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGE_SCHEMA } from '../brand/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const COMPANY_ADDRESS = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    isCompany: z.boolean().meta({ examples: [false] }),
    companyName: z
      .string()
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['Varyant Et & Balık Restaurant'] }),
    name: z
      .string()
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .optional()
      .meta({ examples: ['Halil'] }),
    surname: z
      .string()
      .max(254, { message: m.public_forms_validations_maxLength(254) })
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
      .optional()
      .meta({ examples: ['07030'] }),
    line: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(500, { message: m.public_forms_validations_maxLength(500) })
      .meta({ examples: ['Bahçelievler Mahallesi Atatürk Parkı 25/21'] }),
  });
};

export const COMPANY_SOCIAL_MEDIA = (locale: ILocale = 'tr') => {
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

export const COMPANY_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ["{'_id':'0','name':'IBAN'}"] }),
    content: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['<p>Halil Gür</p>'] }),
  });
};

export const COMPANY_PROPERTIES_HOME_PAGE = z.object({
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
  testimonial: z.boolean().optional(),
});

export const COMPANY_PROPERTIES_PAYMENT_SETTINGS = z.object({
  cashDiscount: z.string().meta({ examples: ['0'] }),
  doorToDoor: z.object({
    isEnabled: z.boolean(),
    minValue: z.number(),
    maxValue: z.number(),
  }),
});

export const COMPANY_PROPERTIES_PRODUCT_SETTINGS = z.object({
  callMe: z.boolean(),
  addFavorites: z.boolean(),
  notifyWhenPriceDrops: z.boolean(),
  notifyWhenProductBackInStock: z.boolean(),
  hideNoStockProducts: z.boolean(),
  hideReturnPeriod: z.boolean(),
  selectedProductListing: z.string(),
  taxAmount: z.number().meta({ examples: [20] }),
  showTaxAmount: z.boolean(),
});

export const COMPANY_PROPERTIES_ORDER_SETTINGS = z.object({
  orderPrefix: z.boolean(),
  orderCanDelete: z.boolean(),
});

export const COMPANY_PROPERTIES = z.object({
  paymentMethod: z.string().meta({ examples: ['cash'] }),
  liveChatMethod: z.string().meta({ examples: ['none'] }),
  homePage: COMPANY_PROPERTIES_HOME_PAGE,
  paymentSettings: COMPANY_PROPERTIES_PAYMENT_SETTINGS,
  productSettings: COMPANY_PROPERTIES_PRODUCT_SETTINGS.optional(),
  orderSettings: COMPANY_PROPERTIES_ORDER_SETTINGS.optional(),
});

export const COMPANY_MAIL_OPTIONS = z.object({
  user: z.string().meta({ examples: ['no-reply@example.com'] }),
  password: z.string(),
  host: z.string().meta({ examples: ['smtp.gmail.com'] }),
  port: z.number().meta({ examples: [465] }),
  mainMail: z.string().meta({ examples: ['iletisim@example.com'] }),
  secondMail: z.string().meta({ examples: ['support@example.com'] }),
  from: z.string().optional(),
});

export const COMPANY_SHIPPING_OPTIONS = z.object({
  method: z.string().meta({ examples: ['standard'] }),
  shipment: z.object({
    standard: z
      .object({
        dealer: z
          .string()
          .optional()
          .meta({ examples: ['KolayGelsin'] }),
        price: z
          .number()
          .optional()
          .meta({ examples: [250] }),
        currency: z
          .string()
          .optional()
          .meta({ examples: ['TRY'] }),
      })
      .optional(),
    free: z
      .object({
        price: z
          .number()
          .optional()
          .meta({ examples: [5000] }),
        currency: z
          .string()
          .optional()
          .meta({ examples: ['TRY'] }),
      })
      .optional(),
  }),
});

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
    logo: IMAGE_SCHEMA.shape.staticImages.optional(),
    favicon: IMAGE_SCHEMA.shape.staticImages.optional(),
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
    address: COMPANY_ADDRESS(locale),
    socialMedia: z.array(COMPANY_SOCIAL_MEDIA(locale)).optional(),
    payments: z.array(COMPANY_PAYMENT(locale)).optional(),
    properties: COMPANY_PROPERTIES.optional(),
    mailOptions: COMPANY_MAIL_OPTIONS.optional(),
    shippingOptions: COMPANY_SHIPPING_OPTIONS.optional(),
  });
};
