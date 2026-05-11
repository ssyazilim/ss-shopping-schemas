import type { ZodTypeAny } from 'zod';
import { registry } from '../registry';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';
import {
  LoginUserSchema,
  AddUserSchema,
  CheckKeySchema,
  ActivateUserSchema,
  PasswordResetUserSchema,
  PasswordResetCompleteUserSchema,
} from './schema';

function buildRequestBody(schema: ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

const responses = {
  200: {
    description: 'Success',
    content: { 'application/json': { schema: ApiSuccessSchema } },
  },
  400: {
    description: 'Error',
    content: { 'application/json': { schema: ApiErrorSchema } },
  },
};

registry.registerPath({
  method: 'post',
  path: '/public/auth/login',
  tags: ['Authentication'],
  summary: 'Login process for the User in the system',
  operationId: 'loginUser',
  request: { body: buildRequestBody(LoginUserSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/register',
  tags: ['Authentication'],
  summary: 'Add a new user to system',
  operationId: 'addUser',
  request: { body: buildRequestBody(AddUserSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/register-verification',
  tags: ['Authentication'],
  summary: 'Check User key in the system',
  operationId: 'checkUser',
  request: { body: buildRequestBody(CheckKeySchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/register-activate',
  tags: ['Authentication'],
  summary: 'Activate User in the system',
  operationId: 'activateUser',
  request: { body: buildRequestBody(ActivateUserSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/refresh-code',
  tags: ['Authentication'],
  summary: 'Refresh code for the activation in the system',
  operationId: 'refreshCode',
  request: { body: buildRequestBody(CheckKeySchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset',
  tags: ['Authentication'],
  summary: 'User can be reset password using this api',
  operationId: 'passwordResetUser',
  request: { body: buildRequestBody(PasswordResetUserSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset-complete',
  tags: ['Authentication'],
  summary: 'User can be reset password for using this api',
  operationId: 'passwordResetCompleteUser',
  request: { body: buildRequestBody(PasswordResetCompleteUserSchema) },
  responses,
});
