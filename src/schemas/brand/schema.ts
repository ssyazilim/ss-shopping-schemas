import { z } from 'zod';
import { registry } from '../registry';
import { ADD_BRAND } from './validation';

export const AddBrandSchema = registry.register('Brand', ADD_BRAND());

export const AddBrandsSchema = registry.register('AddBrands', z.array(AddBrandSchema));

export const UpdateBrandSchema = registry.register('UpdateBrand', AddBrandSchema.partial());
