import { z } from 'zod';
import { UPDATE_QUESTION } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';
import { UserSchema } from '../user/schema';
import { ProductSchema } from '../product/schema';

export type IQuestion = z.infer<typeof QuestionSchema>;
export const QuestionSchema = UPDATE_QUESTION()
  .extend({
    userId: z.union([z.string(), UserSchema]),
    productId: z.union([z.string(), ProductSchema]),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Question' });

export const DEFAULT_QUESTION: IQuestion = getDefaultsForSchema(QuestionSchema);
