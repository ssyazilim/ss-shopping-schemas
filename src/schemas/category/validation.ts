import { z } from 'zod';
import * as locales from '../../locales';
import { ImageSchema } from '../../types/zod/image';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_CATEGORY = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ example: 'Kıyafet ve Aksesuarlar' }),
    parent: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ example: 'root' }),
    tree: z.array(z.string().meta({ example: 'root' })),
    images: ImageSchema,
    categoryI10n: z.string().optional().meta({
      example:
        "{'id':'543586','name':'543586 - Kıyafet ve Aksesuarlar > Kıyafet Aksesuarları > Bandanalar ve Eşarplar > Bandana Örtüleri'}",
    }),
    productCount: z.number().optional().meta({ example: 0 }),
  });
};
