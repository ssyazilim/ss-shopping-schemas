import { z } from 'zod';
import { registry } from '../../registry';

export const AddBucketConfigSchema = registry.register(
  'AddBucketConfig',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    properties: z.object({
      Rule: z.object({
        ID: z.string().meta({ examples: ['Transition and Expiration Rule'] }),
        Status: z.enum(['Enabled', 'Suspended']),
        Filter: z.object({
          Prefix: z.string().meta({ examples: [''] }),
        }),
        Expiration: z.object({
          Days: z.string().meta({ examples: ['3650'] }),
        }),
      }),
    }),
  }),
);

export const AddBucketVersionSchema = registry.register(
  'AddBucketVersion',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    properties: z.object({
      Status: z.enum(['Enabled', 'Suspended']),
    }),
  }),
);
