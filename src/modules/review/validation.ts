import { z } from 'zod';
import { fields } from '../fields';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_REVIEW = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      status: f.text(),
      rating: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .positive({ message: m.public_forms_validations_mustNumberPositive }),
      content: f.text(),
    })
    .meta({ id: 'addReview' });
};
