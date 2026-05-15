import { z } from 'zod';
import { UPDATE_QUESTION } from '../../schemas/question/validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import type { IUser } from './user';
import type { IProduct } from './product';

/*************************
 *       TYPES           *
 *************************/
export type IQuestion = Omit<z.infer<typeof QuestionSchema>, 'userId' | 'productId'> & {
  userId: IUser;
  productId: IProduct;
};
export const QuestionSchema = UPDATE_QUESTION()
  .extend({
    userId: z.string(),
    productId: z.string(),
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_QUESTION = getDefaultsForSchema(QuestionSchema);
