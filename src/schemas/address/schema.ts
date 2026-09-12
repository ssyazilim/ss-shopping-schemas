import { z } from 'zod';
import { ADD_ADDRESS } from './validation';
import { UserSchema } from '../../types/user';
import { MongoSchema } from '../../types/common';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';


export type IAddress = z.infer<typeof AddressSchema>;
export const AddressSchema = ADD_ADDRESS()
  .extend({
    userId: UserSchema,
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Address' });

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_ADDRESS: IAddress = getDefaultsForSchema(AddressSchema);
