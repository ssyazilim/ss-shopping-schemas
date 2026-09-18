import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_ADDRESS, UPDATE_ADDRESS } from './validation';
import { AddressSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

const addressIdParam = z.object({
  addressId: z.string(),
});

// GET /public/addresses
registerRoute({
  method: 'get',
  path: '/public/addresses',
  tags: [API_TAGS.address.name],
  summary: 'Get an address for session user from the system',
  security: [{ JWT: [] }],
  responses: listResponse(AddressSchema),
});

// POST /public/address
registerRoute({
  method: 'post',
  path: '/public/address',
  tags: [API_TAGS.address.name],
  summary: 'Add a new address to system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_ADDRESS()) },
  responses: jsonResponse(InsertResultSchema),
});

// GET /public/address/{addressId}
registerRoute({
  method: 'get',
  path: '/public/address/{addressId}',
  tags: [API_TAGS.address.name],
  summary: 'Get an address from the system',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses: jsonResponse(AddressSchema),
});

// PATCH /public/address/{addressId}
registerRoute({
  method: 'patch',
  path: '/public/address/{addressId}',
  tags: [API_TAGS.address.name],
  summary: 'Update an address from the system',
  security: [{ JWT: [] }],
  request: {
    params: addressIdParam,
    body: buildRequestBody(UPDATE_ADDRESS()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/address/{addressId}
registerRoute({
  method: 'delete',
  path: '/public/address/{addressId}',
  tags: [API_TAGS.address.name],
  summary: 'Delete an address in the system',
  security: [{ JWT: [] }],
  request: { params: addressIdParam },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/addresses
registerRoute({
  method: 'get',
  path: '/admin/addresses',
  tags: [API_TAGS.address.name],
  summary: 'Get all user addresses in the system',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(AddressSchema),
});
