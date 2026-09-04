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

export const AddObjectSchema = registry.register('AddObject', ADD_OBJECT);

export const DeleteObjectSchema = registry.register('DeleteObject', DELETE_OBJECT);

export const DeleteObjectsSchema = registry.register('DeleteObjects', DELETE_OBJECTS);

export const CopyObjectSchema = registry.register('CopyObject', COPY_OBJECT);

export const PresignedUrlSchema = registry.register('PresignedUrl', PRESIGNED_URL);

export const PresignedGetObjectSchema = registry.register(
  'PresignedGetObject',
  PRESIGNED_GET_OBJECT,
);

export const PresignedPutObjectSchema = registry.register(
  'PresignedPutObject',
  PRESIGNED_PUT_OBJECT,
);

export const AddFolderSchema = registry.register('AddFolder', ADD_FOLDER);

export const SetObjectTaggingSchema = registry.register('SetObjectTagging', SET_OBJECT_TAGGING);

export const DeleteObjectTaggingSchema = registry.register(
  'DeleteObjectTagging',
  DELETE_OBJECT_TAGGING,
);

export const RemoveIncompleteUploadSchema = registry.register(
  'RemoveIncompleteUpload',
  REMOVE_INCOMPLETE_UPLOAD,
);
