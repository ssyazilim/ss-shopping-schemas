import { z } from 'zod';
import { registry } from '../registry';
import {
  ContactMeSchema,
  ContactMeErrorSchema,
  ContactMeResumeSchema,
  FileSchema,
  CheckSMTPSchema,
} from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
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
  path: '/public/contact/send-message',
  tags: ['Form'],
  summary: 'Send a Customer message to system',
  operationId: 'sendMessageToSystem',
  request: { body: buildRequestBody(ContactMeSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/contact/upload-file',
  tags: ['Form'],
  summary: 'User can be upload a file (xml, pdf)',
  operationId: 'addFile',
  request: {
    body: {
      content: {
        'multipart/form-data': { schema: FileSchema },
      },
    },
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/contact/send-resume',
  tags: ['Form'],
  summary: 'Send a Customer resume to the authorities',
  operationId: 'sendResume',
  request: { body: buildRequestBody(ContactMeResumeSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/contact/send-error-message',
  tags: ['Form'],
  summary: 'Send a Customer error message to system',
  operationId: 'sendErrorMessageToSystem',
  request: { body: buildRequestBody(ContactMeErrorSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/contact/check-smtp',
  tags: ['Form'],
  summary: 'Check your SMTP settings is valid',
  operationId: 'checkSMTP',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CheckSMTPSchema) },
  responses,
});
