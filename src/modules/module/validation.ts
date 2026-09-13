import { z } from 'zod';
import { fields } from '../fields';
import { ILocale } from '../../locales';

export const MODULE_CONFIG = () => {
  return z.record(z.string(), z.any());
};

export const ADD_MODULE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      key: f.text(),
      name: f.text(),
      icon: f.text(),
      category: f.text(),
      isEnabled: z.boolean(),
      isVerified: z.boolean().optional(),
      config: MODULE_CONFIG().optional(),
    })
    .meta({ id: 'addModule' });
};

export const UPDATE_MODULE = (locale: ILocale = 'tr') =>
  ADD_MODULE(locale).partial().meta({ id: 'updateModule' });
