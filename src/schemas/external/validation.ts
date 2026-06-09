import { z } from 'zod';

export const EXTERNAL_IYZICO = z.object({
  lang: z.string().meta({ examples: ['tr'] }),
  url: z.url().meta({ examples: ['https://sandbox-api.iyzipay.com'] }),
  apiKey: z.string(),
  secretKey: z.string(),
});

export const EXTERNAL_GOOGLE = z.object({
  analyticsId: z.string().meta({ examples: ['G-123456'] }),
  analyticsPropertyId: z.string(),
  tagManagerId: z.string().meta({ examples: ['GTM-123456'] }),
  apiKey: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
  callbackUrl: z.url(),
});

export const EXTERNAL_YANDEX = z.object({
  metricaId: z.string(),
});

export const EXTERNAL_FACEBOOK = z.object({
  apiKey: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
  callbackUrl: z.url(),
});

export const EXTERNAL_TAWK_TO = z.object({
  propertyId: z.string(),
  widgetId: z.string(),
});

export const EXTERNAL_CRISP = z.object({
  siteId: z.string(),
});

export const EXTERNAL_GELIVER = z.object({
  token: z.string(),
});

export const ADD_EXTERNAL = z.object({
  name: z.string(),
  iyzico: EXTERNAL_IYZICO.optional(),
  google: EXTERNAL_GOOGLE.optional(),
  yandex: EXTERNAL_YANDEX.optional(),
  facebook: EXTERNAL_FACEBOOK.optional(),
  tawkTo: EXTERNAL_TAWK_TO.optional(),
  crisp: EXTERNAL_CRISP.optional(),
  geliver: EXTERNAL_GELIVER.optional(),
});
