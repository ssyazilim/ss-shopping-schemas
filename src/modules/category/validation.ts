import { z } from 'zod';
import { fields } from '../fields';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];

  return z
    .object({
      name: f.text(),
      parentId: f.text(24,24).nullable(),
      categoryI10n: z.string().optional(),
      images: IMAGES(locale),
    })
    .meta({ id: 'AddCategory' });
};

export const UPDATE_CATEGORY = (locale: ILocale = 'tr') =>
  ADD_CATEGORY(locale).partial().meta({ id: 'UpdateCategory' });

export const ADD_CATEGORIES = (locale: ILocale = 'tr') => z.array(ADD_CATEGORY(locale));
