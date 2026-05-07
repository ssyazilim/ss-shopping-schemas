import { z } from 'zod';
import * as locales from './locales/index.js';
import type { Locale } from './locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export function loginFormSchema(locale: Locale = 'tr') {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.emailRequired }).min(1, m.emailRequired),
    password: z.string({ message: m.passwordRequired }).min(8, m.passwordMin).max(64, m.passwordMax),
  });
}

export function registerFormSchema(locale: Locale = 'tr') {
  const m = messages[locale];
  return z
    .object({
      email: z.email({ message: m.emailRequired }).min(1, m.emailRequired),
      password: z.string({ message: m.passwordRequired }).min(8, m.passwordMin).max(64, m.passwordMax).regex(/[A-Z]/, m.passwordUppercase).regex(/[0-9]/, m.passwordNumber),
      passwordConfirm: z.string({ message: m.passwordConfirmRequired }).min(1, m.passwordConfirmRequired),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: m.passwordConfirmMismatch,
      path: ['passwordConfirm'],
    });
}
