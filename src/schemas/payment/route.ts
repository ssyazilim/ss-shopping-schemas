import { z } from 'zod';

import { registry } from '../registry';
import {
  AddPaymentSchema,
  CheckHTMLForIyzicoSchema,
  CheckInstallmentSchema,
  CompletePayment3DSchema,
  SavePaymentSchema,
  CancelPaymentSchema,
} from './schema';
import { AddCardSchema } from '../card/schema';
import { responses, buildRequestBody, DeleteModelSchema } from '../common';

registry.registerPath({
  method: 'get',
  path: '/public/payment',
  tags: ['Payment'],
  summary: 'Get User payment in system',
  operationId: 'getPayment',
  request: {
    query: z.object({
      orderId: z.string().optional(),
      orderToken: z.string().optional(),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment',
  tags: ['Payment'],
  summary: 'Save payment result to the system',
  operationId: 'savePayment',
  request: { body: buildRequestBody(SavePaymentSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/payment/check/{paymentId}',
  tags: ['Payment'],
  summary: 'Check payment for the IYZICO Service',
  operationId: 'checkPaymentId',
  request: {
    params: z.object({ paymentId: z.string() }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/IYZICO/{locale}',
  tags: ['Payment'],
  summary: 'Check HTML Code for IYZICO Service',
  operationId: 'checkHTMLCodeForIYZICO',
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(CheckHTMLForIyzicoSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/IYZICO/{token}/{locale}',
  tags: ['Payment'],
  summary: 'Complete payment for IYZICO Service',
  operationId: 'completePaymentForIyzico',
  request: {
    params: z.object({
      token: z.string(),
      locale: z.enum(['en', 'tr']).default('tr'),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/payments',
  tags: ['Payment'],
  summary: 'Get User Payments in the system',
  operationId: 'getPaymentsForTheUser',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/{locale}',
  tags: ['Payment'],
  summary: 'Add payment to the IYZICO Service',
  operationId: 'paymentForUser',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(AddPaymentSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/3D/{locale}',
  tags: ['Payment'],
  summary: 'Check HTML Code for the 3D Service',
  operationId: 'check3DForUser',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(AddPaymentSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/3D/{paymentId}/{locale}',
  tags: ['Payment'],
  summary: 'Complete payment for 3D Service',
  operationId: 'completePayment3DForIyzico',
  security: [{ JWT: [] }],
  request: {
    params: z.object({
      paymentId: z.string(),
      locale: z.enum(['en', 'tr']).default('tr'),
    }),
    body: buildRequestBody(CompletePayment3DSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/check/card',
  tags: ['Payment'],
  summary: 'Check card from IYZICO system',
  operationId: 'checkCard',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCardSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/check/installment',
  tags: ['Payment'],
  summary: 'Check installment for the IYZICO Service',
  operationId: 'installmentForUser',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CheckInstallmentSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/cancel/{locale}',
  tags: ['Payment'],
  summary: 'Cancel payment for the suddenly payment',
  operationId: 'cancelPayment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(CancelPaymentSchema),
  },
  responses,
});

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
