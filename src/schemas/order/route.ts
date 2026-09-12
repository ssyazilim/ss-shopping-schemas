import { z } from 'zod';
import { registry } from '../registry';
import { SaveOrderSchema, EditOrderSchema, OrderModel } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  DateRangeQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
} from '../common';

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
registry.registerPath({
  method: 'get',
  path: '/public/order/{orderId}',
  tags: ['API-order'],
  summary: 'Get order in the system',
  operationId: 'getPublicOrder',
  request: {
    params: z.object({
      orderId: z.string(),
    }),
  },
  responses: jsonResponse(OrderModel),
});

// GET /public/order
registry.registerPath({
  method: 'get',
  path: '/public/order',
  tags: ['API-order'],
  summary: 'Get User order in system',
  operationId: 'getOrder',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyHeaders,
    query: z.object({
      orderId: z.string().optional(),
      paymentId: z.string().optional(),
    }),
  },
  responses: jsonResponse(OrderModel),
});

// POST /public/order
registry.registerPath({
  method: 'post',
  path: '/public/order',
  tags: ['API-order'],
  summary: 'Save order to the system',
  operationId: 'saveOrder',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyHeaders, body: buildRequestBody(SaveOrderSchema) },
  responses: jsonResponse(OrderModel),
});

// GET /public/orders
registry.registerPath({
  method: 'get',
  path: '/public/orders',
  tags: ['API-order'],
  summary: 'Get User Orders in the system',
  operationId: 'getOrdersForTheUser',
  security: [{ JWT: [] }],
  responses: listResponse(OrderModel),
});

// GET /admin/orders
registry.registerPath({
  method: 'get',
  path: '/admin/orders',
  tags: ['API-order'],
  summary: 'Get all orders in the system',
  operationId: 'getOrdersAdmin',
  security: [{ JWT: [] }],
  request: { query: OrderListQuerySchema },
  responses: listResponse(OrderModel),
});

// UPDATE /admin/order/{id}
registry.registerPath({
  method: 'patch',
  path: '/admin/order/{id}',
  tags: ['API-order'],
  summary: 'Update order in the system',
  operationId: 'updateOrder',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ id: z.string() }),
    body: buildRequestBody(EditOrderSchema),
  },
  responses: jsonResponse(OrderModel),
});

// DELETE /admin/orders
registry.registerPath({
  method: 'delete',
  path: '/admin/orders',
  tags: ['API-order'],
  summary: 'Delete a order or orders in the system',
  operationId: 'deleteOrders',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
