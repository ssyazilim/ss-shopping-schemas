import { z } from 'zod';
import { registry } from '../registry';
import {
  EditUserSchema,
  DeleteUserSchema,
  CustomerSchema,
  AddCustomersSchema,
  UpdateCustomerSchema,
} from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/public/user/{userId}',
  tags: ['User'],
  summary: 'Get a user from the system',
  operationId: 'getUser',
  request: { params: z.object({ userId: z.string() }) },
  responses,
});

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

registry.registerPath({
  method: 'post',
  path: '/admin/users',
  tags: ['User'],
  summary: 'Add customers to the system (JSON or CSV)',
  operationId: 'addCustomers',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCustomersSchema) },
  responses,
});

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
