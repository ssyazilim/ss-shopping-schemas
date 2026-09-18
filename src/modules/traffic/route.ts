import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ANALYZE } from './validation';
import { VisitorSchema, VisitorStatisticsSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DateRangeQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
} from '../../utils/common';

// POST /public/traffic/analyze
registerRoute({
  method: 'post',
  path: '/public/traffic/analyze',
  tags: [API_TAGS.traffic.name],
  summary: 'Analyze the web site traffic',
  request: { body: buildRequestBody(ANALYZE()) },
  responses: jsonResponse(InsertResultSchema),
});

// GET /admin/traffic/analyze-traffic
registerRoute({
  method: 'get',
  path: '/admin/traffic/analyze-traffic',
  tags: [API_TAGS.traffic.name],
  summary: 'Get all visitors in the system',
  security: [{ JWT: [] }],
  request: { query: z.object({ ...DateRangeQuerySchema.shape }) },
  responses: listResponse(VisitorStatisticsSchema),
});

// GET /admin/traffic/analyze-organic-traffic
registerRoute({
  method: 'get',
  path: '/admin/traffic/analyze-organic-traffic',
  tags: [API_TAGS.traffic.name],
  summary: 'Get all organic visitors in the system',
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
registerRoute({
  method: 'delete',
  path: '/admin/traffic/analyze',
  tags: [API_TAGS.traffic.name],
  summary: 'Delete a customer traffic from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
