import { z } from 'zod';

import { registry } from '../registry';
import { SavePaymentSchema } from './schema';
import { responses, buildRequestBody, DeleteModelSchema } from '../common';

// GET /public-key/payment
registry.registerPath({
  method: 'get',
  path: '/public-key/payment',
  tags: ['Payment'],
  summary: 'Get User payment in system',
  operationId: 'getPayment',
  security: [{ 'X-API-KEY': [] }],
  request: {
    query: z.object({
      orderId: z.string().optional(),
      paymentId: z.string().optional(),
      orderToken: z.string().optional(),
    }),
  },
  responses,
});

// POST /public-key/payment
registry.registerPath({
  method: 'post',
  path: '/public-key/payment',
  tags: ['Payment'],
  summary: 'Save payment result to the system',
  operationId: 'savePayment',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(SavePaymentSchema) },
  responses,
});

// GET /public/payments
registry.registerPath({
  method: 'get',
  path: '/public/payments',
  tags: ['Payment'],
  summary: 'Get User Payments in the system',
  operationId: 'getPaymentsForTheUser',
  security: [{ JWT: [] }],
  responses,
});

// GET /admin/payments
registry.registerPath({
  method: 'get',
  path: '/admin/payments',
  tags: ['Payment'],
  summary: 'Get all payments in the system',
  operationId: 'getPaymentsAdmin',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      page: z
        .number()
        .int()
        .optional()
        .meta({ examples: [1] }),
      limit: z
        .number()
        .int()
        .optional()
        .meta({ examples: [10] }),
      sort: z.string().meta({ examples: ['updatedAt,desc'] }),
      text: z.string().optional(),
      startDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
      endDate: z
        .string()
        .optional()
        .meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
      status: z
        .string()
        .optional()
        .meta({ examples: ['pending'] }),
    }),
  },
  responses,
});

// DELETE /admin/payments
registry.registerPath({
  method: 'delete',
  path: '/admin/payments',
  tags: ['Payment'],
  summary: 'Delete a payment or payments in the system',
  operationId: 'deletePayments',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
