import { z } from 'zod';
import { registry } from '../registry';
import { EditUserSchema, DeleteUserSchema, CustomerSchema, UpdateCustomerSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

// GET /public/user/{userId}
registry.registerPath({
  method: 'get',
  path: '/public/user/{userId}',
  tags: ['User'],
  summary: 'Get a user from the system',
  operationId: 'getUser',
  request: { params: z.object({ userId: z.string() }) },
  responses,
});

// PATCH /public/user
registry.registerPath({
  method: 'patch',
  path: '/public/user',
  tags: ['User'],
  summary: 'Edit user information',
  operationId: 'editUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(EditUserSchema) },
  responses,
});

// DELETE /public/user
registry.registerPath({
  method: 'delete',
  path: '/public/user',
  tags: ['User'],
  summary: 'Delete user account',
  operationId: 'deleteUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteUserSchema) },
  responses,
});

// GET /admin/users
registry.registerPath({
  method: 'get',
  path: '/admin/users',
  tags: ['User'],
  summary: 'Get all users in the system',
  operationId: 'getUsers',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses,
});

// POST /admin/user
registry.registerPath({
  method: 'post',
  path: '/admin/user',
  tags: ['User'],
  summary: 'Add a customer to the system',
  operationId: 'addCustomer',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CustomerSchema) },
  responses,
});

// DELETE /admin/user
registry.registerPath({
  method: 'delete',
  path: '/admin/user',
  tags: ['User'],
  summary: 'Delete customers from the system',
  operationId: 'deleteCustomer',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

// PATCH /admin/user/{userId}
registry.registerPath({
  method: 'patch',
  path: '/admin/user/{userId}',
  tags: ['User'],
  summary: 'Update a customer in the system',
  operationId: 'updateCustomer',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string() }),
    body: buildRequestBody(UpdateCustomerSchema),
  },
  responses,
});
