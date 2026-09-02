import { registry } from '../registry';
import {
  ContactMeSchema,
  ContactMeErrorSchema,
  ContactMeResumeSchema,
  FileSchema,
  CheckSMTPSchema,
} from './schema';
import { responses, buildRequestBody } from '../common';

// POST /public/contact/send-message
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-message',
  tags: ['API-form'],
  summary: 'Send a Customer message to system',
  operationId: 'sendMessageToSystem',
  request: { body: buildRequestBody(ContactMeSchema) },
  responses,
});

// POST /public/contact/upload-file
registry.registerPath({
  method: 'post',
  path: '/public/contact/upload-file',
  tags: ['API-form'],
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

// POST /public/contact/send-resume
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-resume',
  tags: ['API-form'],
  summary: 'Send a Customer resume to the authorities',
  operationId: 'sendResume',
  request: { body: buildRequestBody(ContactMeResumeSchema) },
  responses,
});

// POST /public/contact/send-error-message
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-error-message',
  tags: ['API-form'],
  summary: 'Send a Customer error message to system',
  operationId: 'sendErrorMessageToSystem',
  request: { body: buildRequestBody(ContactMeErrorSchema) },
  responses,
});

// POST /admin/contact/check-smtp
registry.registerPath({
  method: 'post',
  path: '/admin/contact/check-smtp',
  tags: ['API-form'],
  summary: 'Check your SMTP settings is valid',
  operationId: 'checkSMTP',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CheckSMTPSchema) },
  responses,
});
