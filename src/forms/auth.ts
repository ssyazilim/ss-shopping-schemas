import { z } from 'zod';
import * as locales from './locales/index';
import type { ILocale } from './locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const loginSchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.public_forms_validations_email }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64)),
  });
};

export const forgetPasswordSchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.public_forms_validations_email }),
  });
};

export const resetPasswordSchema = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z
    .object({
      email: z.email({ message: m.public_forms_validations_email }),
      newPassword: z
        .string({ message: m.public_forms_validations_required })
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64)),
      rePassword: z
        .string({ message: m.public_forms_validations_required })
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64)),
    })
    .refine((data) => data.newPassword === data.rePassword, {
      message: m.public_forms_validations_sameAs,
      path: ['rePassword'],
    });
};
