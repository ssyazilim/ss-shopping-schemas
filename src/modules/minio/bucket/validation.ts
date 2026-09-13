import { z } from 'zod';
import {
  LifeCycleConfigSchema,
  BucketAccessSchema,
  EncryptionModeSchema,
  EncryptionConfigSchema,
} from '../schema';

export const ADD_BUCKET_VERSION = z
  .object({
    bucketName: z.string(),
    properties: z.object({
      Status: z.enum(['Enabled', 'Suspended']),
    }),
  })
  .meta({ id: 'AddBucketVersion' });

export const ADD_BUCKET_CONFIG = z
  .object({
    bucketName: z.string(),
    properties: z.object({
      Rule: z.array(LifeCycleConfigSchema),
    }),
  })
  .meta({ id: 'AddBucketConfig' });

export const SET_BUCKET_POLICY = z
  .object({
    bucketName: z.string(),
    access: BucketAccessSchema.optional().meta({
      description:
        "Access mode. 'private' removes the policy, 'public' applies the anonymous read+write policy, 'custom' uses the provided policy document. Defaults to 'custom' when omitted",
    }),
    policy: z.string().optional().meta({
      description:
        "Bucket policy as a JSON document string. Only used when access is 'custom'. Send an empty string to remove the policy",
    }),
  })
  .meta({ id: 'SetBucketPolicy' });

export const SET_BUCKET_ENCRYPTION = z
  .object({
    bucketName: z.string(),
    mode: EncryptionModeSchema.optional().meta({
      description:
        "Encryption mode. 'sse-s3' applies AES256 server-side encryption, 'disabled' removes it. The backend builds the configuration",
    }),
    properties: EncryptionConfigSchema.optional(),
  })
  .meta({ id: 'SetBucketEncryption' });

export const SET_BUCKET_TAGGING = z
  .object({
    bucketName: z.string(),
    tags: z.record(z.string(), z.string()),
  })
  .meta({ id: 'SetBucketTagging' });
