import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_AGREEMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      locale: z.string().length(2, { message: m.public_forms_validations_minLength(2) }),
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      content: z.any(),
    })
    .meta({ id: 'AddAgreement' });
};

export const UPDATE_AGREEMENT = (locale: ILocale = 'tr') =>
  ADD_AGREEMENT(locale).partial().meta({ id: 'UpdateAgreement' });

export const ADD_AGREEMENTS = (locale: ILocale = 'tr') => z.array(ADD_AGREEMENT(locale));
