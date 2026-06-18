import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';
import { IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Kıyafet ve Aksesuarlar'] }),
    parent: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .nullable()
      .meta({ examples: ['Tekstil'] }),
    categoryI10n: z
      .string()
      .optional()
      .meta({
        examples: [
          "{'id':'543586','name':'543586 - Kıyafet ve Aksesuarlar > Kıyafet Aksesuarları > Bandanalar ve Eşarplar > Bandana Örtüleri'}",
        ],
      }),
    images: IMAGES(locale),
  });
};

export const ADD_CATEGORIES = (locale: ILocale = 'tr') => z.array(ADD_CATEGORY(locale));

export const MOVE_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    _id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['66f29aefff9245b28d05482f'] }),
    parent: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .nullable()
      .meta({ examples: ['66a1bcf0ff9245b28d054001'] }), // null = root
    order: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
  });
};

export const REORDER_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    _id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['66f29aefff9245b28d05482f'] }),
    order: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
  });
};
