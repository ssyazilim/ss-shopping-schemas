import { z } from 'zod';
import { UserSchema } from './user';
import { ADD_ADDRESS } from '../schemas';
import { MongoSchema } from './common';

export type IAddress = z.infer<typeof AddressSchema>;
export const AddressSchema = ADD_ADDRESS()
  .extend({
    userId: UserSchema,
  })
  .extend(MongoSchema.shape);
