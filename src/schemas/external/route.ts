import { z } from 'zod';
import { registry } from '../registry';
import { AddExternalSchema, UpdateExternalSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
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
  path: '/public/external',
  tags: ['External'],
  summary: 'Get external services in the system',
  operationId: 'getExternal',
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/external/{key}',
  tags: ['External'],
  summary: 'Get external service key in the system',
  operationId: 'getExternalKey',
  request: { params: z.object({ key: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/external',
  tags: ['External'],
  summary: 'Add a new external to the system',
  operationId: 'addExternal',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddExternalSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/external/{externalId}',
  tags: ['External'],
  summary: 'Update a external to the system',
  operationId: 'updateExternal',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ externalId: z.string() }),
    body: buildRequestBody(UpdateExternalSchema),
  },
  responses,
});
