import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
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
} from '../../utils/common';

// GET /public/cart
registerRoute({
  method: 'get',
  path: '/public/cart',
  tags: [API_TAGS.cart.name],
  summary: 'Get a cart from the system for User',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// POST /public/cart
registerRoute({
  method: 'post',
  path: '/public/cart',
  tags: [API_TAGS.cart.name],
  summary: 'Add a new cart to system for User',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// DELETE /public/cart
registerRoute({
  method: 'delete',
  path: '/public/cart',
  tags: [API_TAGS.cart.name],
  summary: 'Clear all entries of the cart for User',
  security: [{ JWT: [] }],
  responses: jsonResponse(CartSchema),
});

// POST /public/cart/product/update
registerRoute({
  method: 'post',
  path: '/public/cart/product/update',
  tags: [API_TAGS.cart.name],
  summary: 'Add or remove product for cart',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CART()) },
  responses: jsonResponse(CartSchema),
});

// GET /admin/carts
registerRoute({
  method: 'get',
  path: '/admin/carts',
  tags: [API_TAGS.cart.name],
  summary: 'Get all carts in the system',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema.extend(DateRangeQuerySchema.shape) },
  responses: listResponse(CartSchema),
});

// GET /admin/cart/{cartId}
registerRoute({
  method: 'get',
  path: '/admin/cart/{cartId}',
  tags: [API_TAGS.cart.name],
  summary: 'Get a cart from the system',
  security: [{ JWT: [] }],
  request: { params: z.object({ cartId: z.string() }) },
  responses: jsonResponse(CartSchema),
});

// DELETE /admin/cart
registerRoute({
  method: 'delete',
  path: '/admin/cart',
  tags: [API_TAGS.cart.name],
  summary: 'Delete a cart or carts in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
