import { z } from 'zod';
import { fields } from '../../utils/fields';
import { messages } from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';
import { deepPartial } from '../../utils/common';

export const UPDATE_COMPANY = (locale: ILocale = 'tr') =>
  deepPartial(ADD_COMPANY(locale)).meta({ id: 'UpdateCompany' });

export const UPDATE_COMPANY_PAYMENT = (locale: ILocale = 'tr') =>
  deepPartial(ADD_COMPANY_PAYMENT(locale))
    .extend({ paymentId: z.string().length(24) })
    .meta({ id: 'UpdateCompanyPayment' });

export const ADD_COMPANY_ADDRESS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      isCompany: z.boolean(),
      companyName: f.text(0).optional(),
      name: f.text(0).optional(),
      surname: f.text(0).optional(),
      taxOffice: f.text(0).optional(),
      taxNumber: f.text(0).optional(),
      identityNumber: f.text(0).optional(),
      phoneNumber: f.phone(),
      email: f.email(),
      country: f.text(),
      city: f.text(),
      district: f.text(),
      zipCode: f.text(0).optional(),
      line: f.text(1, 65535),
    })
    .meta({ id: 'CompanyAddress' });
};
export const ADD_COMPANY_SOCIAL_MEDIA = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      name: f.text(),
      link: f.url(),
      icon: z.string(),
    })
    .meta({ id: 'CompanySocialMedia' });
};
export const ADD_COMPANY_PAYMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      status: f.text(),
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
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      user: f.text(),
      password: f.text(8, 64),
      host: f.text(),
      port: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .positive({ message: m.public_forms_validations_mustNumberPositive }),
      secure: z.boolean(),
      rejectUnauthorized: z.boolean(),
      mainMail: f.email(),
      secondMail: f.email(),
      from: f.text(),
    })
    .meta({ id: 'CompanyMailOptions' });
};
export const ADD_COMPANY_SHIPPING_OPTIONS = (locale: ILocale = 'tr') => {
  const f = fields(locale);
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
            name: f.text(),
            code: f.text(),
          })
          .optional(),
        standard: z
          .object({
            isEnabled: z.boolean(),
            name: f.text(),
            code: f.text(),
            price: z.object({
              currency: f.text(),
              currencyLocale: f.text(),
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
            currency: f.text(),
            currencyLocale: f.text(),
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
  const f = fields(locale);
  return z
    .object({
      name: f.text(),
      baseUrl: f.url().optional(),
      logo: IMAGES(locale).shape.staticImages.optional(),
      favicon: IMAGES(locale).shape.staticImages.optional(),
      description: f.text(0, 65535).optional(),
      timeZone: f.text().optional(),
      currency: f.text().optional(),
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
  const f = fields(locale);
  return z.object({
    facebook: f.url().or(z.literal('')),
    twitter: f.url().or(z.literal('')),
    instagram: f.url().or(z.literal('')),
    youtube: f.url().or(z.literal('')),
  });
};
