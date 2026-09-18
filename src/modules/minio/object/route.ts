import { z } from 'zod';
import { registerRoute } from '../../../utils/registry';
import { SERVICE_TAGS } from '../../../utils/tags';
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
} from '../../../utils/common';
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
registerRoute({
  method: 'get',
  path: '/admin/minio/object/check-metadata',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Get metadata of a specific object',
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
registerRoute({
  method: 'get',
  path: '/admin/minio/object',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Get a specific object',
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
registerRoute({
  method: 'post',
  path: '/admin/minio/object',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Upload file to minio',
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
registerRoute({
  method: 'delete',
  path: '/admin/minio/object',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Delete a specific object',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECT) },
  responses: messageResponse(),
});

// GET /admin/minio/objects
registerRoute({
  method: 'get',
  path: '/admin/minio/objects',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Lists all objects in a bucket using S3 listing objects V2 API',
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
registerRoute({
  method: 'delete',
  path: '/admin/minio/objects',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Delete multiple objects',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECTS) },
  responses: listResponse(RemoveObjectsResultSchema),
});

// POST /admin/minio/object/copy
registerRoute({
  method: 'post',
  path: '/admin/minio/object/copy',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Copy an object from one bucket to another',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(COPY_OBJECT) },
  responses: jsonResponse(CopyObjectResultSchema),
});

// POST /admin/minio/object/presigned-url
registerRoute({
  method: 'post',
  path: '/admin/minio/object/presigned-url',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Generates a presigned URL for the provided HTTP method',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_URL) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/object/presigned-get-object
registerRoute({
  method: 'post',
  path: '/admin/minio/object/presigned-get-object',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Generates a presigned URL for HTTP GET operations',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_GET_OBJECT) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/object/presigned-put-object
registerRoute({
  method: 'post',
  path: '/admin/minio/object/presigned-put-object',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Generates a presigned URL for HTTP PUT operations',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PRESIGNED_PUT_OBJECT) },
  responses: jsonResponse(z.string()),
});

// POST /admin/minio/folder
registerRoute({
  method: 'post',
  path: '/admin/minio/folder',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Creates an empty folder with a zero byte object',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_FOLDER) },
  responses: jsonResponse(AddFolderResultSchema),
});

// GET /admin/minio/object/tagging
registerRoute({
  method: 'get',
  path: '/admin/minio/object/tagging',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Get tags of a specific object',
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
registerRoute({
  method: 'post',
  path: '/admin/minio/object/tagging',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Set tags on a specific object',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SET_OBJECT_TAGGING) },
  responses: messageResponse(),
});

// DELETE /admin/minio/object/tagging
registerRoute({
  method: 'delete',
  path: '/admin/minio/object/tagging',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Remove tags of a specific object',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_OBJECT_TAGGING) },
  responses: messageResponse(),
});

// GET /admin/minio/objects/incomplete-uploads
registerRoute({
  method: 'get',
  path: '/admin/minio/objects/incomplete-uploads',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Get partially uploaded objects in a bucket',
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
registerRoute({
  method: 'delete',
  path: '/admin/minio/object/incomplete-upload',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Remove a partially uploaded (incomplete) object',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(REMOVE_INCOMPLETE_UPLOAD) },
  responses: messageResponse(),
});

// GET /admin/minio/object/partial
registerRoute({
  method: 'get',
  path: '/admin/minio/object/partial',
  tags: [SERVICE_TAGS.minioObject.name],
  summary: 'Get a byte range of an object as a binary stream',
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
