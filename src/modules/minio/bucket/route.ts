import { z } from 'zod';
import { registerRoute } from '../../../utils/registry';
import { SERVICE_TAGS } from '../../../utils/tags';
import {
  ADD_BUCKET_VERSION,
  ADD_BUCKET_CONFIG,
  SET_BUCKET_POLICY,
  SET_BUCKET_ENCRYPTION,
  SET_BUCKET_TAGGING,
} from './validation';
import {
  buildRequestBody,
  jsonResponse,
  listResponse,
  messageResponse,
} from '../../../utils/common';
import {
  BucketListItemSchema,
  BucketTagSchema,
  BucketVersioningSchema,
  BucketLifecycleSchema,
  EncryptionConfigSchema,
} from '../schema';

// GET /admin/minio/buckets
registerRoute({
  method: 'get',
  path: '/admin/minio/buckets',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get all buckets in the system',
  security: [{ JWT: [] }],
  responses: listResponse(BucketListItemSchema),
});

// GET /admin/minio/bucket/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get bucket information in the system',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(z.boolean()),
});

// POST /admin/minio/bucket/{bucketName}
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Add bucket for the system',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: messageResponse(),
});

// DELETE /admin/minio/bucket/{bucketName}
registerRoute({
  method: 'delete',
  path: '/admin/minio/bucket/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Delete empty bucket for the system',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: messageResponse(),
});

// GET /admin/minio/bucket-version/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-version/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get Versioning state of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(BucketVersioningSchema),
});

// GET /admin/minio/bucket-region/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-region/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get the region of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/bucket-version
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket-version',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Add bucket version for the bucket',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_BUCKET_VERSION) },
  responses: messageResponse(),
});

// GET /admin/minio/bucket-config/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get Lifecycle Configuration of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(z.union([BucketLifecycleSchema, z.null()])),
});

// DELETE /admin/minio/bucket-config/{bucketName}
registerRoute({
  method: 'delete',
  path: '/admin/minio/bucket-config/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Delete Lifecycle Configuration of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: messageResponse(),
});

// POST /admin/minio/bucket-config
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket-config',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Set Lifecycle Configuration on a Bucket',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_BUCKET_CONFIG) },
  responses: messageResponse(),
});

// GET /admin/minio/bucket-policy/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-policy/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get access policy of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/bucket-policy
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket-policy',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Set access policy on a Bucket',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SET_BUCKET_POLICY) },
  responses: messageResponse(),
});

// GET /admin/minio/bucket-encryption/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-encryption/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get default encryption configuration of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: jsonResponse(EncryptionConfigSchema),
});

// POST /admin/minio/bucket-encryption
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket-encryption',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Set default encryption configuration on a Bucket',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SET_BUCKET_ENCRYPTION) },
  responses: messageResponse(),
});

// DELETE /admin/minio/bucket-encryption/{bucketName}
registerRoute({
  method: 'delete',
  path: '/admin/minio/bucket-encryption/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Remove default encryption configuration of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: messageResponse(),
});

// GET /admin/minio/bucket-tagging/{bucketName}
registerRoute({
  method: 'get',
  path: '/admin/minio/bucket-tagging/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Get tags of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: listResponse(BucketTagSchema),
});

// POST /admin/minio/bucket-tagging
registerRoute({
  method: 'post',
  path: '/admin/minio/bucket-tagging',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Set tags on a Bucket',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SET_BUCKET_TAGGING) },
  responses: messageResponse(),
});

// DELETE /admin/minio/bucket-tagging/{bucketName}
registerRoute({
  method: 'delete',
  path: '/admin/minio/bucket-tagging/{bucketName}',
  tags: [SERVICE_TAGS.minioBucket.name],
  summary: 'Remove tags of a Bucket',
  security: [{ JWT: [] }],
  request: { params: z.object({ bucketName: z.string() }) },
  responses: messageResponse(),
});
