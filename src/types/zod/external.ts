import { z } from 'zod';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import {
  EXTERNAL_CRISP,
  EXTERNAL_FACEBOOK,
  EXTERNAL_GELIVER,
  EXTERNAL_GOOGLE,
  EXTERNAL_IYZICO,
  EXTERNAL_TAWK_TO,
} from '../../schemas';
import { MongoSchema } from './common';

/*************************
 *       TYPES           *
 *************************/
export type IExternalIyzico = z.infer<typeof ExternalIyzicoSchema>;
export const ExternalIyzicoSchema = EXTERNAL_IYZICO;

export type IExternalGoogle = z.infer<typeof ExternalGoogleSchema>;
export const ExternalGoogleSchema = EXTERNAL_GOOGLE;

export type IExternalFacebook = z.infer<typeof ExternalFacebookSchema>;
export const ExternalFacebookSchema = EXTERNAL_FACEBOOK;

export type IExternalYandex = z.infer<typeof ExternalYandexSchema>;
export const ExternalYandexSchema = z.object({
  metricaId: z.string(),
});

export type IExternalTawkTo = z.infer<typeof ExternalTawkToSchema>;
export const ExternalTawkToSchema = EXTERNAL_TAWK_TO;

export type IExternalCrisp = z.infer<typeof ExternalCrispSchema>;
export const ExternalCrispSchema = EXTERNAL_CRISP;

export type IExternalGeliver = z.infer<typeof ExternalGeliverSchema>;
export const ExternalGeliverSchema = EXTERNAL_GELIVER;

export type IExternal = z.infer<typeof ExternalSchema>;
export const ExternalSchema = z
  .object({
    iyzico: ExternalIyzicoSchema,
    google: ExternalGoogleSchema,
    facebook: ExternalFacebookSchema,
    yandex: ExternalYandexSchema,
    tawkTo: ExternalTawkToSchema,
    crisp: ExternalCrispSchema,
    geliver: ExternalGeliverSchema,
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_IYZICO: IExternalIyzico = getDefaultsForSchema(ExternalIyzicoSchema);
export const DEFAULT_GOOGLE: IExternalGoogle = getDefaultsForSchema(ExternalGoogleSchema);
export const DEFAULT_FACEBOOK: IExternalFacebook = getDefaultsForSchema(ExternalFacebookSchema);
export const DEFAULT_YANDEX: IExternalYandex = getDefaultsForSchema(ExternalYandexSchema);
export const DEFAULT_TAWKTO: IExternalTawkTo = getDefaultsForSchema(ExternalTawkToSchema);
export const DEFAULT_CRISP: IExternalCrisp = getDefaultsForSchema(ExternalCrispSchema);
export const DEFAULT_GELIVER: IExternalGeliver = getDefaultsForSchema(ExternalGeliverSchema);
export const DEFAULT_EXTERNAL: IExternal = getDefaultsForSchema(ExternalSchema);
