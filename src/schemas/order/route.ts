import { z } from 'zod';
import { registry } from '../registry';
import { OrderSchema, EditOrderSchema } from './schema';
import {
  responses,
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  DateRangeQuerySchema,
} from '../common';

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
  tags: ['Order'],
  summary: 'Get order in the system',
  operationId: 'getPublicOrder',
  request: {
    params: z.object({
      orderId: z.string(),
    }),
  },
  responses,
});

// GET /public-key/order
registry.registerPath({
  method: 'get',
  path: '/public-key/order',
  tags: ['Order'],
  summary: 'Get User order in system',
  operationId: 'getOrder',
  security: [{ 'X-API-KEY': [] }],
  request: {
    query: z.object({
      orderId: z.string().optional(),
      paymentId: z.string().optional(),
    }),
  },
  responses,
});

// POST /public-key/order
registry.registerPath({
  method: 'post',
  path: '/public-key/order',
  tags: ['Order'],
  summary: 'Save order to the system',
  operationId: 'saveOrder',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(OrderSchema) },
  responses,
});

// GET /public/orders
registry.registerPath({
  method: 'get',
  path: '/public/orders',
  tags: ['Order'],
  summary: 'Get User Orders in the system',
  operationId: 'getOrdersForTheUser',
  security: [{ JWT: [] }],
  responses,
});

// GET /admin/orders
registry.registerPath({
  method: 'get',
  path: '/admin/orders',
  tags: ['Order'],
  summary: 'Get all orders in the system',
  operationId: 'getOrdersAdmin',
  security: [{ JWT: [] }],
  request: { query: OrderListQuerySchema },
  responses,
});

// UPDATE /admin/order/{id}
registry.registerPath({
  method: 'patch',
  path: '/admin/order/{id}',
  tags: ['Order'],
  summary: 'Update order in the system',
  operationId: 'updateOrder',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ id: z.string() }),
    body: buildRequestBody(EditOrderSchema),
  },
  responses,
});

// DELETE /admin/orders
registry.registerPath({
  method: 'delete',
  path: '/admin/orders',
  tags: ['Order'],
  summary: 'Delete a order or orders in the system',
  operationId: 'deleteOrders',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
