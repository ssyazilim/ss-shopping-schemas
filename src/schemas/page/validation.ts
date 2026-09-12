import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const PageLocaleSchema = z.enum(['tr', 'en', 'ru', 'ar', 'fa']);

export const ADD_PAGE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    translationKey: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    locale: PageLocaleSchema,
    title: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    slug: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    description: z
      .string()
      .max(500, { message: m.public_forms_validations_maxLength(500) })
      .optional(),
    markdown: z.string().min(1, { message: m.public_forms_validations_required }),
  });
};

export const ADD_PAGES = (locale: ILocale = 'tr') => z.array(ADD_PAGE(locale));

export const UPDATE_PAGE = (locale: ILocale = 'tr') => ADD_PAGE(locale).partial();
