import { z } from 'zod';
import { registry } from '../registry';
import { ADD_ADDRESS, UPDATE_ADDRESS } from './validation';
import { AddressSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

const addressIdParam = z.object({
  addressId: z.string(),
});

// GET /public/addresses
registry.registerPath({
  method: 'get',
  path: '/public/addresses',
  tags: ['API-address'],
  summary: 'Get an address for session user from the system',
  operationId: 'getAddressForUser',
  security: [{ JWT: [] }],
  responses: listResponse(AddressSchema),
});

// POST /public/address
registry.registerPath({
  method: 'post',
  path: '/public/address',
  tags: ['API-address'],
  summary: 'Add a new address to system',
  operationId: 'addAddress',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_ADDRESS()) },
  responses: jsonResponse(AddressSchema),
});

// GET /public/address/{addressId}
registry.registerPath({
  method: 'get',
  path: '/public/address/{addressId}',
  tags: ['API-address'],
  summary: 'Get an address from the system',
  operationId: 'getAddress',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses: jsonResponse(AddressSchema),
});

// PATCH /public/address/{addressId}
registry.registerPath({
  method: 'patch',
  path: '/public/address/{addressId}',
  tags: ['API-address'],
  summary: 'Update an address from the system',
  operationId: 'updateAddress',
  security: [{ JWT: [] }],
  request: {
    params: addressIdParam,
    body: buildRequestBody(UPDATE_ADDRESS()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/address/{addressId}
registry.registerPath({
  method: 'delete',
  path: '/public/address/{addressId}',
  tags: ['API-address'],
  summary: 'Delete an address in the system',
  operationId: 'deleteAddress',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/addresses
registry.registerPath({
  method: 'get',
  path: '/admin/addresses',
  tags: ['API-address'],
  summary: 'Get all user addresses in the system',
  operationId: 'getAddresses',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(AddressSchema),
});
