import { z } from 'zod';
import { messages } from '../locales';
import type { ILocale } from '../locales';

const TEXT_MIN = 1;
const TEXT_MAX = 255;

type NumberOptions = {
  int?: boolean;
  positive?: boolean;
  nonnegative?: boolean;
};

export const fields = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return {
    text: (min: number = TEXT_MIN, max: number = TEXT_MAX) =>
      z
        .string()
        .min(min, { message: m.public_forms_validations_minLength(min) })
        .max(max, { message: m.public_forms_validations_maxLength(max) }),

    email: () => z.email({ message: m.public_forms_validations_email }),

    phone: () => z.e164({ message: m.public_forms_validations_phoneNumber }),

    url: () => z.url({ message: m.public_forms_validations_url }),

    number: ({ int, positive, nonnegative }: NumberOptions = {}) => {
      let schema = z.number({ message: m.public_forms_validations_mustNumber });
      if (int) schema = schema.int({ message: m.public_forms_validations_mustNumberInteger });
      if (positive)
        schema = schema.positive({ message: m.public_forms_validations_mustNumberPositive });
      if (nonnegative)
        schema = schema.nonnegative({ message: m.public_forms_validations_mustNumberPositive });
      return schema;
    },
  };
};
