import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import { SEND_SMS } from './validation';
import { GsmReportSchema, GsmHeadersSchema, GsmBalanceSchema } from './schema';
import { buildRequestBody, jsonResponse } from '../../utils/common';

const apiKeyHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
});

// POST /public/gsm/send-sms
registerRoute({
  method: 'post',
  path: '/public/gsm/send-sms',
  tags: [SERVICE_TAGS.messageNetgsm.name],
  summary: 'Send a sms for specific turkish number',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyHeaders, body: buildRequestBody(SEND_SMS) },
  responses: jsonResponse(z.string().meta({ examples: ['1234567890'] })),
});

// GET /admin/gsm/check-report
registerRoute({
  method: 'get',
  path: '/admin/gsm/check-report',
  tags: [SERVICE_TAGS.messageNetgsm.name],
  summary: 'List message headers for send sms',
  security: [{ JWT: [] }],
  request: { query: z.object({ jobId: z.string() }) },
  responses: jsonResponse(GsmReportSchema),
});

// GET /admin/gsm/check-balance
registerRoute({
  method: 'get',
  path: '/admin/gsm/check-balance',
  tags: [SERVICE_TAGS.messageNetgsm.name],
  summary: 'Check balance situation for the sms',
  security: [{ JWT: [] }],
  request: { query: z.object({ type: z.enum(['PACKAGE', 'CREDIT']).default('PACKAGE') }) },
  responses: jsonResponse(GsmBalanceSchema),
});

// GET /admin/gsm/list-headers
registerRoute({
  method: 'get',
  path: '/admin/gsm/list-headers',
  tags: [SERVICE_TAGS.messageNetgsm.name],
  summary: 'List message headers for send sms',
  security: [{ JWT: [] }],
  responses: jsonResponse(GsmHeadersSchema),
});
