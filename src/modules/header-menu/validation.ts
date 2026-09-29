import { z } from 'zod';
import { fields } from '../../utils/fields';
import { PAGE_KEY_PATTERN, TRANSLATION_KEY_PATTERN, PAGE_ROUTE_PATTERN } from '../../utils/validations';
import { ILocale } from '../../locales';
import { messages } from '../../locales';
import type { IMenuTarget } from './schema';

const menuTargetRule = (locale: ILocale) => (item: IMenuTarget, ctx: z.RefinementCtx) => {
  if (item.type === 'popover' || (item.disabled && !item.route)) return;

  const pattern = item.role === 'admin' ? PAGE_KEY_PATTERN : PAGE_ROUTE_PATTERN;
  if (!item.route || !pattern.test(item.route)) {
    ctx.addIssue({
      code: 'custom',
      path: ['route'],
      message: messages[locale].public_forms_validations_routeKey,
    });
  }
};

export const ADD_MENU_SUB_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .object({
      role: z.enum(['admin', 'user']),
      type: z.enum(['link']),
      route: f.text(0).optional(),
      parentLabelKey: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey }),
      labelKey: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey }),
      descriptionKey: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey })
        .optional(),
      order: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      disabled: z.boolean(),
    })
    .superRefine(menuTargetRule(locale))
    .meta({ id: 'HeaderMenuSubItem' });
};

export const ADD_MENU_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .object({
      role: z.enum(['admin', 'user']),
      type: z.enum(['link', 'popover']),
      route: f.text(0).optional(),
      labelKey: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey }),
      order: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      disabled: z.boolean(),
      subItems: z.array(ADD_MENU_SUB_ITEM(locale)),
    })
    .superRefine(menuTargetRule(locale))
    .meta({ id: 'HeaderMenuItem' });
};

export const DELETE_HEADER_MENU = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({ labelKey: f.text() }).meta({ id: 'DeleteHeaderMenu' });
};

export const UPDATE_HEADER_MENU = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);
  return z
    .array(
      ADD_MENU_ITEM(locale).extend({
        originalLabelKey: f
          .text()
          .refine((s) => !s.includes(' '), { message: m.public_forms_validations_noSpace })
          .optional(),
      }),
    )
    .meta({ id: 'UpdateHeaderMenu' });
};
