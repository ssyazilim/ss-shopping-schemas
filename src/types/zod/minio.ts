import { z } from 'zod';
import { DELETE_OBJECT } from '../../schemas/minio/object/validation';

/*************************
 *       TYPES           *
 *************************/
export type ILoader = z.infer<typeof LoaderSchema>;
export const LoaderSchema = z.object({
  loading: z.boolean(),
  requestsPending: z.number(),
});

export type IListObjects = z.infer<typeof ListObjectsSchema>;
export const ListObjectsSchema = z.object({
  name: z.string(),
  lastModified: z.string(),
  etag: z.string(),
  size: z.number(),
});

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
});

export type ISignedPutData = z.infer<typeof SignedPutDataSchema>;
export const SignedPutDataSchema = z.object({
  preSignedUrl: z.string(),
  imagePath: z.string(),
  objectName: z.string(),
  imageName: z.string(),
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
  Status: z.enum(['Enabled', 'Suspended']),
  Filter: z.object({ Prefix: z.string() }),
  Expiration: z.object({ Days: z.number() }),
});

export type IStatOpts = { [key: string]: unknown } | Record<string, never>;
export type IDeleteOpts = { versionId: string; governanceBypass: boolean } | Record<string, never>;
