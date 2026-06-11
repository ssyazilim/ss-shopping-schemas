import { z } from 'zod';
import { registry } from '../registry';
import { AnalyzeSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

registry.registerPath({
  method: 'post',
  path: '/public/traffic/analyze',
  tags: ['Traffic'],
  summary: 'Analyze the web site traffic',
  operationId: 'analyzeTraffic',
  request: { body: buildRequestBody(AnalyzeSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/traffic/analyze-traffic',
  tags: ['Traffic'],
  summary: 'Get all visitors in the system',
  operationId: 'getTrafficsAdmin',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      startDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
      endDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/traffic/analyze-organic-traffic',
  tags: ['Traffic'],
  summary: 'Get all organic visitors in the system',
  operationId: 'getOrganicTrafficsAdmin',
  security: [{ JWT: [] }],
  request: {
    query: ListQuerySchema.extend({
      startDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
      endDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/traffic/analyze-organic-traffic',
  tags: ['Traffic'],
  summary: 'Delete a customer traffic from the system',
  operationId: 'deleteVisitor',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
