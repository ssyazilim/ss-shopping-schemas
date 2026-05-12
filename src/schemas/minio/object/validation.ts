import { z } from 'zod';

export const ADD_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['profile-photo.jpg'], description: 'Object name to store in minio' }),
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
  targetBucket: z.string().meta({ examples: ['test1'] }),
  targetObject: z.string().meta({ examples: ['1.jpg'] }),
  sourceObject: z.string().meta({ examples: ['test2/images/1.jpg'] }),
});

export const PRESIGNED_URL = z.object({
  httpMethod: z.string().meta({ examples: ['GET'] }),
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['1.jpg'] }),
  expireTime: z.number().optional().meta({ examples: [360] }),
});

export const PRESIGNED_GET_OBJECT = z.object({
  bucketName: z.string().meta({ examples: ['test'] }),
  objectName: z.string().meta({ examples: ['1.jpg'] }),
  expireTime: z.number().optional().meta({ examples: [360] }),
});
