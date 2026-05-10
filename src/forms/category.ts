import { z } from 'zod';
import * as locales from '../locales/index';
import { imageSchema } from './brand';
import type { ILocale } from '../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const addCategorySchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    parent: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    tree: z.array(z.string()),
    images: imageSchema,
    categoryI10n: z.string().optional(),
    productCount: z.number().optional().default(0),
  });
};
