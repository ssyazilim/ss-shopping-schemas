import { z } from 'zod';
import { fields } from '../fields';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

export const ADD_BRAND = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      name: f.text(),
      images: IMAGES(locale),
      productCount: z.number().optional(),
    })
    .meta({ id: 'AddBrand' });
};

export const UPDATE_BRAND = (locale: ILocale = 'tr') =>
  ADD_BRAND(locale).partial().meta({ id: 'UpdateBrand' });

export const ADD_BRANDS = (locale: ILocale = 'tr') => z.array(ADD_BRAND(locale));
