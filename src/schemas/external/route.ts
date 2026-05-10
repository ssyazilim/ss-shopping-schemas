import { z } from 'zod';
import { registry } from '../registry';
import { AddExternalSchema, UpdateExternalSchema, CheckSMTPSchema } from './schema';
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
  path: '/admin/external',
  tags: ['External'],
  summary: 'Get external service configuration',
  operationId: 'getExternal',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/external',
  tags: ['External'],
  summary: 'Add external service configuration',
  operationId: 'addExternal',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddExternalSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/external',
  tags: ['External'],
  summary: 'Update external service configuration',
  operationId: 'updateExternal',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UpdateExternalSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/external/check-smtp',
  tags: ['External'],
  summary: 'Check SMTP configuration',
  operationId: 'checkSMTP',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CheckSMTPSchema) },
  responses,
});
