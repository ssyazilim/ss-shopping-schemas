import { z } from 'zod';
import { MongoSchema } from '../../types/common';
import { IpDetailsSchema } from '../traffic/schema';
import { StaticImageSchema } from '../product/schema';
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
    phoneNumber: z.e164(),
    password: z.string(),
    profileImage: StaticImageSchema,
    role: z.array(z.string()),
    isActivated: z.boolean(),
    activationType: z.string(),
    activationKey: z.string().optional(),
    activationCode: z.string().optional(),
    details: IpDetailsSchema.nullable(),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'User' });

export type IUserToken = z.infer<typeof UserTokenSchema>;
export const UserTokenSchema = z.object({
  _id: z.string(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  phoneNumber: z.e164(),
  role: z.array(z.string()),
  isActivated: z.boolean(),
  activationCode: z.string(),
  iat: z.number(),
  exp: z.number(),
});

export type ICheckAdmin = z.infer<typeof CheckAdminSchema>;
export const CheckAdminSchema = UserTokenSchema.pick({
  _id: true,
  name: true,
  surname: true,
  email: true,
}).meta({ id: 'CheckAdmin' });

/*************************
 *       CONSTANTS       *
 *************************/

export const DEFAULT_USER: IUser = getDefaultsForSchema(UserSchema);
