import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import type { ILocale } from '../../locales';

export const ADD_ADDRESS = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      title: f.text(),
      name: f.text(),
      surname: f.text(),
      country: f.text(),
      city: f.text(),
      district: f.text(),
      zipCode: f.text(),
      address: f.text(),
    })
    .meta({ id: 'addAddress' });
};

export const UPDATE_ADDRESS = (locale: ILocale = 'tr') =>
  deepPartial(ADD_ADDRESS(locale)).meta({ id: 'updateAddress' });
