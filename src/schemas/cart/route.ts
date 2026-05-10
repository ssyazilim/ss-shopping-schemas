import { z } from 'zod';
import { registry } from '../registry';
import { AddToCartSchema, SetQuantitySchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

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
  summary: 'Get cart for the user',
  operationId: 'getCart',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Add a product to cart',
  operationId: 'addToCart',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddToCartSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/public/cart',
  tags: ['Cart'],
  summary: 'Update cart item quantity',
  operationId: 'setQuantity',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SetQuantitySchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/public/cart/{cartId}',
  tags: ['Cart'],
  summary: 'Remove an item from cart',
  operationId: 'deleteCartItem',
  security: [{ JWT: [] }],
  request: { params: z.object({ cartId: z.string() }) },
  responses,
});
