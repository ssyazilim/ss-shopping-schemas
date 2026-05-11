import { z } from 'zod';
import { registry } from '../registry';
import { AddCardSchema } from './schema';
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
  path: '/public/check-card/{userKey}',
  tags: ['Card'],
  summary: 'Get a special card for the user',
  operationId: 'getCardWithDetail',
  security: [{ JWT: [] }],
  request: { params: z.object({ userKey: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/card',
  tags: ['Card'],
  summary: 'Get a user card tokens in the system',
  operationId: 'getCard',
  security: [{ JWT: [] }],
  request: { params: z.object({ userKey: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/card',
  tags: ['Card'],
  summary: 'Add a new card to the system',
  operationId: 'addCard',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCardSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/cards',
  tags: ['Card'],
  summary: 'Get all cards for the user',
  operationId: 'getCards',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/public/card/{cardId}',
  tags: ['Card'],
  summary: 'Delete a card from the system',
  operationId: 'deleteCard',
  security: [{ JWT: [] }],
  request: { params: z.object({ cardId: z.string() }) },
  responses,
});
