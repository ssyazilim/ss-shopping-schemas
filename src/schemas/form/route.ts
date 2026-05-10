import { z } from 'zod';
import { registry } from '../registry';
import { ContactMeSchema, ContactMeErrorSchema, ContactMeResumeSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema } from '../common';

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
  path: '/admin/forms',
  tags: ['Form'],
  summary: 'Get all form submissions in the system',
  operationId: 'getForms',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/form/contact-me',
  tags: ['Form'],
  summary: 'Submit a contact form',
  operationId: 'contactMe',
  request: { body: buildRequestBody(ContactMeSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/form/contact-me/error',
  tags: ['Form'],
  summary: 'Submit a contact form error report',
  operationId: 'contactMeError',
  request: { body: buildRequestBody(ContactMeErrorSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/form/contact-me/resume',
  tags: ['Form'],
  summary: 'Submit a resume contact form',
  operationId: 'contactMeResume',
  request: { body: buildRequestBody(ContactMeResumeSchema) },
  responses,
});
