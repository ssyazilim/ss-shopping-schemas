import { z } from 'zod';
import { registry } from '../../registry';

export const AddObjectSchema = registry.register(
  'AddObject',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    objectName: z
      .string()
      .meta({ examples: ['profile-photo.jpg'], description: 'Object name to store in minio' }),
    file: z.string().meta({ description: 'File to upload (binary)' }),
  }),
);

export const DeleteObjectSchema = registry.register(
  'DeleteObject',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    objectName: z.string().meta({ examples: ['1.jpg'] }),
  }),
);

export const DeleteObjectsSchema = registry.register(
  'DeleteObjects',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    objectNames: z.array(z.string()).meta({ examples: [['1.jpg', '2.jpg']] }),
  }),
);

export const CopyObjectSchema = registry.register(
  'CopyObject',
  z.object({
    targetBucket: z.string().meta({ examples: ['test1'] }),
    targetObject: z.string().meta({ examples: ['1.jpg'] }),
    sourceObject: z.string().meta({ examples: ['test2/images/1.jpg'] }),
  }),
);

export const PresignedUrlSchema = registry.register(
  'PresignedUrl',
  z.object({
    httpMethod: z.string().meta({ examples: ['GET'] }),
    bucketName: z.string().meta({ examples: ['test'] }),
    objectName: z.string().meta({ examples: ['1.jpg'] }),
    expireTime: z
      .number()
      .optional()
      .meta({ examples: [360] }),
  }),
);

export const PresignedGetObjectSchema = registry.register(
  'PresignedGetObject',
  z.object({
    bucketName: z.string().meta({ examples: ['test'] }),
    objectName: z.string().meta({ examples: ['1.jpg'] }),
    expireTime: z
      .number()
      .optional()
      .meta({ examples: [360] }),
  }),
);
