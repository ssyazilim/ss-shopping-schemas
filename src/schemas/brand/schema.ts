import { z } from 'zod';
import { registry } from '../registry';
import { ADD_BRAND } from './validation';

export const BrandSchema = registry.register('Brand', ADD_BRAND());

export const AddBrandsSchema = registry.register('AddBrands', z.array(BrandSchema));

export const UpdateBrandSchema = registry.register('UpdateBrand', BrandSchema.partial());
