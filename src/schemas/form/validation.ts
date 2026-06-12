import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const CONTACT_ME = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
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
  });
};

export const CONTACT_ME_ERROR = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
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
  });
};

export const CONTACT_ME_RESUME = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
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
    fileName: z.string(),
  });
};

export const FILE = z.object({
  file: z.any().meta({ type: 'string', format: 'binary' }),
});

export const CHECK_SMTP = z.object({
  user: z.string().meta({ examples: ['no-reply@ssyazilim.com'] }),
  password: z.string(),
  host: z.string().meta({ examples: ['mail.ssyazilim.com'] }),
  port: z.number().meta({ examples: [465] }),
  from: z.string().meta({ examples: ['SS-TEST | <no-reply@ssyazilim.com>'] }),
});
