import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const SET_QUANTITY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    itemId: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    quantity: z
      .number()
      .int()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .meta({ examples: [1] }),
  });
};

export const ADD_CART = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    productId: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    variantId: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    quantity: z.number().int(),
  });
};
