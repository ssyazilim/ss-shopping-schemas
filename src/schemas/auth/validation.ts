import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = {
  tr: locales.tr,
  en: locales.en,
  ru: locales.ru,
  ar: locales.ar,
  fa: locales.fa,
};

export const LOGIN_USER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
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
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ua_baris_07@hotmail.com'] }),
    phoneNumber: z
      .e164({ message: m.public_forms_validations_phoneNumber })
      .meta({ examples: ['+905365056943'] }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .meta({ examples: ['Passw0rd'] }),
  });
};

export const PASSWORD_RESET = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(6) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};

export const PASSWORD_RESET_COMPLETE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    key: z
      .string()
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .min(6, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    newPassword: z
      .string({ message: m.public_forms_validations_required })
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64)),
    rePassword: z
      .string({ message: m.public_forms_validations_required })
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64)),
  });
};
