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
        .max(254, { message: m.public_forms_validations_maxLength(4) })
        .meta({
          examples: [
            'https://placehold.co/600x400/000000/FFF?text=1,https://placehold.co/600x400/000000/FFF?text=2',
          ],
        }),
    ),
  });
};
export const PRICE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    currency: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['TRY'] }),
    purchase: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1000] }),
    sell: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1500] }),
    dealerCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SURAT'] }),
    shipping: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [150] }),
    discount: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [10] }),
    tax: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .meta({ examples: [20] }),
  });
};

export const PRODUCT_PROPERTIES = () => {
  return z.object({
    hidePrice: z.boolean().meta({ examples: [false] }), // prettier-ignore
    isFeatured: z.boolean().meta({ examples: [false] }), // prettier-ignore
    isShippingFree: z.boolean().meta({ examples: [false] }), // prettier-ignore
  });
};
export const ADD_PRODUCT = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    title: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Lorem ipsum dolor sit amet'] }),
    description: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(65000, { message: m.public_forms_validations_maxLength(65000) })
      .or(z.literal(''))
      .optional(),
    images: IMAGES(locale),
    price: PRICE(locale),
    stockQuantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [100] }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .min(0, { message: m.public_forms_validations_minLength(0) })
      .max(1000, { message: m.public_forms_validations_maxLength(1000) })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    brand: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['67d15594f49546e19c4f2342'] }),
    gtin: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .or(z.literal(''))
      .optional()
      .meta({ examples: ['0123456789012'] }),
    sku: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['4SN106B'] }),
    category: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['67f38474e1d5b52fee02dcba'] }),
    properties: PRODUCT_PROPERTIES(),
  });
};
export const ADD_PRODUCTS = () => z.array(ADD_PRODUCT());
export const EDIT_PRODUCT = () =>
  z.object({
    title: z
      .string()
      .optional()
      .meta({ examples: ['Grundig Gpdh 9634'] }),
  });
