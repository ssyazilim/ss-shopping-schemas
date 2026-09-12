import { z } from 'zod';
import { registry } from '../registry';
import { ADD_CART } from './validation';
import { CartSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DateRangeQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
} from '../common';

// GET /public/cart
registry.registerPath({
  method: 'get',
  path: '/public/cart',
  tags: ['API-cart'],
  summary: 'Get a cart from the system for User',
  operationId: 'getCartWithUserId',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// POST /public/cart
registry.registerPath({
  method: 'post',
  path: '/public/cart',
  tags: ['API-cart'],
  summary: 'Add a new cart to system for User',
  operationId: 'addCart',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// DELETE /public/cart
registry.registerPath({
  method: 'delete',
  path: '/public/cart',
  tags: ['API-cart'],
  summary: 'Clear all entries of the cart for User',
  operationId: 'clearCart',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// POST /public/cart/product/update
registry.registerPath({
  method: 'post',
  path: '/public/cart/product/update',
  tags: ['API-cart'],
  summary: 'Add or remove product for cart',
  operationId: 'addToCart',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CART()) },
  responses: jsonResponse(CartSchema),
});

// GET /admin/carts
registry.registerPath({
  method: 'get',
  path: '/admin/carts',
  tags: ['API-cart'],
  summary: 'Get all carts in the system',
  operationId: 'getCarts',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema.extend(DateRangeQuerySchema.shape) },
  responses: listResponse(CartSchema),
});

// GET /admin/cart/{cartId}
registry.registerPath({
  method: 'get',
  path: '/admin/cart/{cartId}',
  tags: ['API-cart'],
  summary: 'Get a cart from the system',
  operationId: 'getCart',
  security: [{ JWT: [] }],
  request: { params: z.object({ cartId: z.string() }) },
  responses: jsonResponse(CartSchema),
});

// DELETE /admin/cart
registry.registerPath({
  method: 'delete',
  path: '/admin/cart',
  tags: ['API-cart'],
  summary: 'Delete a cart or carts in the system',
  operationId: 'deleteCarts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
