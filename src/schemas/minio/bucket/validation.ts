import { z } from 'zod';
import {
  LifeCycleConfigSchema,
  BucketAccessSchema,
  EncryptionModeSchema,
  EncryptionConfigSchema,
} from '../../../types/minio';

export const ADD_BUCKET_VERSION = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  properties: z.object({
    Status: z.enum(['Enabled', 'Suspended']),
  }),
});

export const ADD_BUCKET_CONFIG = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  properties: z.object({
    Rule: z.array(LifeCycleConfigSchema),
  }),
});

export const SET_BUCKET_POLICY = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  access: BucketAccessSchema.optional().meta({
    examples: ['custom'],
    description:
      "Access mode. 'private' removes the policy, 'public' applies the anonymous read+write policy, 'custom' uses the provided policy document. Defaults to 'custom' when omitted",
  }),
  policy: z.string().optional().meta({
    examples: [
      JSON.stringify({
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: { AWS: ['*'] },
            Action: ['s3:GetObject'],
            Resource: ['arn:aws:s3:::test/*'],
          },
        ],
      }),
    ],
    description:
      "Bucket policy as a JSON document string. Only used when access is 'custom'. Send an empty string to remove the policy",
  }),
});

export const SET_BUCKET_ENCRYPTION = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  mode: EncryptionModeSchema.optional().meta({
    examples: ['sse-s3'],
    description:
      "Encryption mode. 'sse-s3' applies AES256 server-side encryption, 'disabled' removes it. The backend builds the configuration",
  }),
  properties: EncryptionConfigSchema.optional(),
});

export const SET_BUCKET_TAGGING = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  tags: z.record(z.string(), z.string()).meta({ examples: [{ env: 'production' }] }),
});
