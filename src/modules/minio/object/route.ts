import { z } from 'zod';
import { registry } from '../../registry';
import {
  ADD_OBJECT,
  DELETE_OBJECT,
  DELETE_OBJECTS,
  COPY_OBJECT,
  PRESIGNED_URL,
  PRESIGNED_GET_OBJECT,
  PRESIGNED_PUT_OBJECT,
  ADD_FOLDER,
  SET_OBJECT_TAGGING,
  DELETE_OBJECT_TAGGING,
  REMOVE_INCOMPLETE_UPLOAD,
} from './validation';
import {
  buildRequestBody,
  jsonResponse,
  listResponse,
  messageResponse,
  binaryResponse,
} from '../../common';
import {
  ObjectMetadataSchema,
  AddObjectResultSchema,
  AddFolderResultSchema,
  CopyObjectResultSchema,
  RemoveObjectsResultSchema,
  ListObjectsSchema,
  ListPrefixesSchema,
  IncompleteUploadSchema,
  BucketTagSchema,
} from '../schema';

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
  responses: jsonResponse(ObjectMetadataSchema),
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
  responses: binaryResponse('Object stream as a file download'),
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
        'multipart/form-data': { schema: ADD_OBJECT },
      },
    },
  },
  responses: jsonResponse(AddObjectResultSchema),
});

// DELETE /admin/minio/object
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Delete a specific object',
  operationId: 'deleteObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECT) },
  responses: messageResponse(),
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
  responses: listResponse(z.union([ListObjectsSchema, ListPrefixesSchema])),
});

// DELETE /admin/minio/objects
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/objects',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Delete multiple objects',
  operationId: 'deleteObjects',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECTS) },
  responses: listResponse(RemoveObjectsResultSchema),
});

// POST /admin/minio/object/copy
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/copy',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Copy an object from one bucket to another',
  operationId: 'copyObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(COPY_OBJECT) },
  responses: jsonResponse(CopyObjectResultSchema),
});

// POST /admin/minio/object/presigned-url
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-url',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for the provided HTTP method',
  operationId: 'getPresignedUrl',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_URL) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/object/presigned-get-object
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-get-object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for HTTP GET operations',
  operationId: 'getPresignedGetObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_GET_OBJECT) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/object/presigned-put-object
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/presigned-put-object',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Generates a presigned URL for HTTP PUT operations',
  operationId: 'getPresignedPutObject',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_PUT_OBJECT) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/folder
registry.registerPath({
  method: 'post',
  path: '/admin/minio/folder',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Creates an empty folder with a zero byte object',
  operationId: 'addFolder',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_FOLDER) },
  responses: jsonResponse(AddFolderResultSchema),
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
  responses: listResponse(BucketTagSchema),
});

// POST /admin/minio/object/tagging
registry.registerPath({
  method: 'post',
  path: '/admin/minio/object/tagging',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Set tags on a specific object',
  operationId: 'addObjectTagging',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SET_OBJECT_TAGGING) },
  responses: messageResponse(),
});

// DELETE /admin/minio/object/tagging
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/tagging',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Remove tags of a specific object',
  operationId: 'deleteObjectTagging',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECT_TAGGING) },
  responses: messageResponse(),
});

// GET /admin/minio/objects/incomplete-uploads
registry.registerPath({
  method: 'get',
  path: '/admin/minio/objects/incomplete-uploads',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Get partially uploaded objects in a bucket',
  operationId: 'listIncompleteUploads',
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
  responses: listResponse(IncompleteUploadSchema),
});

// DELETE /admin/minio/object/incomplete-upload
registry.registerPath({
  method: 'delete',
  path: '/admin/minio/object/incomplete-upload',
  tags: ['SERVICE-minio-object-S3'],
  summary: 'Remove a partially uploaded (incomplete) object',
  operationId: 'deleteIncompleteUpload',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(REMOVE_INCOMPLETE_UPLOAD) },
  responses: messageResponse(),
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
  responses: binaryResponse('Object stream as a file download'),
});
