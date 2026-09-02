import { z } from 'zod';
import { registry } from '../registry';
import { UpdateModuleSchema } from './schema';
import { responses, buildRequestBody } from '../common';

// GET /public/module
registry.registerPath({
  method: 'get',
  path: '/public/module',
  tags: ['API-module'],
  summary: 'Get modules in the system',
  operationId: 'getModules',
  responses,
});

// GET /public/module/{key}
registry.registerPath({
  method: 'get',
  path: '/public/module/{key}',
  tags: ['API-module'],
  summary: 'Get a module by key in the system',
  operationId: 'getModuleByKey',
  request: { params: z.object({ key: z.string() }) },
  responses,
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
    params: z.object({ key: z.string() }),
    body: buildRequestBody(UpdateModuleSchema),
  },
  responses,
});
