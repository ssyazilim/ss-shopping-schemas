import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_AGREEMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    locale: z
      .string()
      .length(2, { message: m.public_forms_validations_minLength(2) })
      .meta({ examples: ['tr'] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Gizlilik politikası'] }),
    content: z.any().meta({ examples: ['<h1>Gizlilik Politikasi</h1><p>...</p>'] }),
  });
};

export const ADD_AGREEMENTS = (locale: ILocale = 'tr') => z.array(ADD_AGREEMENT(locale));
