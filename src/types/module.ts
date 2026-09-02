import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { ADD_MODULE, MODULE_CONFIG } from '../schemas';
import { MongoSchema } from './common';

export type IModuleConfig = z.infer<ReturnType<typeof MODULE_CONFIG>>;

export type IAddModule = z.infer<ReturnType<typeof ADD_MODULE>>;

export type IModule = z.infer<typeof ModuleSchema>;
export const ModuleSchema = ADD_MODULE().extend(MongoSchema.shape);

export type IModuleDefinition = z.infer<typeof ModuleDefinitionSchema>;
export const ModuleDefinitionSchema = z.object({
  key: z.string(),
  name: z.string(),
  icon: z.string(),
  category: z.string(),
  isActive: z.boolean(),
  fields: z.array(z.string()),
  isDetail: z.boolean(),
});

export type IGoogleAuthConfig = z.infer<typeof GoogleAuthSchema>;
export const GoogleAuthSchema = z.object({
  clientId: z.string(),
  clientSecret: z.string(),
  callbackUrl: z.string(),
  apiKey: z.string(),
});

export type IFacebookAuthConfig = z.infer<typeof FacebookAuthSchema>;
export const FacebookAuthSchema = z.object({
  apiKey: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
  callbackUrl: z.string(),
});

export type IWhatsappConfig = z.infer<typeof WhatsappSchema>;
export const WhatsappSchema = z.object({
  phoneNumber: z.string(),
});

export type ITawkToConfig = z.infer<typeof TawkToSchema>;
export const TawkToSchema = z.object({
  propertyId: z.string(),
  widgetId: z.string(),
});

export type ICrispConfig = z.infer<typeof CrispSchema>;
export const CrispSchema = z.object({
  siteId: z.string(),
});

export type INetgsmConfig = z.infer<typeof NetgsmSchema>;
export const NetgsmSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type IGeliverConfig = z.infer<typeof GeliverSchema>;
export const GeliverSchema = z.object({
  token: z.string(),
  organizationId: z.string(),
  isTest: z.boolean(),
});

export type IIyzicoConfig = z.infer<typeof IyzicoSchema>;
export const IyzicoSchema = z.object({
  url: z.string(),
  apiKey: z.string(),
  secretKey: z.string(),
});

export type IPaytrConfig = z.infer<typeof PaytrSchema>;
export const PaytrSchema = z.object({
  merchant_id: z.string(),
  merchant_key: z.string(),
  merchant_salt: z.string(),
  is_test_mode: z.boolean(),
});

export type IGoogleAnalyticsConfig = z.infer<typeof GoogleAnalyticsSchema>;
export const GoogleAnalyticsSchema = z.object({
  analyticsId: z.string(),
  analyticsPropertyId: z.string(),
});

export type IGoogleTagConfig = z.infer<typeof GoogleTagSchema>;
export const GoogleTagSchema = z.object({
  tagManagerId: z.string(),
});

export type IYandexMetricaConfig = z.infer<typeof YandexMetricaSchema>;
export const YandexMetricaSchema = z.object({
  metricaId: z.string(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_MODULE: IModule = getDefaultsForSchema(ModuleSchema);
export const MODULE_REGISTRY: IModuleDefinition[] = [
  // authentication
  {
    key: 'googleAuth',
    name: 'Google Authentication',
    icon: 'https://api.iconify.design/material-icon-theme/google.svg?width=48&height=48',
    category: 'authentication',
    fields: ['clientId', 'clientSecret', 'callbackUrl', 'apiKey'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'facebookAuth',
    name: 'Facebook Authentication',
    icon: 'https://api.iconify.design/logos/facebook.svg?width=48&height=48',
    category: 'authentication',
    fields: ['apiKey', 'clientId', 'clientSecret', 'callbackUrl'],
    isDetail: true,
    isActive: true,
  },
  // liveChat
  {
    key: 'contactForm',
    name: 'Contact Form',
    icon: 'https://api.iconify.design/icon-park/communication.svg?width=48&height=48',
    category: 'liveChat',
    fields: [],
    isDetail: false,
    isActive: true,
  },
  {
    key: 'whatsapp',
    name: 'Whatsapp',
    icon: 'https://api.iconify.design/logos/whatsapp-icon.svg?width=48&height=48',
    category: 'liveChat',
    fields: ['phoneNumber'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'tawkTo',
    name: 'Tawk To',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl76XCXcq5OWY3ADok7ITIfzoEVuPIg_MQOPZTmNVcePVMr4IYpGpNTzu',
    category: 'liveChat',
    fields: ['propertyId', 'widgetId'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'crisp',
    name: 'Crisp',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUcKyQlCDp3F5mtnfvJKVF5Ro7Rb5A-41GbOTN0OdgD3qRUITR3GPYQw&s=10',
    category: 'liveChat',
    fields: ['siteId'],
    isDetail: true,
    isActive: true,
  },
  // communication
  {
    key: 'netgsm',
    name: 'NetGSM',
    icon: 'https://avatars.githubusercontent.com/u/91958591',
    category: 'communication',
    fields: ['username', 'password', 'sender', 'phoneNumber'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'twilio',
    name: 'Twilio',
    icon: 'https://api.iconify.design/devicon/twilio.svg?width=48&height=48',
    category: 'communication',
    fields: ['accountSid', 'authToken'],
    isDetail: true,
    isActive: false,
  },
  // shipping
  {
    key: 'geliver',
    name: 'Geliver',
    icon: 'https://geliver.io/geliverlogo.png',
    category: 'shipping',
    fields: ['token', 'organizationId', 'isTest'],
    isDetail: true,
    isActive: true,
  },
  // shopping
  {
    key: 'googleMerchant',
    name: 'Google Merchant Center',
    icon: 'https://api.iconify.design/selfhst/google-shopping.svg?width=48&height=48',
    category: 'shopping',
    fields: [],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'yandexMerchants',
    name: 'Yandex  Merchants',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEVHcExSJ/SKdft2WPlwUPhbNPNpR/eBZ/qFbfqKdftQI/RPIvSCafpPIfSIc/1QRfpVKvVQIvRoRfd8YfptS/hZL/Z4W/lcNPZ0VflLHPNjPvdIFvRgOfb////Oxf3d1/7s6P+5rfyqmvv39v+Xg/st/k7GAAAAD3RSTlMAlJmZ/hVS/v7+osvL6hyIK2VTAAABmUlEQVQ4jW3T2ZaDIAwAUKy4dZkDKMWCIGj//xsnLAqdKQ++5J4Ek4BQPm1977quv19a9OU09fM5jiOAvh+Gy8/feD3PcxKJfMYxxkE8zxzDUIR/2DQlceTwIpdh7Ltojrg8Bd62o0p/VqmkPAV2bi5yhJs2yxLE5MXkHC7+NhS5iiR8DmYM/ugHAC4KAWCaSwH95V6IJQq5riz9yxhEiyoCgvcj5QLIYq2Ev4W+vd8hxwXdCAjemd1sHRd015yxwa27eYcqd/QgQVDpdq1Xp7Vbtd7diFM/EKVBCEHoG0L+rJuMN/XtAHCIRVBstbZ4mXAaHBD0CIJH0fkEHctzAXB7ZUGtHgZteZxLyHFH19cp6KY3QuAjs6hRq5IgRGijFkmNnnzX4wLBegKIQplV+a6T1YjpyOGHpWIO2ttXmMsi7CD9RUHUftwqCrVyAsALZmWc/hy2rlKhCmE0tMOLJ4v7UceVeqnzHofwo4Uqx5tRpUj74UV+Vd9Fg7J4/BdlPN8036P693ivpbg2f+P+tNUNZvu4VeXz/wWRKTxkPUAeYQAAAABJRU5ErkJggg==',
    category: 'shopping',
    fields: [],
    isDetail: true,
    isActive: true,
  },
  // payment
  {
    key: 'iyzico',
    name: 'Iyzico',
    icon: 'https://api.iconify.design/fontisto/iyzigo.svg?width=48&height=48',
    category: 'payment',
    fields: ['url', 'apiKey', 'secretKey'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'paytr',
    name: 'Pay TR',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeJiHaxRspsdotkAxJ_2Pp1ekvytMf8D3I0rLUOvW5pTmiXR5exssgxM&s=10',
    category: 'payment',
    fields: ['merchant_id', 'merchant_key', 'merchant_salt', 'is_test_mode'],
    isDetail: true,
    isActive: false,
  },
  // analytics
  {
    key: 'googleAnalytics',
    name: 'Google Analytics',
    icon: 'https://api.iconify.design/logos/google-analytics.svg?width=48&height=48',
    category: 'analytics',
    fields: ['analyticsId', 'analyticsPropertyId'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'googleTag',
    name: 'Google Tag',
    icon: 'https://api.iconify.design/logos/google-tag-manager.svg?width=48&height=48',
    category: 'analytics',
    fields: ['tagManagerId'],
    isDetail: true,
    isActive: true,
  },
  {
    key: 'yandexMetrica',
    name: 'Yandex Metrica',
    icon: 'https://api.iconify.design/thesvg-color/yandex.svg?width=48&height=48',
    category: 'analytics',
    fields: ['metricaId'],
    isDetail: true,
    isActive: true,
  },
];

export const EXCLUSIVE_MODULE_CATEGORIES: string[] = ['liveChat', 'payment', 'shipping'];

export const isExclusiveCategory = (category: string): boolean =>
  EXCLUSIVE_MODULE_CATEGORIES.includes(category);
