import { z } from 'zod';
import { registry } from '../registry';
import { UPDATE_MODULE } from './validation';
import { buildRequestBody, jsonResponse, ListQuerySchema, UpdateResultSchema } from '../common';

const encryptedPayload = z
  .string()
  .meta({ description: 'AES encrypted JSON payload, decrypt it with the shared project key' });

// GET /public/modules
registry.registerPath({
  method: 'get',
  path: '/public/modules',
  tags: ['API-module'],
  summary: 'Get modules in the system',
  operationId: 'getModules',
  security: [{ 'X-API-KEY': [] }],
  request: {
    query: ListQuerySchema.extend({
      type: z
        .string()
        .optional()
        .meta({ examples: ['payment'] }),
    }),
  },
  responses: jsonResponse(encryptedPayload),
});

// GET /public/module/{key}
registry.registerPath({
  method: 'get',
  path: '/public/module/{key}',
  tags: ['API-module'],
  summary: 'Get a module by key in the system',
  operationId: 'getModuleByKey',
  security: [{ 'X-API-KEY': [] }],
  request: { params: z.object({ key: z.string().meta({ examples: ['geliver'] }) }) },
  responses: jsonResponse(encryptedPayload),
});

// PATCH /admin/module/{key}
registry.registerPath({
  method: 'patch',
  path: '/admin/module/{key}',
  tags: ['API-module'],
  summary: 'Update a module in the system',
  operationId: 'updateModule',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ key: z.string().meta({ examples: ['geliver'] }) }),
    body: buildRequestBody(UPDATE_MODULE()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
