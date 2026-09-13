import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { fields } from '../fields';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const CONTACT_ME = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .object({
      firstName: f.text(),
      lastName: f.text(0).optional(),
      company: f.text(0).optional(),
      email: f.email(),
      phoneNumber: f.phone(),
      message: f.text(1, 65535),
      agreed: z.literal(true, { error: m.public_forms_validations_required }),
    })
    .meta({ id: 'ContactMe' });
};
export const CONTACT_ME_ERROR = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      firstName: f.text(),
      lastName: f.text(),
      phoneNumber: f.phone(),
      email: f.email().optional(),
      title: f.text(),
      message: f.text(1, 65535),
    })
    .meta({ id: 'ContactMeError' });
};
export const CONTACT_ME_RESUME = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      firstName: f.text(),
      lastName: f.text(),
      email: f.email(),
      phoneNumber: f.phone(),
      fileName: f.text(),
    })
    .meta({ id: 'ContactMeResume' });
};
export const FILE = z
  .object({
    file: z.any().meta({ type: 'string', format: 'binary' }),
  })
  .meta({ id: 'File' });

export const CHECK_SMTP = z
  .object({
    user: z.string(),
    password: z.string(),
    host: z.string(),
    port: z.number(),
    from: z.string(),
  })
  .meta({ id: 'CheckSMTP' });
export const CHECK_PRICE_FILTER = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .object({
      minPrice: f.number({ nonnegative: true }),
      maxPrice: f.number({ nonnegative: true }),
    })
    .refine((data) => data.minPrice <= data.maxPrice, {
      message: m.public_forms_validations_minPriceGreaterThanMax,
      path: ['minPrice'],
    });
};
