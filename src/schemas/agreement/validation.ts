import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_AGREEMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    locale: z
      .string()
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['tr'] }),
    name: z
      .string()
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['test'] }),
    content: z
      .string()
      .min(6, { message: m.public_forms_validations_required })
      .meta({ examples: ['<h1>Gizlilik Politikasi</h1>'] }),
  });
};
