import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_REVIEW = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    status: z
      .string()
      .min(2, m.public_forms_validations_minLength(2))
      .max(254, m.public_forms_validations_maxLength(254))
      .meta({ examples: ['pending'] }),
    rating: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [5] }),
    content: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Harika bir ürün. Kesinlikle tavsiye ederim.'] }),
  });
};
