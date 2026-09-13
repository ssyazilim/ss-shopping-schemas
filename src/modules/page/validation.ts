import { z } from 'zod';
import { fields } from '../fields';
import type { ILocale } from '../../locales';

export const PageLocaleSchema = z.enum(['tr', 'en', 'ru', 'ar', 'fa']);

export const ADD_PAGE = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      translationKey: f.text(),
      locale: PageLocaleSchema,
      title: f.text(),
      slug: f.text(),
      description: f.text(0).optional(),
      markdown: f.text(1, 65535),
    })
    .meta({ id: 'AddPage' });
};

export const ADD_PAGES = (locale: ILocale = 'tr') => z.array(ADD_PAGE(locale));

export const UPDATE_PAGE = (locale: ILocale = 'tr') =>
  ADD_PAGE(locale).partial().meta({ id: 'UpdatePage' });
