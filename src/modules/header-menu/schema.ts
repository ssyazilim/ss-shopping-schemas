import { z } from 'zod';
import { MongoSchema } from '../../types/common';
import { ADD_MENU_ITEM, ADD_MENU_SUB_ITEM } from './validation';

export type IHeaderMenuSubItem = z.infer<typeof HeaderMenuSubItemSchema>;
export const HeaderMenuSubItemSchema = ADD_MENU_SUB_ITEM();

export type IHeaderMenuItem = z.infer<typeof HeaderMenuItemSchema>;
export const HeaderMenuItemSchema = ADD_MENU_ITEM();

export type IHeaderMenu = z.infer<typeof HeaderMenuSchema>;
export const HeaderMenuSchema = z.object({
  items: z.object({
    types: z.array(HeaderMenuItemSchema),
  }),
})
  .extend(MongoSchema.shape)
  .meta({ id: 'HeaderMenu' });

/*
export const DEFAULT_HEADER_MENU: Pick<IHeaderMenu, 'items'> = {
  items: [
    {
      kind: 'static',
      route: 'products',
      labelKey: 'public_menu_products',
      descriptionKey: 'public_menu_productsDesc',
      type: 'link',
      order: 0,
      disabled: false,
      subItems: [],
    },
    {
      kind: 'static',
      route: 'public-contact',
      labelKey: 'public_menu_contact',
      type: 'popover',
      order: 1,
      disabled: false,
      subItems: [
        {
          kind: 'static',
          route: 'public-contact-simple',
          labelKey: 'public_menu_quickSupport',
          descriptionKey: 'public_menu_quickSupportDesc',
          order: 0,
          disabled: false,
        },
        {
          kind: 'static',
          route: 'public-contact-career',
          labelKey: 'public_menu_career',
          descriptionKey: 'public_menu_careerDesc',
          order: 1,
          disabled: false,
        },
        {
          kind: 'static',
          route: 'public-agreements',
          labelKey: 'public_menu_security',
          descriptionKey: 'public_menu_securityDesc',
          order: 2,
          disabled: false,
        },
      ],
    },
  ],
};
*/
