import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Kıyafet ve Aksesuarlar'] }),
    parentId: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable()
      .meta({ examples: ['66a1bcf0ff9245b28d054001'] }),
    categoryI10n: z
      .string()
      .optional()
      .meta({
        examples: [
          "{'id':'543586','name':'543586 - Kıyafet ve Aksesuarlar > Kıyafet Aksesuarları > Bandanalar ve Eşarplar > Bandana Örtüleri'}",
        ],
      }),
    images: IMAGES(locale),
  });
};

export const ADD_CATEGORIES = (locale: ILocale = 'tr') => z.array(ADD_CATEGORY(locale));
