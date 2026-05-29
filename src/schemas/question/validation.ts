import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_QUESTION = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['pending'] }),
    question: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
  });
};

export const UPDATE_QUESTION = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['approved'] }),
    question: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
    answer: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['Pamuk, yün ve akrilik kullandık.'] }),
  });
};
