import { z } from 'zod';
import { ADD_BRAND } from './validation';
import { MongoSchema } from '../../types/common';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

export type IBrand = z.infer<typeof BrandSchema>;
export const BrandSchema = ADD_BRAND().extend(MongoSchema.shape).meta({ id: 'Brand' });

export const DEFAULT_BRAND: IBrand = getDefaultsForSchema(BrandSchema);
