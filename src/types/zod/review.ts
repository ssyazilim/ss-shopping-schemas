import { z } from 'zod';
import { ADD_REVIEW } from '../../schemas/review/validation';
import { getDefaultsForSchema } from 'zod-defaults';
import { MongoSchema } from './common';
import type { IUser } from './user';
import type { IProduct } from './product';

/*************************
 *       TYPES           *
 *************************/
export type IReview = Omit<z.infer<typeof ReviewSchema>, 'userId' | 'productId'> & {
  userId: IUser;
  productId: IProduct;
};
export const ReviewSchema = ADD_REVIEW()
  .extend({
    userId: z.string(),
    productId: z.string(),
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_REVIEW = getDefaultsForSchema(ReviewSchema);
