import { z } from 'zod';
import { registry } from '../registry';
import { SendSmsSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

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
  method: 'post',
  path: '/admin/gsm/send-sms',
  tags: ['Gsm'],
  summary: 'Send SMS messages',
  operationId: 'sendSms',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(SendSmsSchema) },
  responses,
});
