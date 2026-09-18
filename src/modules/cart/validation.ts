import { z } from 'zod';
import { messages } from '../../locales';
import type { ILocale } from '../../locales';
import { fields } from '../../utils/fields';

export const ADD_CART = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);

  return z
    .object({
      productId: f.text(24, 24),
      variantId: f.text(24, 24),
      quantity: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .refine((n) => n !== 0, { message: m.public_forms_validations_mustNumber }),
    })
    .meta({ id: 'AddToCart' });
};
