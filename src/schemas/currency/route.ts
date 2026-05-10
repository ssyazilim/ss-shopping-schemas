import { registry } from '../registry';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

registry.registerPath({
  method: 'get',
  path: '/admin/currencies',
  tags: ['Currency'],
  summary: 'Get all currencies in the system',
  operationId: 'getCurrencies',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses,
});
