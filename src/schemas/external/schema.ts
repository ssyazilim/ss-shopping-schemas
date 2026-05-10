import { z } from 'zod';
import { registry } from '../registry';

const ExternalIyzicoSchema = registry.register(
  'ExternalIyzico',
  z.object({
    lang: z.string().meta({ examples: ['tr'] }),
    url: z.string().meta({ examples: ['https://sandbox-api.iyzipay.com'] }),
    apiKey: z.string(),
    secretKey: z.string(),
  }),
);

const ExternalGoogleSchema = registry.register(
  'ExternalGoogle',
  z.object({
    analyticsId: z.string().meta({ examples: ['G-123456'] }),
    analyticsPropertyId: z.string(),
    tagManagerId: z.string().meta({ examples: ['GTM-123456'] }),
    apiKey: z.string(),
    clientId: z.string(),
    clientSecret: z.string(),
    callbackUrl: z.string(),
  }),
);

const ExternalFacebookSchema = registry.register(
  'ExternalFacebook',
  z.object({
    apiKey: z.string(),
    clientId: z.string(),
    clientSecret: z.string(),
    callbackUrl: z.string(),
  }),
);

const ExternalTawkToSchema = registry.register(
  'ExternalTawkTo',
  z.object({
    propertyId: z.string(),
    widgetId: z.string(),
  }),
);

const ExternalCrispSchema = registry.register(
  'ExternalCrisp',
  z.object({
    siteId: z.string(),
  }),
);

const ExternalGeliverSchema = registry.register(
  'ExternalGeliver',
  z.object({
    token: z.string(),
  }),
);

export const AddExternalSchema = registry.register(
  'AddExternal',
  z.object({
    name: z.string(),
    iyzico: ExternalIyzicoSchema.optional(),
    google: ExternalGoogleSchema.optional(),
    facebook: ExternalFacebookSchema.optional(),
    tawkTo: ExternalTawkToSchema.optional(),
    crisp: ExternalCrispSchema.optional(),
    geliver: ExternalGeliverSchema.optional(),
  }),
);

export const UpdateExternalSchema = registry.register(
  'UpdateExternal',
  z.object({
    geoLocation: z
      .object({
        apiKey: z.string().optional(),
      })
      .optional(),
  }),
);

export const CheckSMTPSchema = registry.register(
  'CheckSMTP',
  z.object({
    user: z.string().meta({ examples: ['no-reply@ssyazilim.com'] }),
    password: z.string(),
    host: z.string().meta({ examples: ['mail.ssyazilim.com'] }),
    port: z.number().meta({ examples: [465] }),
    from: z.string().meta({ examples: ['SS-TEST | <no-reply@ssyazilim.com>'] }),
  }),
);
