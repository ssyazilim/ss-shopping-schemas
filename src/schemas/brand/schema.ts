import { z } from 'zod';
import { registry } from '../registry';

export const BrandSchema = registry.register(
  'Brand',
  z.object({
    name: z.string(),
  }),
);

export const AddBrandsSchema = registry.register('AddBrands', z.array(BrandSchema));

export const UpdateBrandSchema = registry.register('UpdateBrand', BrandSchema.partial());
