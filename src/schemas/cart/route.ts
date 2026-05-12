import { z } from 'zod';
import { registry } from '../registry';
import { AddToCartSchema, SetQuantitySchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DateRangeQuerySchema } from '../common';

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
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Get a cart from the system for User',
  operationId: 'getCartWithUserId',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Add a new cart to system for User',
  operationId: 'addCart',
  security: [{ JWT: [] }],
  responses,
});

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
