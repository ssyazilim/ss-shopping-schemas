import { z } from 'zod';
import { registry } from '../registry';
import { ANALYZE } from './validation';
import { VisitorSchema, VisitorStatisticsSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DateRangeQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
} from '../common';

// POST /public/traffic/analyze
registry.registerPath({
  method: 'post',
  path: '/public/traffic/analyze',
  tags: ['API-traffic'],
  summary: 'Analyze the web site traffic',
  operationId: 'analyzeTraffic',
  request: { body: buildRequestBody(ANALYZE()) },
  responses: jsonResponse(VisitorSchema),
});

// GET /admin/traffic/analyze-traffic
registry.registerPath({
  method: 'get',
  path: '/admin/traffic/analyze-traffic',
  tags: ['API-traffic'],
  summary: 'Get all visitors in the system',
  operationId: 'getTrafficsAdmin',
  security: [{ JWT: [] }],
  request: { query: z.object({ ...DateRangeQuerySchema.shape }) },
  responses: listResponse(VisitorStatisticsSchema),
});

// GET /admin/traffic/analyze-organic-traffic
registry.registerPath({
  method: 'get',
  path: '/admin/traffic/analyze-organic-traffic',
  tags: ['API-traffic'],
  summary: 'Get all organic visitors in the system',
  operationId: 'getOrganicTrafficsAdmin',
  security: [{ JWT: [] }],
  request: {
    query: ListQuerySchema.extend({
      ...DateRangeQuerySchema.shape,
      include: z
        .string()
        .optional()
        .meta({ examples: ['staticIp,userAgent'] }),
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['ipDetails'] }),
    }),
  },
  responses: listResponse(VisitorSchema),
});

// DELETE /admin/traffic/analyze
registry.registerPath({
  method: 'delete',
  path: '/admin/traffic/analyze',
  tags: ['API-traffic'],
  summary: 'Delete a customer traffic from the system',
  operationId: 'deleteVisitor',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
