import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_POST = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    type: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['blog'] }),
    date: z
      .array(
        z
          .string()
          .min(2, { message: m.public_forms_validations_minLength(2) })
          .max(254, { message: m.public_forms_validations_maxLength(254) }),
      )
      .meta({ examples: [['2025-12-04T06:00:00.000Z', '2025-12-11T09:00:00.000Z']] }),
    timeZone: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Cankaya/Ankara/Turkey'] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ticaret ve E-ticaret Kavramları'] }),
    content: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(65000, { message: m.public_forms_validations_maxLength(65000) })
      .meta({ examples: ['<p><b>Merhaba</b> bu bir test yazisidir.</p>'] }),
  });
};
export const ADD_POSTS = () => z.array(ADD_POST());

export const LIKE_POST = () =>
  z.object({
    vote: z.boolean(),
  });

export const COMMENT_POST = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    text: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
