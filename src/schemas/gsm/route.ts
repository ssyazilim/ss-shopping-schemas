import { z } from 'zod';
import { registry } from '../registry';
import { SendSmsSchema } from './schema';
import { responses, buildRequestBody } from '../common';

// POST /public/gsm/send-sms
registry.registerPath({
  method: 'post',
  path: '/public/gsm/send-sms',
  tags: ['Gsm'],
  summary: 'Send a sms for specific turkish number',
  operationId: 'sendSMS',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(SendSmsSchema) },
  responses,
});

// GET /admin/gsm/check-report
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

// GET /admin/gsm/check-balance
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

// GET /admin/gsm/list-headers
registry.registerPath({
  method: 'get',
  path: '/admin/gsm/list-headers',
  tags: ['Gsm'],
  summary: 'List message headers for send sms',
  operationId: 'listHeaders',
  security: [{ JWT: [] }],
  responses,
});
