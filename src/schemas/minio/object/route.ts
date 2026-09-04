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
  SetObjectTaggingSchema,
  DeleteObjectTaggingSchema,
  RemoveIncompleteUploadSchema,
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

// GET /admin/minio/objects
registry.registerPath({
  method: 'get',
  path: '/admin/minio/objects',
  tags: ['SERVICE-minio-object-S3'],
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

// DELETE /admin/minio/objects
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/objects',
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

// GET /admin/minio/object/tagging
registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/tagging',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Get tags of a specific object',
  operationId: 'getObjectTagging',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      objectName: z.string().meta({ examples: ['1.jpg'] }),
    }),
  },
  responses,
});

// POST /admin/minio/object/tagging
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/tagging',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Set tags on a specific object',
  operationId: 'addObjectTagging',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetObjectTaggingSchema) },
  responses,
});

// DELETE /admin/minio/object/tagging
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/tagging',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Remove tags of a specific object',
  operationId: 'deleteObjectTagging',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteObjectTaggingSchema) },
  responses,
});

// GET /admin/minio/object/incompleted-uploads
registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/incompleted-uploads',
  tags: ['SERVICE-minio-object-S3'],
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
        .meta({ examples: false, description: 'Include to the subfolders' }),
    }),
  },
  responses,
});

// DELETE /admin/minio/object/incompleted-uploads
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/incompleted-uploads',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Remove a partially uploaded (incomplete) object',
  operationId: 'deleteIncompleteUpload',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(RemoveIncompleteUploadSchema) },
  responses,
});

// GET /admin/minio/object/partial
registry.registerPath({
  method: 'get',
  path: '/admin/minio/object/partial',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Get a byte range of an object as a binary stream',
  operationId: 'getPartialObject',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      bucketName: z.string().meta({ examples: ['test'] }),
      objectName: z.string().meta({ examples: ['1.jpg'] }),
      offset: z.coerce.number().meta({ examples: [0] }),
      length: z.coerce.number().meta({ examples: [1024] }),
    }),
  },
  responses,
});
