import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { SAVE_ORDER, UPDATE_ORDER } from './validation';
import { OrderSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  DateRangeQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

const apiKeyHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
});

const OrderListQuerySchema = ListQuerySchema.extend({
  ...DateRangeQuerySchema.shape,
  status: z
    .string()
    .optional()
    .meta({ examples: ['pending'] }),
});

// GET /public/order/{orderId}
registerRoute({
  method: 'get',
  path: '/public/order/{orderId}',
  tags: [API_TAGS.order.name],
  summary: 'Get order in the system',
  request: {
    params: z.object({
      orderId: z.string(),
    }),
  },
  responses: jsonResponse(OrderSchema),
});

// GET /public/order
registerRoute({
  method: 'get',
  path: '/public/order',
  tags: [API_TAGS.order.name],
  summary: 'Get User order in system',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyHeaders,
    query: z.object({
      orderId: z.string().optional(),
      paymentId: z.string().optional(),
    }),
  },
  responses: jsonResponse(OrderSchema),
});

// POST /public/order
registerRoute({
  method: 'post',
  path: '/public/order',
  tags: [API_TAGS.order.name],
  summary: 'Save order to the system',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyHeaders, body: buildRequestBody(SAVE_ORDER()) },
  responses: jsonResponse(OrderSchema),
});

// GET /public/orders
registerRoute({
  method: 'get',
  path: '/public/orders',
  tags: [API_TAGS.order.name],
  summary: 'Get User Orders in the system',
  security: [{ JWT: [] }],
  request: {
    query: ListQuerySchema.extend({
      status: z
        .string()
        .optional()
        .meta({ examples: ['pending'] }),
    }),
  },
  responses: listResponse(OrderSchema),
});

// GET /admin/orders
registerRoute({
  method: 'get',
  path: '/admin/orders',
  tags: [API_TAGS.order.name],
  summary: 'Get all orders in the system',
  security: [{ JWT: [] }],
  request: { query: OrderListQuerySchema },
  responses: listResponse(OrderSchema),
});

// UPDATE /admin/order/{id}
registerRoute({
  method: 'patch',
  path: '/admin/order/{id}',
  tags: [API_TAGS.order.name],
  summary: 'Update order in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ id: z.string() }),
    body: buildRequestBody(UPDATE_ORDER()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /admin/orders
registerRoute({
  method: 'delete',
  path: '/admin/orders',
  tags: [API_TAGS.order.name],
  summary: 'Delete a order or orders in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
