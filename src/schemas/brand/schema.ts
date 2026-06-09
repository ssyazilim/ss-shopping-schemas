import { registry } from '../registry';
import { ADD_BRAND, ADD_BRANDS } from './validation';

export const AddBrandSchema = registry.register('Brand', ADD_BRAND());

export const AddBrandsSchema = registry.register('AddBrands', ADD_BRANDS());

export const UpdateBrandSchema = registry.register('UpdateBrand', ADD_BRAND().partial());
