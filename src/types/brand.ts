import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import { ADD_BRAND } from '../schemas';

export type IBrand = z.infer<typeof BrandSchema>;
export const BrandSchema = ADD_BRAND().extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_BRAND: IBrand = getDefaultsForSchema(BrandSchema);
