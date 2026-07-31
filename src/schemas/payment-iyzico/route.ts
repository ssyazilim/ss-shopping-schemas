import { z } from 'zod';
import { registry } from '../registry';
import {
  AddCardSchema,
  AddPaymentSchema,
  CancelPaymentSchema,
  CheckHTMLForIyzicoSchema,
  CheckInstallmentSchema,
  CompletePayment3DSchema,
} from './schema';
import { responses, buildRequestBody } from '../common';

// GET /public/payment-iyzico/check/{paymentId}
registry.registerPath({
  method: 'get',
  path: '/public-key/payment-iyzico/check/{paymentId}',
  tags: ['Payment Iyzico'],
  summary: 'Check payment for the IYZICO Service',
  operationId: 'checkIyzicoPayment',
  security: [{ 'X-API-KEY': [] }],
  request: {
    params: z.object({ paymentId: z.string() }),
  },
  responses,
});

// POST /public/payment-iyzico/IYZICO/{locale}
registry.registerPath({
  method: 'post',
  path: '/public-key/payment-iyzico/IYZICO/{locale}',
  tags: ['Payment Iyzico'],
  summary:
    'The payment form initiates a session and returns checkoutFormContent, paymentPageUrl, and the transaction token to display the payment page',
  operationId: 'checkIyzicoHtml',
  security: [{ 'X-API-KEY': [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).meta({ examples: ['tr'] }) }),
    body: buildRequestBody(CheckHTMLForIyzicoSchema),
  },
  responses,
});

// POST /public/payment-iyzico/IYZICO/{token}/{locale}
registry.registerPath({
  method: 'post',
  path: '/public-key/payment-iyzico/IYZICO/{token}/{locale}',
  tags: ['Payment Iyzico'],
  summary: 'After the CF payment form is completed, it queries the results using the token',
  operationId: 'retrieveIyzicoForm',
  security: [{ 'X-API-KEY': [] }],
  request: {
    params: z.object({
      token: z.string(),
      locale: z.enum(['en', 'tr']).meta({ examples: ['tr'] }),
    }),
  },
  responses,
});

// POST /public/payment-iyzico/NON-3D/{locale}
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/NON-3D/{locale}',
  tags: ['Payment Iyzico'],
  summary:
    'The Payment Creation API is responsible for processing the customer’s card payments. When this service is used, iyzico provides an immediate response regarding the success of the transaction',
  operationId: 'createIyzicoPayment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).meta({ examples: ['tr'] }) }),
    body: buildRequestBody(AddPaymentSchema),
  },
  responses,
});

// POST /public/payment-iyzico/3D/{locale}
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/3D/{locale}',
  tags: ['Payment Iyzico'],
  summary:
    'It initiates a 3D Secure session and returns the `htmlContent` value for 3DS authentication',
  operationId: 'createIyzico3DPayment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).meta({ examples: ['tr'] }) }),
    body: buildRequestBody(AddPaymentSchema),
  },
  responses,
});

// POST /public/payment-iyzico/3D/{paymentId}/{token}
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/3D/{paymentId}/{token}',
  tags: ['Payment Iyzico'],
  summary:
    'After 3DS verification, a request must be sent to this endpoint to complete the payment transaction. This service is triggered using the information received after the verification step and concludes the transaction as either successful or unsuccessful',
  operationId: 'completeIyzico3DPayment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({
      paymentId: z.string(),
      token: z.string(),
    }),
    body: buildRequestBody(CompletePayment3DSchema),
  },
  responses,
});

// POST /public/payment-iyzico/check/installment
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/check/installment',
  tags: ['Payment Iyzico'],
  summary: 'Check installments with the IYZICO Service',
  operationId: 'checkIyzicoInstallment',
  security: [{ JWT: [] }],
  request: {
    body: buildRequestBody(CheckInstallmentSchema),
  },
  responses,
});

// POST /public/payment-iyzico/cancel/{locale}
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/cancel/{locale}',
  tags: ['Payment Iyzico'],
  summary: 'Used to cancel a payment transaction',
  operationId: 'cancelIyzicoPayment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ locale: z.enum(['en', 'tr']).meta({ examples: ['tr'] }) }),
    body: buildRequestBody(CancelPaymentSchema),
  },
  responses,
});

// GET /public/payment-iyzico/check-card/{userKey}
registry.registerPath({
  method: 'get',
  path: '/public/payment-iyzico/check-card/{userKey}',
  tags: ['Payment Iyzico'],
  summary: 'Get a special card for the user',
  operationId: 'getCardWithDetail',
  security: [{ JWT: [] }],
  request: { params: z.object({ userKey: z.string() }) },
  responses,
});

// POST /public/payment-iyzico/add-card
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/add-card',
  tags: ['Payment Iyzico'],
  summary: 'Add a new card to the system',
  operationId: 'addCard',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCardSchema) },
  responses,
});

// DELETE /public/payment-iyzico/delete-card/{cardId}
registry.registerPath({
  method: 'delete',
  path: '/public/payment-iyzico/delete-card/{cardId}',
  tags: ['Payment Iyzico'],
  summary: 'Delete a card from the system',
  operationId: 'deleteCard',
  security: [{ JWT: [] }],
  request: { params: z.object({ cardId: z.string() }) },
  responses,
});

// POST /public/payment-iyzico/check/card
registry.registerPath({
  method: 'post',
  path: '/public/payment-iyzico/validate-card',
  tags: ['Payment Iyzico'],
  summary: 'Check a card with the IYZICO Service',
  operationId: 'checkIyzicoCard',
  security: [{ JWT: [] }],
  request: {
    body: buildRequestBody(AddCardSchema),
  },
  responses,
});
