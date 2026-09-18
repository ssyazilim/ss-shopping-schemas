import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const f = fields(locale);

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
  deepPartial(ADD_CATEGORY(locale)).meta({ id: 'UpdateCategory' });

export const ADD_CATEGORIES = (locale: ILocale = 'tr') => z.array(ADD_CATEGORY(locale));
