import { registry } from '../registry';
import { z } from 'zod';
import { buildRequestBody, jsonResponse } from '../common';
import { AuthTokensSchema, AuthUserSchema } from './schema';
import {
  LOGIN_USER,
  ADD_USER,
  CHECK_KEY,
  ACTIVATE_USER,
  PASSWORD_RESET,
  PASSWORD_RESET_COMPLETE,
} from './validation';

// POST /public/auth/login
registry.registerPath({
  method: 'post',
  path: '/public/auth/login',
  tags: ['API-authentication'],
  summary: 'Login process for the User in the system',
  operationId: 'loginUser',
  request: { body: buildRequestBody(LOGIN_USER()) },
  responses: jsonResponse(AuthTokensSchema),
});

// POST /public/auth/register
registry.registerPath({
  method: 'post',
  path: '/public/auth/register',
  tags: ['API-authentication'],
  summary: 'Add a new user to system',
  operationId: 'addUser',
  request: { body: buildRequestBody(ADD_USER()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/register-verification
registry.registerPath({
  method: 'post',
  path: '/public/auth/register-verification',
  tags: ['API-authentication'],
  summary: 'Check User key in the system',
  operationId: 'checkUser',
  request: { body: buildRequestBody(CHECK_KEY()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/register-activate
registry.registerPath({
  method: 'post',
  path: '/public/auth/register-activate',
  tags: ['API-authentication'],
  summary: 'Activate User in the system',
  operationId: 'activateUser',
  request: { body: buildRequestBody(ACTIVATE_USER()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/refresh-code
registry.registerPath({
  method: 'post',
  path: '/public/auth/refresh-code',
  tags: ['API-authentication'],
  summary: 'Refresh code for the activation in the system',
  operationId: 'refreshCode',
  request: { body: buildRequestBody(CHECK_KEY()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/password-reset
registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset',
  tags: ['API-authentication'],
  summary: 'User can be reset password using this api',
  operationId: 'passwordResetUser',
  request: { body: buildRequestBody(PASSWORD_RESET()) },
  responses: jsonResponse(z.email().meta({ examples: ['test@ssyazilim.com'] })),
});

// POST /public/auth/password-reset-complete
registry.registerPath({
  method: 'post',
  path: '/public/auth/password-reset-complete',
  tags: ['API-authentication'],
  summary: 'User can be reset password for using this api',
  operationId: 'passwordResetCompleteUser',
  request: { body: buildRequestBody(PASSWORD_RESET_COMPLETE()) },
  responses: jsonResponse(AuthUserSchema),
});
