import { z } from 'zod';
import { registry } from '../registry';
import { AddAddressSchema, UpdateAddressSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema } from '../common';

const addressIdParam = z.object({
  addressId: z.string(),
});

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

function buildRequestBody(schema: typeof AddAddressSchema | typeof UpdateAddressSchema) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

// GET /public/address
registry.registerPath({
  method: 'get',
  path: '/public/address',
  tags: ['Address'],
  summary: 'Get an address for session user from the system',
  operationId: 'getAddressForUser',
  security: [{ JWT: [] }],
  responses,
});

// POST /public/address
registry.registerPath({
  method: 'post',
  path: '/public/address',
  tags: ['Address'],
  summary: 'Add a new address to system',
  operationId: 'addAddress',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddAddressSchema) },
  responses,
});

// GET /public/address/:addressId
registry.registerPath({
  method: 'get',
  path: '/public/address/{addressId}',
  tags: ['Address'],
  summary: 'Get an address from the system',
  operationId: 'getAddress',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses,
});

// PATCH /public/address/:addressId
registry.registerPath({
  method: 'patch',
  path: '/public/address/{addressId}',
  tags: ['Address'],
  summary: 'Update an address from the system',
  operationId: 'updateAddress',
  security: [{ JWT: [] }],
  request: {
    params: addressIdParam,
    body: buildRequestBody(UpdateAddressSchema),
  },
  responses,
});

// DELETE /public/address/:addressId
registry.registerPath({
  method: 'delete',
  path: '/public/address/{addressId}',
  tags: ['Address'],
  summary: 'Delete an address in the system',
  operationId: 'deleteAddress',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses,
});

// GET /admin/addresses
registry.registerPath({
  method: 'get',
  path: '/admin/addresses',
  tags: ['Address'],
  summary: 'Get all user addresses in the system',
  operationId: 'getAddresses',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses,
});
