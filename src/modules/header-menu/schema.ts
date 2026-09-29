import { z } from 'zod';
import { ADD_MENU_ITEM, ADD_MENU_SUB_ITEM, UPDATE_HEADER_MENU } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

/*************************
 *       TYPES           *
 *************************/

export type IHeaderMenuSubItem = z.infer<typeof HeaderMenuSubItemSchema>;
export const HeaderMenuSubItemSchema = ADD_MENU_SUB_ITEM();

export type IHeaderMenuItem = z.infer<typeof HeaderMenuItemSchema>;
export const HeaderMenuItemSchema = ADD_MENU_ITEM();

export type IMenuTarget = z.infer<typeof MenuTargetSchema>;
export const MenuTargetSchema = z.object({
  role: z.enum(['admin', 'user']),
  type: z.string(),
  disabled: z.boolean(),
  route: z.string().optional(),
});

export type IUpdateHeaderMenuItem = z.infer<ReturnType<typeof UPDATE_HEADER_MENU>>[number];


/*************************
 *       CONSTANTS       *
 *************************/

export const DEFAULT_MENU = getDefaultsForSchema(ADD_MENU_ITEM());
export const DEFAULT_SUBMENU = getDefaultsForSchema(ADD_MENU_SUB_ITEM());
export const DEFAULT_ROLE: { id: string; name: IHeaderMenuItem['role'] }[] = [
  { id: '0', name: 'admin' },
  { id: '1', name: 'user' },
];
export const DEFAULT_MENU_TYPE: { id: string; name: IHeaderMenuItem['type'] }[] = [
  { id: '0', name: 'link' },
  { id: '1', name: 'popover' },
];
export const DEFAULT_HEADER_MENU: IHeaderMenuItem[] = [
  {
    role: 'admin',
    type: 'link',
    route: '',
    labelKey: 'public_menu_home',
    order: 0,
    disabled: false,
    subItems: [],
  },
  {
    role: 'admin',
    type: 'link',
    route: 'products',
    labelKey: 'public_menu_products',
    order: 1,
    disabled: false,
    subItems: [],
  },
  {
    role: 'admin',
    type: 'popover',
    route: 'index',
    labelKey: 'public_menu_contact',
    order: 2,
    disabled: false,
    subItems: [
      {
        role: 'admin',
        type: 'link',
        route: 'public-contact-support',
        parentLabelKey: 'public_menu_contact',
        labelKey: 'public_menu_support',
        descriptionKey: 'public_menu_quick_support_description',
        order: 0,
        disabled: false,
      },
      {
        role: 'admin',
        type: 'link',
        route: 'public-contact-career',
        parentLabelKey: 'public_menu_contact',
        labelKey: 'public_menu_career',
        descriptionKey: 'public_menu_career_description',
        order: 1,
        disabled: false,
      },
      {
        role: 'admin',
        type: 'link',
        route: 'public-agreements',
        parentLabelKey: 'public_menu_contact',
        labelKey: 'public_menu_security',
        descriptionKey: 'public_menu_security_description',
        order: 2,
        disabled: false,
      },
      {
        role: 'admin',
        type: 'link',
        route: 'posts',
        parentLabelKey: 'public_menu_contact',
        labelKey: 'public_menu_posts',
        descriptionKey: 'public_menu_posts_description',
        order: 3,
        disabled: false,
      },
    ],
  },
];
