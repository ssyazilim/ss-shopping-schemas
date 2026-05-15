import { z } from 'zod';
import { UserSchema } from './user';
import { ADD_ADDRESS } from '../schemas';
import { MongoSchema } from './common';

/*************************
 *       TYPES           *
 *************************/
export type IAddress = z.infer<typeof AddressSchema>;
export const AddressSchema = z
  .object({
    userId: UserSchema,
  })
  .extend(ADD_ADDRESS().shape)
  .extend(MongoSchema.shape);
