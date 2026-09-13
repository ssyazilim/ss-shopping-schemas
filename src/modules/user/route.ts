import { z } from 'zod';
import { registry } from '../registry';
import { ADD_CUSTOMER, DELETE_USER, EDIT_USER, UPDATE_CUSTOMER } from './validation';
import { UserSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/user/{userId}
registry.registerPath({
  method: 'get',
  path: '/public/user/{userId}',
  tags: ['API-user'],
  summary: 'Get a user from the system',
  operationId: 'getUser',
  request: { params: z.object({ userId: z.string() }) },
  responses: listResponse(UserSchema),
});

// PATCH /public/user
registry.registerPath({
  method: 'patch',
  path: '/public/user',
  tags: ['API-user'],
  summary: 'Edit user information',
  operationId: 'editUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(EDIT_USER()) },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/user
registry.registerPath({
  method: 'delete',
  path: '/public/user',
  tags: ['API-user'],
  summary: 'Delete user account',
  operationId: 'deleteUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_USER()) },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/users
registry.registerPath({
  method: 'get',
  path: '/admin/users',
  tags: ['API-user'],
  summary: 'Get all users in the system',
  operationId: 'getUsers',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(UserSchema),
});

// POST /admin/user
registry.registerPath({
  method: 'post',
  path: '/admin/user',
  tags: ['API-user'],
  summary: 'Add a customer to the system',
  operationId: 'addCustomer',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CUSTOMER()) },
  responses: jsonResponse(UserSchema),
});

// DELETE /admin/user
registry.registerPath({
  method: 'delete',
  path: '/admin/user',
  tags: ['API-user'],
  summary: 'Delete customers from the system',
  operationId: 'deleteCustomer',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/user/{userId}
registry.registerPath({
  method: 'patch',
  path: '/admin/user/{userId}',
  tags: ['API-user'],
  summary: 'Update a customer in the system',
  operationId: 'updateCustomer',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string() }),
    body: buildRequestBody(UPDATE_CUSTOMER()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
