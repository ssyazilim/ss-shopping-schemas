import { z } from 'zod';
import { fields } from '../../utils/fields';
import { messages } from '../../locales';
import type { ILocale } from '../../locales';

export const LOGIN_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      email: f.email(),
      password: f.text(8, 64),
    })
    .meta({ id: 'loginUser' });
};

export const ADD_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      name: f.text(),
      surname: f.text(0).optional(),
      email: f.email(),
      phoneNumber: f.phone(),
      password: f.text(8, 64),
      rePassword: f.text(8, 64),
      activationType: z.enum(['phone', 'email']),
    })
    .meta({ id: 'addUser' });
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
  const f = fields(locale);

  return z
    .object({
      key: f.text(),
    })
    .meta({ id: 'checkKey' });
};

export const ACTIVATE_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      key: f.text(),
      code: f.text(),
    })
    .meta({ id: 'activateUser' });
};

export const PASSWORD_RESET = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      email: f.email(),
    })
    .meta({ id: 'passwordResetUser' });
};

export const PASSWORD_RESET_COMPLETE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];

  return z
    .object({
      key: f.text(),
      email: f.email(),
      newPassword: f.text(8,64),
      rePassword: f.text(8,64),
    })
    .superRefine((data, ctx) => {
      if (data.newPassword !== data.rePassword) {
        ctx.addIssue({
          code: 'custom',
          path: ['rePassword'],
          message: m.public_forms_validations_sameAs,
        });
      }
    })
    .meta({ id: 'passwordResetCompleteUser' });
};
