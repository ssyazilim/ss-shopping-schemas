import { registry } from '../registry.js';
import { ApiSuccessSchema, ApiErrorSchema } from '../common.js';
import {
  LoginUserSchema,
  AddUserSchema,
  CheckKeySchema,
  ActivateUserSchema,
  PasswordResetUserSchema,
  PasswordResetCompleteUserSchema,
} from './schema.js';

const CONTENT_TYPES = [
  'application/json',
  'application/xml',
  'application/x-www-form-urlencoded',
] as const;

function buildRequestBody(schema: object) {
  return {
    content: Object.fromEntries(CONTENT_TYPES.map((ct) => [ct, { schema }])),
  };
}

const responses = {
  200: {
    description: 'Başarılı',
    content: { 'application/json': { schema: ApiSuccessSchema } },
  },
  400: {
    description: 'Hatalı istek',
    content: { 'application/json': { schema: ApiErrorSchema } },
  },
};

// POST /public/auth/login
registry.registerPath({
  method: 'post',
  path: '/public/auth/login',
  tags: ['Authentication'],
  summary: 'Login process for the User in the system',
  operationId: 'loginUser',
  request: { body: buildRequestBody(LoginUserSchema) },
  responses,
});

// POST /public/auth/register
registry.registerPath({
  method: 'post',
  path: '/public/auth/register',
  tags: ['Authentication'],
  summary: 'Add a new user to system',
  operationId: 'addUser',
  request: { body: buildRequestBody(AddUserSchema) },
  responses,
});

// POST /public/auth/register-verification
registry.registerPath({
  method: 'post',
  path: '/public/auth/register-verification',
  tags: ['Authentication'],
  summary: 'Check User key in the system',
  operationId: 'checkUser',
  request: { body: buildRequestBody(CheckKeySchema) },
  responses,
});

// POST /public/auth/register-activate
registry.registerPath({
  method: 'post',
  path: '/public/auth/register-activate',
  tags: ['Authentication'],
  summary: 'Activate User in the system',
  operationId: 'activateUser',
  request: { body: buildRequestBody(ActivateUserSchema) },
  responses,
});

// POST /public/auth/refresh-code
registry.registerPath({
  method: 'post',
  path: '/public/auth/refresh-code',
  tags: ['Authentication'],
  summary: 'Refresh code for the activation in the system',
  operationId: 'refreshCode',
  request: { body: buildRequestBody(CheckKeySchema) },
  responses,
});

// POST /public/auth/password-reset
registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset',
  tags: ['Authentication'],
  summary: 'User can be reset password using this api',
  operationId: 'passwordResetUser',
  request: { body: buildRequestBody(PasswordResetUserSchema) },
  responses,
});

// POST /public/auth/password-reset-complete
registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset-complete',
  tags: ['Authentication'],
  summary: 'User can be reset password for using this api',
  operationId: 'passwordResetCompleteUser',
  request: { body: buildRequestBody(PasswordResetCompleteUserSchema) },
  responses,
});
