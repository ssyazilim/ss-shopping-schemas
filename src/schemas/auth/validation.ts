import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const LOGIN_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['test@ssyazilim.com'] }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .meta({ examples: ['Passw0rd'] }),
  });
};

export const ADD_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Barış'] }),
    surname: z
      .string()
      .optional()
      .meta({ examples: ['Gür'] }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['test@ssyazilim.com'] }),
    phoneNumber: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['+905365056943'] }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .meta({ examples: ['Passw0rd'] }),
    rePassword: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .meta({ examples: ['Passw0rd'] }),
    activationType: z.enum(['phone', 'email']).meta({ examples: ['email'] }),
  });
};
export const ADD_USER_CHECK = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return ADD_USER(locale).superRefine((data, ctx) => {
    if (data.password !== data.rePassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['rePassword'],
        message: m.public_forms_validations_sameAs,
      });
    }
  });
};

export const CHECK_KEY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    key: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};

export const ACTIVATE_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    key: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    code: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};

export const PASSWORD_RESET = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.public_forms_validations_email }),
  });
};

export const PASSWORD_RESET_COMPLETE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      key: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
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
    .superRefine((data, ctx) => {
      if (data.newPassword !== data.rePassword) {
        ctx.addIssue({
          code: 'custom',
          path: ['rePassword'],
          message: m.public_forms_validations_sameAs,
        });
      }
    });
};
