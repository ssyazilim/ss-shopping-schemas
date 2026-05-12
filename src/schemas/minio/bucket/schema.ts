import { registry } from '../../registry';
import { ADD_BUCKET_CONFIG, ADD_BUCKET_VERSION } from './validation';

export const AddBucketVersionSchema = registry.register('AddBucketVersion', ADD_BUCKET_VERSION);

export const AddBucketConfigSchema = registry.register('AddBucketConfig', ADD_BUCKET_CONFIG);
