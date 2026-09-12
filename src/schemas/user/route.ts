import { z } from 'zod';
import { registry } from '../registry';
import {
  EditUserSchema,
  DeleteUserSchema,
  CustomerSchema,
  UpdateCustomerSchema,
  UserModel,
} from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
} from '../common';

// GET /public/user/{userId}
registry.registerPath({
  method: 'get',
  path: '/public/user/{userId}',
  tags: ['API-user'],
  summary: 'Get a user from the system',
  operationId: 'getUser',
  request: { params: z.object({ userId: z.string() }) },
  responses: jsonResponse(UserModel),
});

// PATCH /public/user
registry.registerPath({
  method: 'patch',
  path: '/public/user',
  tags: ['API-user'],
  summary: 'Edit user information',
  operationId: 'editUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(EditUserSchema) },
  responses: jsonResponse(UserModel),
});

// DELETE /public/user
registry.registerPath({
  method: 'delete',
  path: '/public/user',
  tags: ['API-user'],
  summary: 'Delete user account',
  operationId: 'deleteUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteUserSchema) },
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
  responses: listResponse(UserModel),
});

// POST /admin/user
registry.registerPath({
  method: 'post',
  path: '/admin/user',
  tags: ['API-user'],
  summary: 'Add a customer to the system',
  operationId: 'addCustomer',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CustomerSchema) },
  responses: jsonResponse(UserModel),
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
    body: buildRequestBody(UpdateCustomerSchema),
  },
  responses: jsonResponse(UserModel),
});
