import { registry } from '../../registry';
import {
  ADD_OBJECT,
  DELETE_OBJECT,
  DELETE_OBJECTS,
  COPY_OBJECT,
  PRESIGNED_URL,
  PRESIGNED_GET_OBJECT,
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
