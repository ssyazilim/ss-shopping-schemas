import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const IMAGE_SCHEMA = z.object({
  staticImages: z
    .array(
      z.object({
        name: z.string(),
        image: z.string(),
      }),
    )
    .meta({ example: [] }),
  dynamicImages: z.array(
    z.string().meta({
      examples: [
        'https://placehold.co/600x400/000000/FFF?text=1',
        'https://placehold.co/600x400/000000/FFF?text=2',
      ],
    }),
  ),
});

export const ADD_BRAND = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ example: 'Beko' }),
    images: IMAGE_SCHEMA,
    productCount: z.number().optional().meta({ example: 0 }),
  });
};
