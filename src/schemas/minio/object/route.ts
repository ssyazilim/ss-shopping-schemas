import { z } from 'zod';
import { registry } from '../../registry';
import {
  AddObjectSchema,
  DeleteObjectSchema,
  DeleteObjectsSchema,
  CopyObjectSchema,
  PresignedUrlSchema,
  PresignedGetObjectSchema,
  PresignedPutObjectSchema,
  AddFolderSchema,
} from './schema';
import { responses, buildRequestBody } from '../../common';

// GET /admin/minio/object/check-metadata
registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/check-metadata',
  tags: ['SERVICE-minio-object-S3'],
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

// GET /admin/minio/object
registry.registerPath({
  method: 'get',
  path: '/admin/minio/object',
  tags: ['SERVICE-minio-object-S3'],
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

// POST /admin/minio/object
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object',
  tags: ['SERVICE-minio-object-S3'],
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

// DELETE /admin/minio/object
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Delete a specific object',
  operationId: 'deleteObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectSchema) },
  responses,
});

// DELETE /admin/minio/object/objects
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/objects',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Delete multiple objects',
  operationId: 'deleteObjects',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectsSchema) },
  responses,
});

// POST /admin/minio/object/copy
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/copy',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Copy an object from one bucket to another',
  operationId: 'copyObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CopyObjectSchema) },
  responses,
});

// POST /admin/minio/object/presigned-url
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-url',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for the provided HTTP method',
  operationId: 'getPresignedUrl',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedUrlSchema) },
  responses,
});

// POST /admin/minio/object/presigned-get-object
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-get-object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for HTTP GET operations',
  operationId: 'getPresignedGetObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedGetObjectSchema) },
  responses,
});

// POST /admin/minio/object/presigned-put-object
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-put-object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for HTTP PUT operations',
  operationId: 'getPresignedPutObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedPutObjectSchema) },
  responses,
});

// POST /admin/minio/folder
registry.registerPath({
  method: 'post',
  path: '/admin/minio/folder',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Creates an empty folder with a zero byte object',
  operationId: 'addFolder',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddFolderSchema) },
  responses,
});
