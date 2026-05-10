import { z } from 'zod';
import { registry } from '../registry';

export const LoginUserSchema = registry.register(
  'loginUser',
  z.object({
    email: z.email(),
    password: z.string(),
  }),
);

export const AddUserSchema = registry.register(
  'addUser',
  z.object({
    name: z.string().meta({ examples: ['Barış'] }),
    surname: z.string().optional().meta({ examples: ['Gür'] }),
    email: z.email().meta({ examples: ['ua_baris_07@hotmail.com'] }),
    phoneNumber: z.string().meta({ examples: ['905365056943'] }),
    password: z.string().meta({ examples: ['Passw0rd'] }),
  }),
);

export const CheckKeySchema = registry.register(
  'checkKey',
  z.object({
    key: z.string(),
  }),
);

export const ActivateUserSchema = registry.register(
  'activateUser',
  z.object({
    key: z.string(),
    code: z.string(),
  }),
);

export const PasswordResetUserSchema = registry.register(
  'passwordResetUser',
  z.object({
    email: z.email(),
  }),
);

export const PasswordResetCompleteUserSchema = registry.register(
  'passwordResetCompleteUser',
  z.object({
    email: z.email(),
    key: z.string(),
    newPassword: z.string(),
  }),
);
