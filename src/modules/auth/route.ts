import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { z } from 'zod';
import { buildRequestBody, jsonResponse } from '../../utils/common';
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
registerRoute({
  method: 'post',
  path: '/public/auth/login',
  tags: [API_TAGS.authentication.name],
  summary: 'Login process for the User in the system',
  request: { body: buildRequestBody(LOGIN_USER()) },
  responses: jsonResponse(AuthTokensSchema),
});

// POST /public/auth/register
registerRoute({
  method: 'post',
  path: '/public/auth/register',
  tags: [API_TAGS.authentication.name],
  summary: 'Add a new user to system',
  request: { body: buildRequestBody(ADD_USER()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/register-verification
registerRoute({
  method: 'post',
  path: '/public/auth/register-verification',
  tags: [API_TAGS.authentication.name],
  summary: 'Check User key in the system',
  request: { body: buildRequestBody(CHECK_KEY()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/register-activate
registerRoute({
  method: 'post',
  path: '/public/auth/register-activate',
  tags: [API_TAGS.authentication.name],
  summary: 'Activate User in the system',
  request: { body: buildRequestBody(ACTIVATE_USER()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/refresh-code
registerRoute({
  method: 'post',
  path: '/public/auth/refresh-code',
  tags: [API_TAGS.authentication.name],
  summary: 'Refresh code for the activation in the system',
  request: { body: buildRequestBody(CHECK_KEY()) },
  responses: jsonResponse(AuthUserSchema),
});

// POST /public/auth/password-reset
registerRoute({
  method: 'post',
  path: '/public/auth/password-reset',
  tags: [API_TAGS.authentication.name],
  summary: 'User can be reset password using this api',
  request: { body: buildRequestBody(PASSWORD_RESET()) },
  responses: jsonResponse(z.email().meta({ examples: ['test@ssyazilim.com'] })),
});

// POST /public/auth/password-reset-complete
registerRoute({
  method: 'post',
  path: '/public/auth/password-reset-complete',
  tags: [API_TAGS.authentication.name],
  summary: 'User can be reset password for using this api',
  request: { body: buildRequestBody(PASSWORD_RESET_COMPLETE()) },
  responses: jsonResponse(AuthUserSchema),
});
