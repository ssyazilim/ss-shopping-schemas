import { z } from 'zod';
import * as locales from '../../locales';
import { isValidCard } from '../common';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CARD = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['no-reply@ssyazilim.com'] }),
    card: z.object({
      cardAlias: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['ALISARI'] }),
      cardHolderName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['ALI SARI'] }),
      cardNumber: z
        .string()
        .refine(isValidCard, { message: m.public_forms_validations_cardNumber })
        .meta({ examples: ['5170410000000004'] }),
      expireMonth: z
        .string()
        .min(1, { message: m.public_forms_validations_minLength(2) })
        .max(2, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['10'] }),
      expireYear: z
        .string()
        .min(4, { message: m.public_forms_validations_minLength(2) })
        .max(4, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['2030'] }),
    }),
  });
};
