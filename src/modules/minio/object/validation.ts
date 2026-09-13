import { z } from 'zod';

export const ADD_OBJECT = z
  .object({
    bucketName: z.string(),
    objectName: z.string().meta({ description: 'Object name to store in minio' }),
    file: z.any().meta({ type: 'string', format: 'binary' }),
  })
  .meta({ id: 'AddObject' });

const ALL_VERSIONS = z.boolean().optional().meta({
  description: 'Removes every version and delete marker of the key, not just the current one',
});

export const DELETE_OBJECT = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
    allVersions: ALL_VERSIONS,
  })
  .meta({ id: 'DeleteObject' });

export const DELETE_OBJECTS = z
  .object({
    bucketName: z.string(),
    objectNames: z.array(z.string()),
    allVersions: ALL_VERSIONS,
  })
  .meta({ id: 'DeleteObjects' });

export const COPY_OBJECT = z
  .object({
    bucketName: z.string().meta({ description: 'Target bucket' }),
    objectName: z.string().meta({ description: 'Target key inside the bucket' }),
    sourceName: z
      .string()
      .meta({ description: 'Source as bucket name and key together, not only the key' }),
  })
  .meta({ id: 'CopyObject' });

export const PRESIGNED_URL = z
  .object({
    httpMethod: z.string(),
    bucketName: z.string(),
    objectName: z.string(),
    expireTime: z.number().optional(),
  })
  .meta({ id: 'PresignedUrl' });

export const PRESIGNED_PUT_OBJECT = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
    expireTime: z.number().optional(),
    fileName: z.string().optional().meta({
      description: 'File name with extension. A unique name is generated when it is not sent',
    }),
  })
  .meta({ id: 'PresignedPutObject' });

export const ADD_FOLDER = z
  .object({
    bucketName: z.string(),
    objectName: z.string().meta({ description: 'Full folder path without a trailing slash' }),
  })
  .meta({ id: 'AddFolder' });

export const PRESIGNED_GET_OBJECT = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
    expireTime: z.number().optional(),
    fileName: z.string().optional().meta({
      description: 'Forces the browser to download the file with this name instead of opening it',
    }),
  })
  .meta({ id: 'PresignedGetObject' });

export const SET_OBJECT_TAGGING = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
    tags: z.record(z.string(), z.string()),
  })
  .meta({ id: 'SetObjectTagging' });

export const DELETE_OBJECT_TAGGING = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
  })
  .meta({ id: 'DeleteObjectTagging' });

export const REMOVE_INCOMPLETE_UPLOAD = z
  .object({
    bucketName: z.string(),
    objectName: z.string(),
  })
  .meta({ id: 'RemoveIncompleteUpload' });
