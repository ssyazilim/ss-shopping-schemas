import { z } from 'zod';

export type IPreset = z.infer<typeof PresetSchema>;
export const PresetSchema = z.enum([
  'today',
  'yesterday',
  'week',
  'lastWeek',
  'month',
  'lastMonth',
  'year',
  'lastYear',
]);

export type IPreset2 = z.infer<typeof Preset2Schema>;
export const Preset2Schema = z.object({
  yesterday: z.string(),
  week: z.string(),
  month: z.string(),
  year: z.string(),
  today: z.string(),
});

export type IMenuItem = z.infer<typeof MenuItemSchema>;
export const MenuItemSchema = z.object({
  title: z.string(),
  path: z.string(),
});

export type IRoute = z.infer<typeof RouteSchema>;
export const RouteSchema = z.object({
  create: MenuItemSchema,
  edit: MenuItemSchema.optional(),
});

export type IClient = z.infer<typeof ClientSchema>;
export const ClientSchema = z.object({
  _id: z.number(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  routes: RouteSchema,
});

export type ISecondaryNavigation = z.infer<typeof SecondaryNavigationSchema>;
export const SecondaryNavigationSchema = z.object({
  name: z.string(),
  to: z.string(),
  icon: z.unknown(),
});

export type INavigation = z.infer<typeof NavigationSchema>;
export const NavigationSchema = z.object({
  name: z.string(),
  to: z.union([z.string(), z.object({ path: z.string() })]),
  icon: z.unknown(),
  current: z.boolean(),
  subItems: z.array(SecondaryNavigationSchema),
});

export type ITopNavigation = z.infer<typeof TopNavigationSchema>;
export const TopNavigationSchema = z.object({
  name: z.string(),
  key: z.string(),
  to: z.string(),
  children: z.array(
    z.object({
      name: z.string(),
      key: z.string(),
      to: z.string(),
    }),
  ),
});

export type ICheckoutSteps = z.infer<typeof CheckoutStepsSchema>;
export const CheckoutStepsSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  status: z.enum(['complete', 'current', 'upcoming']),
});

export type ILink = z.infer<typeof LinkSchema>;
export const LinkSchema = z.object({
  name: z.string(),
  description: z.string(),
  to: z.string(),
  icon: z.unknown(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const PRESET_RANGES: Record<keyof IPreset2, IPreset> = {
  yesterday: 'yesterday',
  week: 'week',
  month: 'month',
  year: 'year',
  today: 'today',
} as const;
