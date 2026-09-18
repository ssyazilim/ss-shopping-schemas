import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_CUSTOMER, DELETE_USER, EDIT_USER, UPDATE_CUSTOMER } from './validation';
import { UserSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/user/{userId}
registerRoute({
  method: 'get',
  path: '/public/user/{userId}',
  tags: [API_TAGS.user.name],
  summary: 'Get a user from the system',
  request: { params: z.object({ userId: z.string() }) },
  responses: listResponse(UserSchema),
});

// PATCH /public/user
registerRoute({
  method: 'patch',
  path: '/public/user',
  tags: [API_TAGS.user.name],
  summary: 'Edit user information',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(EDIT_USER()) },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/user
registerRoute({
  method: 'delete',
  path: '/public/user',
  tags: [API_TAGS.user.name],
  summary: 'Delete user account',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_USER()) },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/users
registerRoute({
  method: 'get',
  path: '/admin/users',
  tags: [API_TAGS.user.name],
  summary: 'Get all users in the system',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(UserSchema),
});

// POST /admin/user
registerRoute({
  method: 'post',
  path: '/admin/user',
  tags: [API_TAGS.user.name],
  summary: 'Add a customer to the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CUSTOMER()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/user
registerRoute({
  method: 'delete',
  path: '/admin/user',
  tags: [API_TAGS.user.name],
  summary: 'Delete customers from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/user/{userId}
registerRoute({
  method: 'patch',
  path: '/admin/user/{userId}',
  tags: [API_TAGS.user.name],
  summary: 'Update a customer in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string() }),
    body: buildRequestBody(UPDATE_CUSTOMER()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
