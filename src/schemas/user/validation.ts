import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CUSTOMER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['Adem'] }),
    surname: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['Şenocak'] }),
    email: z.email().meta({ examples: ['senocak-a@hotmail.com'] }),
    phoneNumber: z.e164().meta({ examples: ['905425496142'] }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .or(z.literal(''))
      .optional()
      .meta({ examples: ['Passw0rd'] }),
    role: z.array(z.enum(['ROLE_ADMIN', 'ROLE_USER'])).meta({ examples: [['ROLE_USER']] }),
    isActivated: z.boolean().meta({ examples: [true] }),
  });
};
export const ADD_CUSTOMERS = () => z.array(ADD_CUSTOMER());
export const UPDATE_CUSTOMER = () => ADD_CUSTOMER().partial();
export const EDIT_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .optional()
      .meta({ examples: ['Mahmut'] }),
  });
};
export const DELETE_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64)),
  });
};

export const CHANGE_PERSONAL_INFO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254)),
    surname: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254)),
    email: z.email(),
    phoneNumber: z.e164(),
  });
};
export const CHANGE_PERSONAL_PASSWORD = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      oldPassword: z
        .string()
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64)),
      password: z
        .string()
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64)),
      rePassword: z
        .string()
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64)),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.rePassword) {
        ctx.addIssue({
          code: 'custom',
          path: ['rePassword'],
          message: m.public_forms_validations_sameAs,
        });
      }
    });
};
