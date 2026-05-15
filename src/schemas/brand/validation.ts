import { z } from 'zod';
import * as locales from '../../locales';
import { ImageSchema } from '../../types/zod/image';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BRAND = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ example: 'Beko' }),
    images: ImageSchema,
    productCount: z.number().optional().meta({ example: 0 }),
  });
};
