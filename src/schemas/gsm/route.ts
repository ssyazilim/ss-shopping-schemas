import { z } from 'zod';
import { registry } from '../registry';
import { SendSmsSchema } from './schema';
import { responses, buildRequestBody } from '../common';

registry.registerPath({
  method: 'post',
  path: '/public/gsm/send-sms',
  tags: ['Gsm'],
  summary: 'Send a sms for specific turkish number',
  operationId: 'sendSMS',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(SendSmsSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/gsm/check-report',
  tags: ['Gsm'],
  summary: 'List message headers for send sms',
  operationId: 'checkReport',
  security: [{ JWT: [] }],
  request: { query: z.object({ jobId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/gsm/check-balance',
  tags: ['Gsm'],
  summary: 'Check balance situation for the sms',
  operationId: 'checkBalance',
  security: [{ JWT: [] }],
  request: { query: z.object({ type: z.enum(['PACKAGE', 'CREDIT']).default('PACKAGE') }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/gsm/list-headers',
  tags: ['Gsm'],
  summary: 'List message headers for send sms',
  operationId: 'listHeaders',
  security: [{ JWT: [] }],
  responses,
});
