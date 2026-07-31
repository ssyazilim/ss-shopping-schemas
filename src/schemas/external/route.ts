import { z } from 'zod';
import { registry } from '../registry';
import { AddExternalSchema, UpdateExternalSchema } from './schema';
import { responses, buildRequestBody } from '../common';

// GET /public/external
registry.registerPath({
  method: 'get',
  path: '/public/external',
  tags: ['External'],
  summary: 'Get external services in the system',
  operationId: 'getExternal',
  responses,
});

// GET /public/external/{key}
registry.registerPath({
  method: 'get',
  path: '/public/external/{key}',
  tags: ['External'],
  summary: 'Get external service key in the system',
  operationId: 'getExternalKey',
  request: { params: z.object({ key: z.string() }) },
  responses,
});

// POST /admin/external
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

// PATCH /admin/external/{externalId}
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
