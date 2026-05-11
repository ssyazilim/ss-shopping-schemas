import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CART = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    productId: z
      .string()
      .min(24, { message: m.public_forms_validations_minLength(24) })
      .max(24, { message: m.public_forms_validations_maxLength(24) }),
    variantId: z
      .string()
      .min(24, { message: m.public_forms_validations_minLength(24) })
      .max(24, { message: m.public_forms_validations_maxLength(24) }),
    quantity: z.number().int(),
  });
};
