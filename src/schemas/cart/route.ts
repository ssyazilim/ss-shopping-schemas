import { z } from 'zod';
import { registry } from '../registry';
import { AddToCartSchema, SetQuantitySchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DateRangeQuerySchema } from '../common';

// GET /public/cart
registry.registerPath({
  method: 'get',
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Get a cart from the system for User',
  operationId: 'getCartWithUserId',
  security: [{ JWT: [] }],
  responses,
});

// POST /public/cart
registry.registerPath({
  method: 'post',
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Add a new cart to system for User',
  operationId: 'addCart',
  security: [{ JWT: [] }],
  responses,
});

// POST /public/cart/product/update
registry.registerPath({
  method: 'post',
  path: '/public/cart/product/update',
  tags: ['Cart'],
  summary: 'Add or remove product for cart',
  operationId: 'addToCart',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddToCartSchema) },
  responses,
});

// POST /public/cart/set-quantity
registry.registerPath({
  method: 'post',
  path: '/public/cart/set-quantity',
  tags: ['Cart'],
  summary: 'Set quantity for product or variant',
  operationId: 'setQuantity',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetQuantitySchema) },
  responses,
});

// GET /admin/carts
registry.registerPath({
  method: 'get',
  path: '/admin/carts',
  tags: ['Cart'],
  summary: 'Get all carts in the system',
  operationId: 'getCarts',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema.extend(DateRangeQuerySchema.shape) },
  responses,
});

// GET /admin/cart/{cartId}
registry.registerPath({
  method: 'get',
  path: '/admin/cart/{cartId}',
  tags: ['Cart'],
  summary: 'Get a cart from the system',
  operationId: 'getCart',
  security: [{ JWT: [] }],
  request: { params: z.object({ cartId: z.string() }) },
  responses,
});
