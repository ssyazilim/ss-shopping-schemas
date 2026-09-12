import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const IMAGES = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    staticImages: z.array(
      z.object({
        name: z
          .string()
          .min(2, { message: m.public_forms_validations_minLength(2) })
          .max(254, { message: m.public_forms_validations_maxLength(254) }),
        image: z
          .string()
          .min(2, { message: m.public_forms_validations_minLength(2) })
          .max(254, { message: m.public_forms_validations_maxLength(254) }),
      }),
    ),
    dynamicImages: z.array(
      z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(4) }),
    ),
  });
};
export const PRICE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    currency: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) }),
    purchase: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    sell: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    dealerCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    shipping: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    discountAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger }),
    taxAmount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger }),
  });
};

export const PRODUCT_PROPERTIES = () => {
  return z.object({
    hidePrice: z.boolean(),
    isFeatured: z.boolean(),
    isShippingFree: z.boolean(),
  });
};
export const ADD_PRODUCT = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    title: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    description: z.string().optional(),
    images: IMAGES(locale),
    price: PRICE(locale),
    stockQuantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .min(0, { message: m.public_forms_validations_minLength(0) })
      .max(1000, { message: m.public_forms_validations_maxLength(1000) })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    brand: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    gtin: z.string().optional(),
    sku: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    category: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    properties: PRODUCT_PROPERTIES(),
  });
};
export const ADD_PRODUCTS = (locale: ILocale = 'tr') => z.array(ADD_PRODUCT(locale));
