import { z } from 'zod';
import { fields } from '../../utils/fields';
import { messages } from '../../locales';
import type { ILocale } from '../../locales';

export const ADD_REVIEW = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z
    .object({
      status: f.text(),
      rating: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .positive({ message: m.public_forms_validations_mustNumberPositive }),
      content: f.text(),
    })
    .meta({ id: 'addReview' });
};
