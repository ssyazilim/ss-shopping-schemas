import { z } from 'zod';
import { registry } from '../../registry';
import { AddBucketConfigSchema, AddBucketVersionSchema } from './schema';
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
  path: '/admin/minio/bucket',
  tags: ['Minio Bucket S3'],
  summary: 'Get all buckets',
  operationId: 'getBuckets',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket',
  tags: ['Minio Bucket S3'],
  summary: 'Create a new bucket',
  operationId: 'addBucket',
  security: [{ JWT: [] }],
  request: {
    body: buildRequestBody(z.object({ bucketName: z.string().meta({ examples: ['test'] }) })),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Delete a bucket',
  operationId: 'deleteBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket/config/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Set lifecycle configuration for a bucket',
  operationId: 'addBucketConfig',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ bucketName: z.string() }),
    body: buildRequestBody(AddBucketConfigSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket/version/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Set versioning for a bucket',
  operationId: 'addBucketVersion',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ bucketName: z.string() }),
    body: buildRequestBody(AddBucketVersionSchema),
  },
  responses,
});
