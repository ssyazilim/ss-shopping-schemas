import { z } from 'zod';
import { ADD_REVIEW } from '../schemas/review/validation';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import type { IUser } from './user';
import type { IProduct } from './product';

export type IReview = Omit<z.infer<typeof ReviewSchema>, 'userId' | 'productId'> & {
  userId: IUser | string;
  productId: IProduct | string;
};
export const ReviewSchema = ADD_REVIEW()
  .extend({
    userId: z.string(),
    productId: z.string(),
  })
  .extend(MongoSchema.shape);

export const DEFAULT_REVIEW = getDefaultsForSchema(ReviewSchema);
