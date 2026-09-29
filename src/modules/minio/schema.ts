import { z } from 'zod';
import { DELETE_OBJECT } from './object/validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

/*************************
 *       TYPES           *
 *************************/

export type ILoader = z.infer<typeof LoaderSchema>;
export const LoaderSchema = z.object({
  loading: z.boolean(),
  requestsPending: z.number(),
});

// versionId/isLatest/isDeleteMarker are only filled in when the listing asks for versions;
// a plain listing omits them, which is why they are optional here.
export type IListObjects = z.infer<typeof ListObjectsSchema>;
export const ListObjectsSchema = z
  .object({
    name: z.string(),
    lastModified: z.string(),
    etag: z.string(),
    size: z.number(),
    versionId: z.string().optional(),
    isLatest: z.boolean().optional(),
    isDeleteMarker: z.boolean().optional(),
  })
  .meta({ id: 'ListObjects' });

export type IListPrefixes = z.infer<typeof ListPrefixesSchema>;
export const ListPrefixesSchema = z
  .object({
    prefix: z.string(),
    size: z.number(),
  })
  .meta({ id: 'ListPrefixes' });

export type IListEntry = IListObjects | IListPrefixes;

// A multipart upload that was started but never completed; its parts still occupy
// storage even though the object is not listable via listObjects.
// Only valid for recursive listings: a non-recursive call groups by delimiter and
// emits { prefix } entries into the same stream, which do not match this shape.
export type IIncompleteUpload = z.infer<typeof IncompleteUploadSchema>;
export const IncompleteUploadSchema = z
  .object({
    key: z.string(),
    uploadId: z.string(),
    size: z.number(),
    initiated: z.string(),
  })
  .meta({ id: 'IncompleteUpload' });

export interface IMediaEntry {
  key: string;
  name: string;
  url: string;
  isFolder: boolean;
  size: number;
  lastModified?: string;
  etag?: string;
}

export interface IMediaUpload {
  id: string;
  name: string;
  size: number;
  objectUrl: string;
  isImage: boolean;
  progress: number;
  status: 'uploading' | 'done' | 'error';
}

export type IUploader = z.infer<typeof UploaderSchema>;
export const UploaderSchema = z.object({
  id: z.string(),
  file: z.any(),
  uploading: z.boolean(),
  progress: z.number(),
  objectName: z.string().optional(),
  isDeleting: z.boolean(),
  isSaved: z.boolean(),
  error: z.boolean(),
  objectUrl: z.string().optional(),
});

export type IPutObject = z.infer<typeof PutObjectSchema>;
export const PutObjectSchema = z.object({
  bucketName: z.string(),
  objectName: z.string(),
  expireTime: z.number(),
  fileName: z.string().optional(),
});

export type ISignedPutData = z.infer<typeof SignedPutDataSchema>;
export const SignedPutDataSchema = z.object({
  preSignedUrl: z.string(),
  imagePath: z.string(),
  objectName: z.string(),
  imageName: z.string(),
});

export type IAddFolderData = z.infer<typeof AddFolderDataSchema>;
export const AddFolderDataSchema = z.object({
  folderName: z.string(),
});

export type IDeleteObject = z.infer<typeof DeleteObjectSchema>;
export const DeleteObjectSchema = DELETE_OBJECT;

export type IDestinationCb = (error: Error | null, destination: string) => void;

export type IStatus = z.infer<typeof StatusSchema>;
export const StatusSchema = z.object({
  Status: z.enum(['Enabled', 'Suspended']),
});

export type ILifeCycleConfig = z.infer<typeof LifeCycleConfigSchema>;
export const LifeCycleConfigSchema = z.object({
  ID: z.string(),
  Status: z.enum(['Enabled', 'Disabled']),
  Filter: z.object({ Prefix: z.string() }),
  Expiration: z.object({ Days: z.number() }),
});

export type IStatOpts = z.infer<typeof StatOptsSchema>;
export const StatOptsSchema = z.union([z.record(z.string(), z.unknown()), z.object({})]);

// versionId targets one specific version instead of the current one. forceDelete is a MinIO
// extension (x-minio-force-delete) that drops every version of the key in a single call.
export type IDeleteOpts = z.infer<typeof DeleteOptsSchema>;
export const DeleteOptsSchema = z.union([
  z.object({
    versionId: z.string().optional(),
    governanceBypass: z.boolean().optional(),
    forceDelete: z.boolean().optional(),
  }),
  z.object({}),
]);

export type IEditableRule = z.infer<typeof EditableRuleSchema>;
export const EditableRuleSchema = z.object({
  ID: z.string(),
  Prefix: z.string(),
  Days: z.string(),
  Enabled: z.boolean(),
});

export type IEditableTag = z.infer<typeof EditableTagSchema>;
export const EditableTagSchema = z.object({
  Key: z.string(),
  Value: z.string(),
});

export type IBucketPolicyStatement = z.infer<typeof BucketPolicyStatementSchema>;
export const BucketPolicyStatementSchema = z.object({
  Effect: z.enum(['Allow', 'Deny']),
  Principal: z.object({ AWS: z.array(z.string()) }),
  Action: z.array(z.string()),
  Resource: z.array(z.string()),
});

export type IBucketPolicy = z.infer<typeof BucketPolicySchema>;
export const BucketPolicySchema = z.object({
  Version: z.string(),
  Statement: z.array(BucketPolicyStatementSchema),
});

export type IBucketAccess = z.infer<typeof BucketAccessSchema>;
export const BucketAccessSchema = z.enum(['private', 'public', 'custom']);

export type IEncryptionMode = z.infer<typeof EncryptionModeSchema>;
export const EncryptionModeSchema = z.enum(['disabled', 'sse-s3']);

export type IEncryptionConfig = z.infer<typeof EncryptionConfigSchema>;
export const EncryptionConfigSchema = z
  .object({
    Rule: z.array(
      z.object({
        ApplyServerSideEncryptionByDefault: z
          .object({
            SSEAlgorithm: z.string(),
            KmsMasterKeyID: z.string().optional(),
          })
          .optional(),
      }),
    ),
  })
  .meta({ id: 'EncryptionConfig' });

export type IObjectMetadata = z.infer<typeof ObjectMetadataSchema>;
export const ObjectMetadataSchema = z
  .object({
    size: z.number(),
    metaData: z.record(z.string(), z.string()),
    lastModified: z.string(),
    versionId: z.string().nullable(),
    etag: z.string(),
  })
  .meta({ id: 'ObjectMetadata' });

export type IBucketListItem = z.infer<typeof BucketListItemSchema>;
export const BucketListItemSchema = z
  .object({
    name: z.string(),
    creationDate: z.string(),
  })
  .meta({ id: 'BucketListItem' });

export type IBucketTag = z.infer<typeof BucketTagSchema>;
export const BucketTagSchema = z
  .object({
    Key: z.string(),
    Value: z.string(),
  })
  .meta({ id: 'BucketTag' });

export type IBucketVersioning = z.infer<typeof BucketVersioningSchema>;
export const BucketVersioningSchema = z
  .object({
    Status: z.enum(['Enabled', 'Suspended']),
    MFADelete: z.string().optional(),
    ExcludedPrefixes: z.array(z.object({ Prefix: z.string() })).optional(),
    ExcludeFolders: z.boolean().optional(),
  })
  .meta({ id: 'BucketVersioning' });

export type IBucketLifecycle = z.infer<typeof BucketLifecycleSchema>;
export const BucketLifecycleSchema = z
  .object({
    Rule: z.array(LifeCycleConfigSchema),
  })
  .meta({ id: 'BucketLifecycle' });

export type IUploadedObjectInfo = z.infer<typeof UploadedObjectInfoSchema>;
export const UploadedObjectInfoSchema = z
  .object({
    etag: z.string(),
    versionId: z.string().nullable(),
  })
  .meta({ id: 'UploadedObjectInfo' });

export type IAddObjectResult = z.infer<typeof AddObjectResultSchema>;
export const AddObjectResultSchema = z
  .object({
    imagePath: z.string(),
    objectName: z.string(),
    imageName: z.string(),
    result: UploadedObjectInfoSchema,
  })
  .meta({ id: 'AddObjectResult' });

export type IAddFolderResult = z.infer<typeof AddFolderResultSchema>;
export const AddFolderResultSchema = z
  .object({
    folderName: z.string(),
    result: UploadedObjectInfoSchema,
  })
  .meta({ id: 'AddFolderResult' });

export type ICopyObjectResult = z.infer<typeof CopyObjectResultSchema>;
export const CopyObjectResultSchema = z
  .union([
    z.object({ etag: z.string(), lastModified: z.string() }),
    z.object({
      Bucket: z.string().optional(),
      Key: z.string().optional(),
      LastModified: z.string(),
      VersionId: z.string().nullable().optional(),
      SourceVersionId: z.string().nullable().optional(),
      Etag: z.string().optional(),
      Size: z.number().optional(),
    }),
  ])
  .meta({ id: 'CopyObjectResult' });

export type IRemoveObjectsResult = z.infer<typeof RemoveObjectsResultSchema>;
export const RemoveObjectsResultSchema = z
  .object({
    Error: z
      .object({
        Code: z.string().optional(),
        Message: z.string().optional(),
        Key: z.string().optional(),
        VersionId: z.string().optional(),
      })
      .optional(),
  })
  .nullable()
  .meta({ id: 'RemoveObjectsResult' });

/*************************
 *       CONSTANTS       *
 *************************/

export const MEDIA_TYPE_EXTENSIONS: Record<string, string[]> = {
  images: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'avif'],
  pdf: ['pdf'],
  documents: ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv'],
  video: ['mp4', 'webm', 'mov', 'avi', 'mkv'],
  audio: ['mp3', 'wav', 'ogg', 'm4a', 'aac'],
};
export const DEFAULT_RULE: IEditableRule = {
  ID: '',
  Prefix: '/',
  Days: '365',
  Enabled: true,
};
export const DEFAULT_BUCKET_POLICY: IBucketPolicy = getDefaultsForSchema(BucketPolicySchema);
export const DEFAULT_TAG: IEditableTag = {
  Key: '',
  Value: '',
};

// Public access policy: anonymous read + write (download, upload, delete, list) for everyone
export const getPublicBucketPolicy = (bucketName: string): IBucketPolicy => ({
  Version: '2012-10-17',
  Statement: [
    {
      Effect: 'Allow',
      Principal: { AWS: ['*'] },
      Action: ['s3:GetBucketLocation', 's3:ListBucket', 's3:ListBucketMultipartUploads'],
      Resource: [`arn:aws:s3:::${bucketName}`],
    },
    {
      Effect: 'Allow',
      Principal: { AWS: ['*'] },
      Action: ['s3:*'],
      Resource: [`arn:aws:s3:::${bucketName}/*`],
    },
  ],
});

// SSE-S3 (AES256) server-side encryption applied to every object by default
export const getSseS3Encryption = (): IEncryptionConfig => ({
  Rule: [{ ApplyServerSideEncryptionByDefault: { SSEAlgorithm: 'AES256' } }],
});
