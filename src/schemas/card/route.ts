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
  path: '/public/cards',
  tags: ['Card'],
  summary: 'Get all cards for the user',
  operationId: 'getCards',
  security: [{ JWT: [] }],
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
  method: 'delete',
  path: '/public/card/{cardToken}',
  tags: ['Card'],
  summary: 'Delete a card from the system',
  operationId: 'deleteCard',
  security: [{ JWT: [] }],
  request: { params: z.object({ cardToken: z.string() }) },
  responses,
});
