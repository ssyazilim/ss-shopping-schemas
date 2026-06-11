import { registry } from '../registry';
import {
  ContactMeSchema,
  ContactMeErrorSchema,
  ContactMeResumeSchema,
  FileSchema,
  CheckSMTPSchema,
} from './schema';
import { responses, buildRequestBody } from '../common';

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
