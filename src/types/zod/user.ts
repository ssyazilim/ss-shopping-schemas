import { z } from 'zod';
import { MongoSchema } from './common';
import { IpDetailsSchema } from './traffic';
import { StaticImageSchema } from './product';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

/*************************
 *       TYPES           *
 *************************/
export type IUser = z.infer<typeof UserSchema>;
export const UserSchema = z
  .object({
    name: z.string(),
    surname: z.string().optional(),
    email: z.string(),
    phoneNumber: z.string(),
    password: z.string(),
    profileImage: StaticImageSchema,
    role: z.array(z.string()),
    isActivated: z.boolean(),
    activationType: z.string(),
    activationKey: z.string().optional(),
    activationCode: z.string().optional(),
    details: IpDetailsSchema.nullable(),
  })
  .extend(MongoSchema.shape);

export type IUserToken = z.infer<typeof UserSchema>;
export const UserTokenSchema = z.object({
  _id: z.string(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  role: z.array(z.string()),
  isActivated: z.boolean(),
  activationCode: z.string(),
  iat: z.number(),
  exp: z.number(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_USER: IUser = getDefaultsForSchema(UserSchema);
