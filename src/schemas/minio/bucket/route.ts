import { z } from 'zod';
import { registry } from '../../registry';
import {
  AddBucketVersionSchema,
  AddBucketConfigSchema,
  SetBucketPolicySchema,
  SetBucketEncryptionSchema,
  SetBucketTaggingSchema,
} from './schema';
import { responses, buildRequestBody } from '../../common';

// GET /admin/minio/buckets
registry.registerPath({
  method: 'get',
  path: '/admin/minio/buckets',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get all buckets in the system',
  operationId: 'getBuckets',
  security: [{ JWT: [] }],
  responses,
});

// GET /admin/minio/bucket/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get bucket information in the system',
  operationId: 'getBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket/{bucketName}
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Add bucket for the system',
  operationId: 'addBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// DELETE /admin/minio/bucket/{bucketName}
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Delete empty bucket for the system',
  operationId: 'deleteBucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// GET /admin/minio/bucket-version/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-version/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get Versioning state of a Bucket',
  operationId: 'getBucketVersion',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket-version
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-version',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Add bucket version for the bucket',
  operationId: 'addBucketVersion',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddBucketVersionSchema) },
  responses,
});

// GET /admin/minio/bucket-config/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get Lifecycle Configuration of a Bucket',
  operationId: 'getBucketConfig',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// DELETE /admin/minio/bucket-config/{bucketName}
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Delete Lifecycle Configuration of a Bucket',
  operationId: 'deleteBucketConfig',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket-config
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-config',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Set Lifecycle Configuration on a Bucket',
  operationId: 'addBucketConfig',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddBucketConfigSchema) },
  responses,
});

// GET /admin/minio/bucket-policy/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-policy/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get access policy of a Bucket',
  operationId: 'getBucketPolicy',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket-policy
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-policy',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Set access policy on a Bucket',
  operationId: 'addBucketPolicy',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetBucketPolicySchema) },
  responses,
});

// GET /admin/minio/bucket-encryption/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-encryption/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get default encryption configuration of a Bucket',
  operationId: 'getBucketEncryption',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket-encryption
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-encryption',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Set default encryption configuration on a Bucket',
  operationId: 'addBucketEncryption',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetBucketEncryptionSchema) },
  responses,
});

// DELETE /admin/minio/bucket-encryption/{bucketName}
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket-encryption/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Remove default encryption configuration of a Bucket',
  operationId: 'deleteBucketEncryption',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// GET /admin/minio/bucket-tagging/{bucketName}
registry.registerPath({
  method: 'get',
  path: '/admin/minio/bucket-tagging/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Get tags of a Bucket',
  operationId: 'getBucketTagging',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});

// POST /admin/minio/bucket-tagging
registry.registerPath({
  method: 'post',
  path: '/admin/minio/bucket-tagging',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Set tags on a Bucket',
  operationId: 'addBucketTagging',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetBucketTaggingSchema) },
  responses,
});

// DELETE /admin/minio/bucket-tagging/{bucketName}
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/bucket-tagging/{bucketName}',
  tags: ['SERVICE-minio-bucket-S3'],
  summary: 'Remove tags of a Bucket',
  operationId: 'deleteBucketTagging',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string().meta({ examples: ['test'] }) }) },
  responses,
});
