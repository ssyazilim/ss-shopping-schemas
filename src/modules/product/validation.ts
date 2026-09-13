import { z } from 'zod';
import { fields } from '../fields';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const IMAGES = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    staticImages: z.array(
      z.object({
        name: f.text(),
        image: f.text(),
      }),
    ),
    dynamicImages: z.array(f.text()),
  });
};
export const PRICE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    currency: f.text(2, 4),
    purchase: z
      .number({ message: m.public_forms_validations_mustNumber })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    sell: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    dealerCode: f.text(),
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
  const f = fields(locale);
  const m = messages[locale];

  return z
    .object({
      title: f.text(),
      description: z.string().optional(),
      images: IMAGES(locale),
      price: PRICE(locale),
      stockQuantity: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      desi: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      brand: f.text(),
      gtin: z.string().optional(),
      sku: f.text(),
      category: f.text(),
      properties: PRODUCT_PROPERTIES(),
    })
    .meta({ id: 'addProduct' });
};

export const UPDATE_PRODUCT = (locale: ILocale = 'tr') =>
  ADD_PRODUCT(locale).partial().meta({ id: 'editProduct' });

export const ADD_PRODUCTS = (locale: ILocale = 'tr') => z.array(ADD_PRODUCT(locale));
