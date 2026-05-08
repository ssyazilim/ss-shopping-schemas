import { z } from 'zod';
import * as locales from './locales/index.js';
import type { ILocale } from './locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const addBrandSchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z.string().min(1, { message: m.public_forms_validations_required }),
    images: z.object({
      staticImages: z.array(z.string()),
      dynamicImages: z.array(z.string()),
    }),
  });
};
