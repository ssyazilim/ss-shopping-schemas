import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import type { ILocale } from '../../locales';

export const ADD_PAGE = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      key: f.text(),
      slugKey: f.text(),
      titleKey: f.text(),
      descriptionKey: f.text(0).optional(),
      markdown: f.text(1, 65535),
    })
    .meta({ id: 'AddPage' });
};

export const ADD_PAGES = (locale: ILocale = 'tr') => z.array(ADD_PAGE(locale));

export const UPDATE_PAGE = (locale: ILocale = 'tr') =>
  deepPartial(ADD_PAGE(locale)).meta({ id: 'UpdatePage' });
