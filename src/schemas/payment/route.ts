import { z } from 'zod';
import { registry } from '../registry';
import {
  AddPaymentSchema,
  CheckHTMLForIyzicoSchema,
  CheckInstallmentSchema,
  CompletePayment3DSchema,
  SavePaymentSchema,
  CancelPaymentSchema,
  UpdateTaxSchema,
} from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/admin/payments',
  tags: ['Payment'],
  summary: 'Get all payments in the system',
  operationId: 'getPayments',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment',
  tags: ['Payment'],
  summary: 'Make a payment',
  operationId: 'addPayment',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddPaymentSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/check-html-for-iyzico',
  tags: ['Payment'],
  summary: 'Check HTML form for Iyzico payment',
  operationId: 'checkHTMLForIyzico',
  request: { body: buildRequestBody(CheckHTMLForIyzicoSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/check-installment',
  tags: ['Payment'],
  summary: 'Check installment options',
  operationId: 'checkInstallment',
  request: { body: buildRequestBody(CheckInstallmentSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/payment/complete-payment-3d',
  tags: ['Payment'],
  summary: 'Complete a 3D payment',
  operationId: 'completePayment3D',
  request: { body: buildRequestBody(CompletePayment3DSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/payment/save-payment',
  tags: ['Payment'],
  summary: 'Save payment record',
  operationId: 'savePayment',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SavePaymentSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/payment/cancel',
  tags: ['Payment'],
  summary: 'Cancel a payment',
  operationId: 'cancelPayment',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CancelPaymentSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/payment',
  tags: ['Payment'],
  summary: 'Delete payments from the system',
  operationId: 'deletePayments',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/payment/{paymentId}/tax',
  tags: ['Payment'],
  summary: 'Update tax for a payment',
  operationId: 'updatePaymentTax',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ paymentId: z.string() }),
    body: buildRequestBody(UpdateTaxSchema),
  },
  responses,
});
