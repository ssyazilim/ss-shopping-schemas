import { z } from 'zod';
import { registry } from '../registry';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const loginMessages = {
  tr: locales.tr,
  en: locales.en,
  ru: locales.ru,
  ar: locales.ar,
  fa: locales.fa,
};

export const loginSchema = (locale: ILocale = 'tr') => {
  const m = loginMessages[locale];
  return z.object({
    email: z.email({ message: m.public_forms_validations_email }).meta({ examples: ['admin@ssyazilim.com'] }),
    password: z
      .string()
      .min(8, m.public_forms_validations_minLength(8))
      .max(64, m.public_forms_validations_maxLength(64))
      .meta({ examples: ['Passw0rd'] }),
  });
};

export const LoginUserSchema = registry.register('loginUser', loginSchema());

export const AddUserSchema = registry.register(
  'addUser',
  z.object({
    name: z.string().meta({ examples: ['Barış'] }),
    surname: z
      .string()
      .optional()
      .meta({ examples: ['Gür'] }),
    email: z.email().meta({ examples: ['ua_baris_07@hotmail.com'] }),
    phoneNumber: z.string().meta({ examples: ['905365056943'] }),
    password: z.string().meta({ examples: ['Passw0rd'] }),
  }),
);

export const CheckKeySchema = registry.register(
  'checkKey',
  z.object({
    key: z.string(),
  }),
);

export const ActivateUserSchema = registry.register(
  'activateUser',
  z.object({
    key: z.string(),
    code: z.string(),
  }),
);

export const PasswordResetUserSchema = registry.register(
  'passwordResetUser',
  z.object({
    email: z.email(),
  }),
);

export const PasswordResetCompleteUserSchema = registry.register(
  'passwordResetCompleteUser',
  z.object({
    email: z.email(),
    key: z.string(),
    newPassword: z.string(),
  }),
);
