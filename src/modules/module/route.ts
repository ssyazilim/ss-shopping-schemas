import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { UPDATE_MODULE } from './validation';
import {
  buildRequestBody,
  jsonResponse,
  ListQuerySchema,
  UpdateResultSchema,
} from '../../utils/common';

const encryptedPayload = z
  .string()
  .meta({ description: 'AES encrypted JSON payload, decrypt it with the shared project key' });

// GET /public/modules
registerRoute({
  method: 'get',
  path: '/public/modules',
  tags: [API_TAGS.module.name],
  summary: 'Get modules in the system',
  security: [{ 'X-API-KEY': [] }],
  request: {
    query: ListQuerySchema.extend({
      type: z.string().optional(),
    }),
  },
  responses: jsonResponse(encryptedPayload),
});

// GET /public/module/{key}
registerRoute({
  method: 'get',
  path: '/public/module/{key}',
  tags: [API_TAGS.module.name],
  summary: 'Get a module by key in the system',
  security: [{ 'X-API-KEY': [] }],
  request: { params: z.object({ key: z.string().meta({ examples: ['geliver'] }) }) },
  responses: jsonResponse(encryptedPayload),
});

// PATCH /admin/module/{key}
registerRoute({
  method: 'patch',
  path: '/admin/module/{key}',
  tags: [API_TAGS.module.name],
  summary: 'Update a module in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ key: z.string().meta({ examples: ['geliver'] }) }),
    body: buildRequestBody(UPDATE_MODULE()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
