import { z } from 'zod';
import { ADD_REVIEW } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';
import { UserSchema } from '../user/schema';
import { ProductSchema } from '../product/schema';

export type IReview = z.infer<typeof ReviewSchema>;
export const ReviewSchema = ADD_REVIEW()
  .extend({
    userId: z.union([z.string(), UserSchema]),
    productId: z.union([z.string(), ProductSchema]),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Review' });

export const DEFAULT_REVIEW: IReview = getDefaultsForSchema(ReviewSchema);
