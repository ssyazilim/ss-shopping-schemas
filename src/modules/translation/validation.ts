import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { ILocale } from '../../locales';
import { messages } from '../../locales';
import {
  DEFAULT_LOCALES_WEB,
  LOCALE_CODES,
  LOCALE_LANGUAGES,
  LOCALE_NAMES,
} from '../locale/schema';

export const ADD_TRANSLATION = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      code: z.enum(LOCALE_CODES),
      language: z.enum(LOCALE_LANGUAGES),
      name: z.enum(LOCALE_NAMES),
      file: z.literal('index.ts'),
      translations: z.record(z.string(), z.string()),
    })
    .refine(
      (value) =>
        DEFAULT_LOCALES_WEB.some(
          (l) => l.code === value.code && l.language === value.language && l.name === value.name,
        ),
      { message: m.public_forms_validations_localeMismatch, path: ['code'] },
    )
    .meta({ id: 'AddTranslation' });
};

export const ADD_TRANSLATIONS = () => z.array(ADD_TRANSLATION());

export const UPDATE_TRANSLATION = () =>
  deepPartial(ADD_TRANSLATION()).meta({ id: 'updateTranslation' });
