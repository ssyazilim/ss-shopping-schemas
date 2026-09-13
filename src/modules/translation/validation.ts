import { z } from 'zod';
import { fields } from '../fields';
import { ILocale } from '../../locales';

export const ADD_TRANSLATION = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      code: f.text(),
      language: f.text(),
      name: f.text(),
      file: z.literal('index.ts'),
      translations: z.record(z.string(), z.string()),
    })
    .meta({ id: 'AddTranslation' });
};

export const ADD_TRANSLATIONS = () => z.array(ADD_TRANSLATION());

export const UPDATE_TRANSLATION = () =>
  ADD_TRANSLATION().partial().meta({ id: 'updateTranslation' });
