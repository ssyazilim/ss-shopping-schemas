import { z } from 'zod';

export const ADD_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z
    .string()
    .meta({ examples: ['profile-photo.jpg'], description: 'Object name to store in minio' }),
  file: z.any().meta({ type: 'string', format: 'binary' }),
});

export const DELETE_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['1.jpg'] }),
});

export const DELETE_OBJECTS = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectNames: z.array(z.string()).meta({ examples: [['1.jpg', '2.jpg']] }),
});

export const COPY_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['images'], description: 'Target bucket' }),
  objectName: z
    .string()
    .meta({ examples: ['test/posts/1.jpg'], description: 'Target key inside the bucket' }),
  sourceName: z.string().meta({
    examples: ['images/test/products/1.jpg'],
    description: 'Source as bucket name and key together, not only the key',
  }),
});

export const PRESIGNED_URL = z.object({
  httpMethod: z.string().meta({ examples: ['GET'] }),
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['1.jpg'] }),
  expireTime: z
    .number()
    .optional()
    .meta({ examples: [360] }),
});

export const PRESIGNED_PUT_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['test/products'] }),
  expireTime: z
    .number()
    .optional()
    .meta({ examples: [360] }),
  fileName: z
    .string()
    .optional()
    .meta({
      examples: ['bahce-fotografi.jpg'],
      description: 'File name with extension. A unique name is generated when it is not sent',
    }),
});

export const ADD_FOLDER = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({
    examples: ['test/posts/blog'],
    description: 'Full folder path without a trailing slash',
  }),
});

export const PRESIGNED_GET_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['1.jpg'] }),
  expireTime: z
    .number()
    .optional()
    .meta({ examples: [360] }),
  fileName: z
    .string()
    .optional()
    .meta({
      examples: ['bahce-fotografi.jpg'],
      description: 'Forces the browser to download the file with this name instead of opening it',
    }),
});
