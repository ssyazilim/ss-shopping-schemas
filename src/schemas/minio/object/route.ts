import { z } from 'zod';
import { registry } from '../../registry';
import {
  AddObjectSchema,
  DeleteObjectSchema,
  DeleteObjectsSchema,
  CopyObjectSchema,
  PresignedUrlSchema,
  PresignedGetObjectSchema,
} from './schema';
import { responses, buildRequestBody } from '../../common';

registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/check-metadata',
  tags: ['Minio Object S3'],
  summary: 'Get metadata of a specific object',
  operationId: 'getObjectMetadata',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      objectName: z.string().meta({ examples: ['1.jpg'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Get a specific object',
  operationId: 'getObject',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      objectName: z.string().meta({ examples: ['1.jpg'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Upload file to minio',
  operationId: 'addObject',
  security: [{ JWT: [] }],
  request: {
    body: {
      content: {
        'multipart/form-data': { schema: AddObjectSchema },
      },
    },
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Delete a specific object',
  operationId: 'deleteObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/objects',
  tags: ['Minio Object S3'],
  summary: 'Delete multiple objects',
  operationId: 'deleteObjects',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectsSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/copy',
  tags: ['Minio Object S3'],
  summary: 'Copy an object from one bucket to another',
  operationId: 'copyObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CopyObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-url',
  tags: ['Minio Object S3'],
  summary: 'Generates a presigned URL for the provided HTTP method',
  operationId: 'getPresignedUrl',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedUrlSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-get-object',
  tags: ['Minio Object S3'],
  summary: 'Generates a presigned URL for HTTP GET operations',
  operationId: 'getPresignedGetObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedGetObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-put-object',
  tags: ['Minio Object S3'],
  summary: 'Generates a presigned URL for HTTP PUT operations',
  operationId: 'getPresignedPutObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedGetObjectSchema) },
  responses,
});
