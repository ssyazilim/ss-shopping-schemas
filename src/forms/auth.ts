import { z } from 'zod';
import * as locales from './locales/index.js';
import type { Locale } from './locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const loginSchema = (locale: Locale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.emailRequired }),
    password: z
      .string({ message: m.passwordRequired })
      .min(8, m.passwordMin)
      .max(64, m.passwordMax),
  });
};

export const forgetPasswordSchema = (locale: Locale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.emailRequired }),
  });
};

export const resetPasswordSchema = (locale: Locale = 'tr') => {
  const m = messages[locale];

  return z
    .object({
      email: z.email({ message: m.emailRequired }),
      password: z
        .string({ message: m.passwordRequired })
        .min(8, m.passwordMin)
        .max(64, m.passwordMax),
      rePassword: z
        .string({ message: m.passwordRequired })
        .min(8, m.passwordMin)
        .max(64, m.passwordMax),
    })
    .refine((data) => data.password === data.rePassword, {
      message: m.passwordConfirmMismatch,
      path: ['rePassword'],
    });
};
