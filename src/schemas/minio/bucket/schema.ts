import { registry } from '../../registry';
import {
  ADD_BUCKET_CONFIG,
  ADD_BUCKET_VERSION,
  SET_BUCKET_POLICY,
  SET_BUCKET_ENCRYPTION,
  SET_BUCKET_TAGGING,
} from './validation';

export const AddBucketVersionSchema = registry.register('AddBucketVersion', ADD_BUCKET_VERSION);

export const AddBucketConfigSchema = registry.register('AddBucketConfig', ADD_BUCKET_CONFIG);

export const SetBucketPolicySchema = registry.register('SetBucketPolicy', SET_BUCKET_POLICY);

export const SetBucketEncryptionSchema = registry.register(
  'SetBucketEncryption',
  SET_BUCKET_ENCRYPTION,
);

export const SetBucketTaggingSchema = registry.register('SetBucketTagging', SET_BUCKET_TAGGING);
