import { z } from 'zod';
import { registry } from '../../registry';
import { AddBucketVersionSchema, AddBucketConfigSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
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
  path: '/admin/minio/buckets',
  tags: ['Minio Bucket S3'],
  summary: 'Get all buckets in the system',
  operationId: 'getBuckets',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Get bucket information in the system',
  operationId: 'getBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Add bucket for the system',
  operationId: 'addBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Delete empty bucket for the system',
  operationId: 'deleteBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-operations/incompleted-uploads',
  tags: ['Minio Bucket S3'],
  summary: 'Get partially uploaded objects in a bucket',
  operationId: 'getIncompletedUploads',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      prefix: z
        .string()
        .optional()
        .meta({ examples: [''], description: 'Where to start => .../../' }),
      recursive: z
        .boolean()
        .optional()
        .meta({ examples: [false], description: 'Include to the subfolders' }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-operations',
  tags: ['Minio Bucket S3'],
  summary: 'Lists all objects in a bucket using S3 listing objects V2 API',
  operationId: 'listObjects',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      prefix: z
        .string()
        .optional()
        .meta({ examples: [''], description: 'Where to start => .../../' }),
      recursive: z
        .boolean()
        .optional()
        .meta({ examples: [false], description: 'Include to the subfolders' }),
      startAfter: z
        .string()
        .optional()
        .meta({
          examples: [''],
          description: 'You can start from a point in an alphabetical directory => e.txt | k.txt',
        }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-version/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Get Versioning state of a Bucket',
  operationId: 'getBucketVersion',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-version',
  tags: ['Minio Bucket S3'],
  summary: 'Add bucket version for the bucket',
  operationId: 'addBucketVersion',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddBucketVersionSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Get Lifecycle Configuration of a Bucket',
  operationId: 'getBucketConfig',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: ['Minio Bucket S3'],
  summary: 'Delete Lifecycle Configuration of a Bucket',
  operationId: 'deleteBucketConfig',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-config',
  tags: ['Minio Bucket S3'],
  summary: 'Set Lifecycle Configuration on a Bucket',
  operationId: 'addBucketConfig',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddBucketConfigSchema) },
  responses,
});
