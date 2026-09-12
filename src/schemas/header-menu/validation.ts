import { z } from 'zod';
import * as locales from '../../locales';
import type { ILocale } from '../../locales';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const HEADER_MENU_LOCALES = ['tr', 'en', 'ru', 'ar', 'fa'] as const;

export const HEADER_MENU_MAX_ITEMS = 6;

export const HEADER_MENU_MAX_SUB_ITEMS = 6;

export type IHeaderMenuRoute = z.infer<typeof HeaderMenuRouteSchema>;
export const HeaderMenuRouteSchema = z.enum([
  'index',
  'products',
  'posts',
  'public',
  'public-corporate',
  'public-corporate-about-us',
  'public-faq',
  'public-agreements',
  'public-contact',
  'public-contact-simple',
  'public-contact-career',
  'public-payment',
]);

export const HEADER_MENU_ROUTES = HeaderMenuRouteSchema.options;

const LOCALIZED_TEXT = (locale: ILocale = 'tr', max = 254) => {
  const m = messages[locale];
  const field = z
    .string()
    .min(1, { message: m.public_forms_validations_required })
    .max(max, { message: m.public_forms_validations_maxLength(max) });

  return z.object({ tr: field, en: field, ru: field, ar: field, fa: field });
};

export const ADD_HEADER_MENU_SUB_ITEM = (locale: ILocale = 'tr') =>
  z
    .object({
      label: LOCALIZED_TEXT(locale),
      description: LOCALIZED_TEXT(locale, 500),
      href: HeaderMenuRouteSchema,
      order: z.number(),
      disabled: z.boolean(),
    })
    .meta({ id: 'HeaderMenuSubItem' });

export const ADD_HEADER_MENU_ITEM = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      label: LOCALIZED_TEXT(locale),
      type: z.enum(['link', 'popover']),
      href: z.union([HeaderMenuRouteSchema, z.literal('')]),
      order: z.number(),
      disabled: z.boolean(),
      showNewsFeed: z.boolean(),
      subItems: z.array(ADD_HEADER_MENU_SUB_ITEM(locale)).max(HEADER_MENU_MAX_SUB_ITEMS, {
        message: m.public_forms_validations_maxItems(HEADER_MENU_MAX_SUB_ITEMS),
      }),
    })
    .meta({ id: 'HeaderMenuItem' });
};

export const UPDATE_HEADER_MENU = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
      items: z
        .array(ADD_HEADER_MENU_ITEM(locale))
        .min(1, { message: m.public_forms_validations_minItems(1) })
        .max(HEADER_MENU_MAX_ITEMS, {
          message: m.public_forms_validations_maxItems(HEADER_MENU_MAX_ITEMS),
        }),
    })
    .meta({ id: 'UpdateHeaderMenu' });
};
