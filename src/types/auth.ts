import { z } from 'zod';
import { ADD_USER, PASSWORD_RESET_COMPLETE } from '../schemas/auth/validation';
import { IMAGES } from '../schemas/product/validation';

export type IResetPasswordForm = z.infer<ReturnType<typeof PASSWORD_RESET_COMPLETE>>;

export type IUserRegister = z.infer<typeof UserRegisterSchema>;
export const UserRegisterSchema = ADD_USER().extend({
  profileImage: IMAGES().shape.staticImages.optional(),
});

export type IUserRole = z.infer<typeof UserRoleSchema>;
export const UserRoleSchema = z.enum(['ROLE_USER', 'ROLE_ADMIN']);

export type ICommonMail = z.infer<typeof CommonMailSchema>;
export const CommonMailSchema = z.object({
  userName: z.string(),
  mainUrl: z.string(),
  mainBrand: z.string(),
  contactMail: z.string(),
  mainAddress: z.string(),
});

export type IRegisterMail = z.infer<typeof RegisterMailSchema>;
export const RegisterMailSchema = CommonMailSchema.extend({
  activationCode: z.string(),
});

export type IPassResetMail = z.infer<typeof PassResetMailSchema>;
export const PassResetMailSchema = CommonMailSchema.extend({
  forgetPassLink: z.string(),
});

export type IUserGoogle = z.infer<typeof UserGoogleSchema>;
export const UserGoogleSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  name: z.object({
    familyName: z.string(),
    givenName: z.string(),
  }),
  emails: z.array(
    z.object({
      value: z.string(),
      verified: z.boolean(),
    }),
  ),
  photos: z.array(
    z.object({
      value: z.string(),
    }),
  ),
  provider: z.string(),
  _raw: z.string(),
  _json: z.object({
    sub: z.string(),
    name: z.string(),
    given_name: z.string(),
    family_name: z.string(),
    picture: z.string(),
    email: z.string(),
    email_verified: z.boolean(),
  }),
});

export type IUserFacebook = z.infer<typeof UserFacebookSchema>;
export const UserFacebookSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  name: z.record(z.string(), z.string()),
  email: z.string(),
  provider: z.string(),
  isActivated: z.boolean(),
  _raw: z.string(),
  _json: z.object({
    name: z.string(),
    id: z.string(),
  }),
});

export type IGeneralPass = z.infer<typeof GeneralPassSchema>;
export const GeneralPassSchema = z.object({
  oldPassword: z.string(),
  password: z.string(),
  rePassword: z.string().optional(),
});
