import { z } from 'zod';
import { fields } from '../fields';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { ADD_USER } from '../auth/validation';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CUSTOMER = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      name: f.text(),
      surname: f.text(),
      email: f.email(),
      phoneNumber: f.phone(),
      password: f.text(8, 64).or(z.literal('')).optional(),
      role: z.array(z.enum(['ROLE_ADMIN', 'ROLE_USER'])),
      isActivated: z.boolean(),
    })
    .meta({ id: 'customer' });
};
export const ADD_CUSTOMERS = () => z.array(ADD_CUSTOMER());
export const UPDATE_CUSTOMER = () => ADD_CUSTOMER().partial().meta({ id: 'updateCustomer' });
export const EDIT_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return ADD_USER(locale)
    .partial()
    .extend({
      oldPassword: f.text(8, 64).optional(),
      profileImage: IMAGES(locale).shape.staticImages.optional(),
    })
    .meta({ id: 'editUser' });
};
export const DELETE_USER = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      password: f.text(8, 64),
    })
    .meta({ id: 'deleteUser' });
};

export const CHANGE_PERSONAL_INFO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    name: f.text(),
    surname: f.text(),
    email: f.email(),
    phoneNumber: f.phone(),
  });
};
export const CHANGE_PERSONAL_PASSWORD = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      oldPassword: f.text(8, 64),
      password: f.text(8, 64),
      rePassword: f.text(8, 64),
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
