import { registry } from '../registry';
import {
  ADD_EXTERNAL,
  UPDATE_EXTERNAL,
  EXTERNAL_IYZICO,
  EXTERNAL_GOOGLE,
  EXTERNAL_FACEBOOK,
  EXTERNAL_TAWK_TO,
  EXTERNAL_CRISP,
  EXTERNAL_GELIVER,
} from './validation';

const ExternalIyzicoSchema = registry.register('ExternalIyzico', EXTERNAL_IYZICO);
const ExternalGoogleSchema = registry.register('ExternalGoogle', EXTERNAL_GOOGLE);
const ExternalFacebookSchema = registry.register('ExternalFacebook', EXTERNAL_FACEBOOK);
const ExternalTawkToSchema = registry.register('ExternalTawkTo', EXTERNAL_TAWK_TO);
const ExternalCrispSchema = registry.register('ExternalCrisp', EXTERNAL_CRISP);
const ExternalGeliverSchema = registry.register('ExternalGeliver', EXTERNAL_GELIVER);

export const AddExternalSchema = registry.register('AddExternal', ADD_EXTERNAL);
export const UpdateExternalSchema = registry.register('UpdateExternal', UPDATE_EXTERNAL);

void ExternalIyzicoSchema;
void ExternalGoogleSchema;
void ExternalFacebookSchema;
void ExternalTawkToSchema;
void ExternalCrispSchema;
void ExternalGeliverSchema;
