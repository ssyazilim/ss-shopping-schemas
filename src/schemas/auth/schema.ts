import { registry } from '../registry';
import {
  LOGIN_USER,
  ADD_USER,
  CHECK_KEY,
  PASSWORD_RESET,
  ACTIVATE_USER,
  PASSWORD_RESET_COMPLETE,
} from './validation';

export const LoginUserSchema = registry.register('loginUser', LOGIN_USER());

export const AddUserSchema = registry.register('addUser', ADD_USER());

export const CheckKeySchema = registry.register('checkKey', CHECK_KEY());

export const ActivateUserSchema = registry.register('activateUser', ACTIVATE_USER());

export const PasswordResetUserSchema = registry.register('passwordResetUser', PASSWORD_RESET());

export const PasswordResetCompleteUserSchema = registry.register(
  'passwordResetCompleteUser',
  PASSWORD_RESET_COMPLETE(),
);
