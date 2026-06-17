import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_TRANSLATION = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    code: z
      .string()
      .length(2, { message: m.public_forms_validations_minLength(2) })
      .meta({ examples: ['tr'] }),
    language: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['tr-TR'] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkçe'] }),
    file: z.literal('index.ts').meta({ examples: ['index.ts'] }),
    translations: z
      .record(z.string(), z.string())
      .meta({ examples: [{ public_settings_currency: 'TRY' }] }),
  });
};

export const ADD_TRANSLATIONS = () => z.array(ADD_TRANSLATION());

export const UPDATE_TRANSLATION = () => ADD_TRANSLATION().partial();
