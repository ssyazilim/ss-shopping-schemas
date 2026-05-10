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
import { ApiSuccessSchema, ApiErrorSchema } from '../../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Get objects in a bucket',
  operationId: 'getObjects',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string(),
      prefix: z.string().optional(),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/{bucketName}',
  tags: ['Minio Object S3'],
  summary: 'Get objects in a specific bucket',
  operationId: 'getObjectsByBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Upload an object to a bucket',
  operationId: 'addObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object',
  tags: ['Minio Object S3'],
  summary: 'Delete an object from a bucket',
  operationId: 'deleteObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/objects/delete',
  tags: ['Minio Object S3'],
  summary: 'Delete multiple objects from a bucket',
  operationId: 'deleteObjects',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectsSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/copy',
  tags: ['Minio Object S3'],
  summary: 'Copy an object within minio',
  operationId: 'copyObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CopyObjectSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-url',
  tags: ['Minio Object S3'],
  summary: 'Generate a presigned URL',
  operationId: 'presignedUrl',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedUrlSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-get-object',
  tags: ['Minio Object S3'],
  summary: 'Generate a presigned GET URL',
  operationId: 'presignedGetObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PresignedGetObjectSchema) },
  responses,
});
