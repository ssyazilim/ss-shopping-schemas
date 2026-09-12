import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      parentId: z
        .string()
        .length(24, { message: m.public_forms_validations_minLength(24) })
        .nullable(),
      categoryI10n: z.string().optional(),
      images: IMAGES(locale),
    })
    .meta({ id: 'AddCategory' });
};

export const UPDATE_CATEGORY = (locale: ILocale = 'tr') =>
  ADD_CATEGORY(locale).partial().meta({ id: 'UpdateCategory' });

export const ADD_CATEGORIES = (locale: ILocale = 'tr') => z.array(ADD_CATEGORY(locale));
