import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

// partial=true ise alanı .optional() yapar — create şemaları için partial=false (varsayılan) katı kalır.
const opt = <T extends z.ZodType>(s: T, partial: boolean) => (partial ? s.optional() : s);

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
    content: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(65000, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['<p>Halil Gür</p>'] }),
  });
};
export const ADD_COMPANY_PROPERTIES_HOME_PAGE = (partial = false) => {
  const b = () => opt(z.boolean(), partial);
  return z.object({
    article: b(),
    blog: b(),
    event: b(),
    news: b(),
    category: b(),
    categoryPreview: b(),
    cta: b(),
    feature: b(),
    hero: b(),
    logoCloud: b(),
    newsLetter: b(),
    slider: b(),
    stat: b(),
    teamSection: b(),
    testimonial: b(),
  });
};
export const ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS = (
  locale: ILocale = 'tr',
  partial = false,
) => {
  const m = messages[locale];
  return z.object({
    cashDiscount: opt(
      z
        .string()
        .min(1, { message: m.public_forms_validations_minLength(1) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['0'] }),
      partial,
    ),
    doorToDoor: opt(
      z.object({
        isEnabled: opt(z.boolean(), partial),
        minValue: opt(
          z
            .number({ message: m.public_forms_validations_mustNumber })
            .int({ message: m.public_forms_validations_mustNumberInteger })
            .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
          partial,
        ),
        maxValue: opt(
          z
            .number({ message: m.public_forms_validations_mustNumber })
            .int({ message: m.public_forms_validations_mustNumberInteger })
            .positive({ message: m.public_forms_validations_mustNumberPositive }),
          partial,
        ),
      }),
      partial,
    ),
  });
};
export const ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS = (
  locale: ILocale = 'tr',
  partial = false,
) => {
  const m = messages[locale];
  const b = () => opt(z.boolean(), partial);
  return z.object({
    callMe: b(),
    addFavorites: b(),
    notifyWhenPriceDrops: b(),
    notifyWhenProductBackInStock: b(),
    hideNoStockProducts: b(),
    hideNoPriceProducts: b(),
    hideReturnPeriod: b(),
    selectedProductListing: opt(z.string(), partial),
    taxAmount: opt(
      z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      partial,
    ),
    showTaxAmount: b(),
  });
};
export const ADD_COMPANY_PROPERTIES_ORDER_SETTINGS = (partial = false) => {
  const b = () => opt(z.boolean(), partial);
  return z.object({
    orderPrefix: b(),
    orderCanDelete: b(),
  });
};
export const ADD_COMPANY_PROPERTIES = (locale: ILocale = 'tr', partial = false) => {
  return z.object({
    paymentMethod: opt(
      z.enum(['cash', 'iyzico', 'paytr', 'lemonSqueezy']).meta({ examples: ['cash'] }),
      partial,
    ),
    liveChatMethod: opt(
      z.enum(['none', 'whatsapp', 'tawkTo', 'crisp']).meta({ examples: ['none'] }),
      partial,
    ),
    homePage: opt(ADD_COMPANY_PROPERTIES_HOME_PAGE(partial), partial),
    paymentSettings: opt(ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS(locale, partial), partial),
    productSettings: opt(ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS(locale, partial), partial),
    orderSettings: opt(ADD_COMPANY_PROPERTIES_ORDER_SETTINGS(partial), partial),
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

// PATCH /admin/company için: tüm üst-seviye alanlar opsiyonel, `properties` ise derin-partial.
// .partial() KULLANILMIYOR (export edilen şemada TS2742 riskine girmemek için) — shape döngüsü + .optional().
export const UPDATE_COMPANY = (locale: ILocale = 'tr') => {
  const shape = ADD_COMPANY(locale).shape as Record<string, z.ZodType>;
  const partialShape: Record<string, z.ZodType> = {};
  for (const [key, field] of Object.entries(shape)) {
    partialShape[key] = field instanceof z.ZodOptional ? field : field.optional();
  }
  partialShape.properties = ADD_COMPANY_PROPERTIES(locale, true).optional();
  return z.object(partialShape);
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
