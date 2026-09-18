import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import {
  ADD_CARD_IYZICO,
  ADD_PAYMENT_IYZICO,
  ADD_PAYMENT_IYZICO_NON_3D,
  CANCEL_PAYMENT,
  CHECK_INSTALLMENT,
  COMPLETE_PAYMENT_3D,
  DELETE_CARD_IYZICO,
  REFUND_PAYMENT,
} from './validation';
import {
  IyzicoCancelPaymentResultSchema,
  IyzicoCheckoutFormInitialResultSchema,
  IyzicoCheckoutFormRetrieveResultSchema,
  IyzicoDeleteUserCardResultSchema,
  IyzicoInstallmentInfoResultSchema,
  IyzicoListUserCardsResultSchema,
  IyzicoPaymentResultSchema,
  IyzicoRefundResultSchema,
  IyzicoSavePaymentCardResultSchema,
  IyzicoThreeDSInitializeResultSchema,
} from './schema';
import { buildRequestBody, jsonResponse } from '../../utils/common';

const apiKeyHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
});

const iyzicoHeaders = z.object({
  'x-iyzico-api-key': z.string().default('sandbox-rCQcWjtVjkrRprfoPuG82xgl5kfTDrtx'),
  'x-iyzico-secret-key': z.string().default('sandbox-bJwEMD8sZsz9ZI7N5ueggImNe2xTMxhc'),
  'x-iyzico-url': z.string().default('https://sandbox-api.iyzipay.com'),
});

const apiKeyIyzicoHeaders = apiKeyHeaders.extend(iyzicoHeaders.shape);

const callbackHeader = {
  'x-iyzico-callback-url': z.string().default('https://your-domain.com/checkToken'),
};

const iyzicoCallbackHeaders = iyzicoHeaders.extend(callbackHeader);

const apiKeyIyzicoCallbackHeaders = apiKeyIyzicoHeaders.extend(callbackHeader);

// GET /public/payment-iyzico/check/{paymentId}
registerRoute({
  method: 'get',
  path: '/public/payment-iyzico/check/{paymentId}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Check payment for the IYZICO Service',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyIyzicoHeaders,
    params: z.object({ paymentId: z.string() }),
  },
  responses: jsonResponse(IyzicoPaymentResultSchema),
});

// POST /public/payment-iyzico/IYZICO/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/IYZICO/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary:
    'The payment form initiates a session and returns checkoutFormContent, paymentPageUrl, and the transaction token to display the payment page',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyIyzicoCallbackHeaders,
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(ADD_PAYMENT_IYZICO()),
  },
  responses: jsonResponse(IyzicoCheckoutFormInitialResultSchema),
});

// POST /public/payment-iyzico/IYZICO/{token}/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/IYZICO/{token}/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'After the CF payment form is completed, it queries the results using the token',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyIyzicoHeaders,
    params: z.object({
      token: z.string(),
      locale: z.enum(['en', 'tr']).default('tr'),
    }),
  },
  responses: jsonResponse(IyzicoCheckoutFormRetrieveResultSchema),
});

// POST /public/payment-iyzico/NON-3D/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/NON-3D/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary:
    'The Payment Creation API is responsible for processing the customer’s card payments. When this service is used, iyzico provides an immediate response regarding the success of the transaction',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(ADD_PAYMENT_IYZICO_NON_3D()),
  },
  responses: jsonResponse(IyzicoPaymentResultSchema),
});

// POST /public/payment-iyzico/3D/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/3D/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary:
    'It initiates a 3D Secure session and returns the `htmlContent` value for 3DS authentication',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoCallbackHeaders,
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(ADD_PAYMENT_IYZICO_NON_3D()),
  },
  responses: jsonResponse(IyzicoThreeDSInitializeResultSchema),
});

// POST /public/payment-iyzico/3D/{paymentId}/{token}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/3D/{paymentId}/{token}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary:
    'After 3DS verification, a request must be sent to this endpoint to complete the payment transaction. This service is triggered using the information received after the verification step and concludes the transaction as either successful or unsuccessful',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    params: z.object({
      paymentId: z.string(),
      token: z.string(),
    }),
    body: buildRequestBody(COMPLETE_PAYMENT_3D()),
  },
  responses: jsonResponse(IyzicoPaymentResultSchema),
});

// POST /public/payment-iyzico/check/installment
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/check/installment',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Check installments with the IYZICO Service',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    body: buildRequestBody(CHECK_INSTALLMENT()),
  },
  responses: jsonResponse(IyzicoInstallmentInfoResultSchema),
});

// POST /public/payment-iyzico/refund/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/refund/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Refund a payment transaction with the IYZICO Service',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(REFUND_PAYMENT()),
  },
  responses: jsonResponse(IyzicoRefundResultSchema),
});

// POST /public/payment-iyzico/cancel/{locale}
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/cancel/{locale}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Used to cancel a payment transaction',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    params: z.object({ locale: z.enum(['en', 'tr']).default('tr') }),
    body: buildRequestBody(CANCEL_PAYMENT()),
  },
  responses: jsonResponse(IyzicoCancelPaymentResultSchema),
});

// GET /public/payment-iyzico/check-card/{userKey}
registerRoute({
  method: 'get',
  path: '/public/payment-iyzico/check-card/{userKey}',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Get a special card for the user',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    params: z.object({ userKey: z.string() }),
  },
  responses: jsonResponse(IyzicoListUserCardsResultSchema),
});

// POST /public/payment-iyzico/add-card
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/add-card',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Add a new card to the system',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    body: buildRequestBody(ADD_CARD_IYZICO()),
  },
  responses: jsonResponse(IyzicoSavePaymentCardResultSchema),
});

// DELETE /public/payment-iyzico/delete-card
registerRoute({
  method: 'delete',
  path: '/public/payment-iyzico/delete-card',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Delete a card from the IYZICO Service',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    body: buildRequestBody(DELETE_CARD_IYZICO()),
  },
  responses: jsonResponse(IyzicoDeleteUserCardResultSchema),
});

// POST /public/payment-iyzico/validate-card
registerRoute({
  method: 'post',
  path: '/public/payment-iyzico/validate-card',
  tags: [SERVICE_TAGS.paymentIyzico.name],
  summary: 'Check a card with the IYZICO Service',
  security: [{ JWT: [] }],
  request: {
    headers: iyzicoHeaders,
    body: buildRequestBody(ADD_CARD_IYZICO()),
  },
  responses: jsonResponse(IyzicoSavePaymentCardResultSchema),
});
