import { z } from 'zod';
import { registry } from '../registry';
import { SEND_SMS } from './validation';
import { GsmReportSchema, GsmHeadersSchema, GsmBalanceSchema } from './schema';
import { buildRequestBody, jsonResponse } from '../common';

const apiKeyHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
});

// POST /public/gsm/send-sms
registry.registerPath({
  method: 'post',
  path: '/public/gsm/send-sms',
  tags: ['SERVICE-message-netgsm'],
  summary: 'Send a sms for specific turkish number',
  operationId: 'sendSMS',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyHeaders, body: buildRequestBody(SEND_SMS) },
  responses: jsonResponse(z.string().meta({ examples: ['1234567890'] })),
});

// GET /admin/gsm/check-report
registry.registerPath({
  method: 'get',
  path: '/admin/gsm/check-report',
  tags: ['SERVICE-message-netgsm'],
  summary: 'List message headers for send sms',
  operationId: 'checkReport',
  security: [{ JWT: [] }],
  request: { query: z.object({ jobId: z.string() }) },
  responses: jsonResponse(GsmReportSchema),
});

// GET /admin/gsm/check-balance
registry.registerPath({
  method: 'get',
  path: '/admin/gsm/check-balance',
  tags: ['SERVICE-message-netgsm'],
  summary: 'Check balance situation for the sms',
  operationId: 'checkBalance',
  security: [{ JWT: [] }],
  request: { query: z.object({ type: z.enum(['PACKAGE', 'CREDIT']).default('PACKAGE') }) },
  responses: jsonResponse(GsmBalanceSchema),
});

// GET /admin/gsm/list-headers
registry.registerPath({
  method: 'get',
  path: '/admin/gsm/list-headers',
  tags: ['SERVICE-message-netgsm'],
  summary: 'List message headers for send sms',
  operationId: 'listHeaders',
  security: [{ JWT: [] }],
  responses: jsonResponse(GsmHeadersSchema),
});
