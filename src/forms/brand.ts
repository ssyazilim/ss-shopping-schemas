import { z } from 'zod';
import * as locales from '../locales/index';
import type { ILocale } from '../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const imageSchema = z.object({
  staticImages: z.array(z.string()),
  dynamicImages: z.array(z.string()),
});

export const addBrandSchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    images: imageSchema,
    productCount: z.number().optional(),
  });
};
