import { z } from 'zod';
import { fields } from '../../utils/fields';
import  { ILocale } from '../../locales';
import { messages } from '../../locales';

export const ADD_MENU_SUB_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z.object({
    kind: z.enum(['static', 'page']),
    route: f.text().refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
    labelKey: f
      .text()
      .refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
    descriptionKey: f.text(0, 65534).optional(),
    pageKey: f
      .text()
      .refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
    order: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    disabled: z.boolean(),
  }).meta({ id: 'HeaderMenuSubItem' });
}

export const ADD_MENU_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .object({
      type: z.enum(['link', 'popover']),
      route: f
        .text(0)
        .refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
      labelKey: f
        .text()
        .refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
      pageKey: f
        .text()
        .refine((s) => !s.includes(' '), { message: m.public_forms_validations_email }),
      order: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      disabled: z.boolean(),
      subItems: z.array(ADD_MENU_SUB_ITEM()),
    })
    .meta({ id: 'HeaderMenuItem' });
}

export const UPDATE_HEADER_MENU = (locale: ILocale = 'tr') => {
  return z.object({ items: z.array(ADD_MENU_ITEM(locale)) }).meta({ id: 'UpdateHeaderMenu' });
}
