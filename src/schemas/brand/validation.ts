import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BRAND = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Beko'] }),
    images: IMAGES(locale),
    productCount: z
      .number()
      .optional()
      .meta({ examples: [0] }),
  });
};

export const ADD_BRANDS = (locale: ILocale = 'tr') => z.array(ADD_BRAND(locale));
