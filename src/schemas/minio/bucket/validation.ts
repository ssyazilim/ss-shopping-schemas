import { z } from 'zod';
import { LifeCycleConfigSchema } from '../../../types/minio';

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
  policy: z.string().meta({
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
    description: 'Bucket policy as a JSON document string. Send an empty string to remove the policy',
  }),
});

export const SET_BUCKET_ENCRYPTION = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  properties: z.object({
    Rule: z.array(
      z.object({
        ApplyServerSideEncryptionByDefault: z
          .object({
            SSEAlgorithm: z.string().meta({ examples: ['AES256'] }),
            KmsMasterKeyID: z.string().optional().meta({ examples: [''] }),
          })
          .optional(),
      }),
    ),
  }),
});

export const SET_BUCKET_TAGGING = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  tags: z.record(z.string(), z.string()).meta({ examples: [{ env: 'production' }] }),
});
