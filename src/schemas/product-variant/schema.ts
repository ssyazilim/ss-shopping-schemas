import { registry } from '../registry';
import { VariantSchema as VariantEntitySchema } from '../../types/variant';
import {
  VARIANT,
  ADD_VARIANT,
  ADD_VARIANTS,
  UPDATE_VARIANT,
  DELETE_FOR_VARIANT,
} from './validation';

export const VariantBaseSchema = registry.register('VariantBase', VARIANT());

export const AddVariantSchema = registry.register('addVariant', ADD_VARIANT());

export const AddVariantsMultiSchema = registry.register('addVariantsMulti', ADD_VARIANTS());

export const UpdateVariantSchema = registry.register('updateVariant', UPDATE_VARIANT());

export const DeleteForVariantSchema = registry.register('deleteForVariant', DELETE_FOR_VARIANT());

export const VariantModel = registry.register('Variant', VariantEntitySchema);
