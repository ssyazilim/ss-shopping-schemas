import type { z } from 'zod';
import type { AddUserSchema, PasswordResetCompleteUserSchema } from '../schemas';

/*************************
 *       TYPES           *
 *************************/
export type IUserRole = 'ROLE_USER' | 'ROLE_ADMIN';

export type IUserRegister = z.infer<typeof AddUserSchema>;

export type IResetPasswordForm = z.infer<typeof PasswordResetCompleteUserSchema>;

export interface ICommonMail {
  userName: string;
  mainUrl: string;
  mainBrand: string;
  contactMail: string;
  mainAddress: string;
}

export interface IRegisterMail extends ICommonMail {
  activationCode: string;
}

export interface IPassResetMail extends ICommonMail {
  forgetPassLink: string;
}

export interface IUserGoogle {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: {
    value: string;
    verified: boolean;
  }[];
  photos: {
    value: string;
  }[];
  provider: string;
  _raw: string;
  _json: {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
  };
}

export interface IUserFacebook {
  id: string;
  displayName: string;
  name: { [key: string]: string };
  email: string;
  provider: string;
  isActivated: boolean;
  _raw: string;
  _json: {
    name: string;
    id: string;
  };
}

export interface IGeneralPass {
  oldPassword: string;
  password: string;
  rePassword?: string;
}
