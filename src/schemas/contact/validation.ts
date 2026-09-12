import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const CONTACT_ME = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      firstName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      lastName: z.string().optional(),
      company: z.string().optional(),
      email: z.email({ message: m.public_forms_validations_email }),
      phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
      message: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(2000, { message: m.public_forms_validations_maxLength(2000) }),
      agreed: z.literal(true, { error: m.public_forms_validations_required }),
    })
    .meta({ id: 'ContactMe' });
};
export const CONTACT_ME_ERROR = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      firstName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      lastName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
      email: z.email({ message: m.public_forms_validations_email }).optional(),
      title: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      message: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(2000, { message: m.public_forms_validations_maxLength(2000) }),
    })
    .meta({ id: 'ContactMeError' });
};
export const CONTACT_ME_RESUME = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      firstName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      lastName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      email: z.email({ message: m.public_forms_validations_email }),
      phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
      fileName: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
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
  return z
    .object({
      minPrice: z
        .number({ message: m.public_forms_validations_mustNumber })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      maxPrice: z
        .number({ message: m.public_forms_validations_mustNumber })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    })
    .refine((data) => data.minPrice <= data.maxPrice, {
      message: m.public_forms_validations_minPriceGreaterThanMax,
      path: ['minPrice'],
    });
};
