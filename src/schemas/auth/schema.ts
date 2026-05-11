import { z } from 'zod';
import { registry } from '../registry';
import { LOGIN_USER, ADD_USER, PASSWORD_RESET, PASSWORD_RESET_COMPLETE } from './validation';

export const LoginUserSchema = registry.register('loginUser', LOGIN_USER());

export const AddUserSchema = registry.register('addUser', ADD_USER());

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

export const PasswordResetUserSchema = registry.register('passwordResetUser', PASSWORD_RESET());

export const PasswordResetCompleteUserSchema = registry.register(
  'passwordResetCompleteUser',
  PASSWORD_RESET_COMPLETE(),
);
