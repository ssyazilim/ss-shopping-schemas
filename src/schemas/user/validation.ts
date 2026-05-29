import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const EDIT_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
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
    email: z
      .email()
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['senocak-a@hotmail.com'] }),
    phoneNumber: z.e164().meta({ examples: ['905425496142'] }),
    password: z.preprocess(
      (value: string) => (value === '' ? undefined : value),
      z
        .string()
        .min(8, m.public_forms_validations_minLength(8))
        .max(64, m.public_forms_validations_maxLength(64))
        .optional()
        .meta({ examples: ['Passw0rd'] }),
    ),
    role: z.array(z.enum(['ROLE_ADMIN', 'ROLE_USER'])).meta({ examples: [['ROLE_USER']] }),
    isActivated: z.boolean().meta({ examples: [true] }),
  });
};
export const ADD_CUSTOMERS = () => z.array(ADD_CUSTOMER());

export const UPDATE_CUSTOMER = () => ADD_CUSTOMER().partial();
