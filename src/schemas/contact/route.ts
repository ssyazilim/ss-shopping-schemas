import { registry } from '../registry';
import { CONTACT_ME, CONTACT_ME_ERROR, CONTACT_ME_RESUME, FILE, CHECK_SMTP } from './validation';
import { UploadedFileSchema, SmtpTestResultSchema, EmptyResultSchema } from './schema';
import { buildRequestBody, jsonResponse } from '../common';

// POST /public/contact/send-message
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-message',
  tags: ['API-contact'],
  summary: 'Send a Customer message to system',
  operationId: 'sendMessageToSystem',
  request: { body: buildRequestBody(CONTACT_ME()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /public/contact/upload-file
registry.registerPath({
  method: 'post',
  path: '/public/contact/upload-file',
  tags: ['API-contact'],
  summary: 'User can be upload a file (xml, pdf)',
  operationId: 'addFile',
  request: {
    body: {
      content: {
        'multipart/form-data': { schema: FILE },
      },
    },
  },
  responses: jsonResponse(UploadedFileSchema),
});

// POST /public/contact/send-resume
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-resume',
  tags: ['API-contact'],
  summary: 'Send a Customer resume to the authorities',
  operationId: 'sendResume',
  request: { body: buildRequestBody(CONTACT_ME_RESUME()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /public/contact/send-error-message
registry.registerPath({
  method: 'post',
  path: '/public/contact/send-error-message',
  tags: ['API-contact'],
  summary: 'Send a Customer error message to system',
  operationId: 'sendErrorMessageToSystem',
  request: { body: buildRequestBody(CONTACT_ME_ERROR()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /admin/contact/check-smtp
registry.registerPath({
  method: 'post',
  path: '/admin/contact/check-smtp',
  tags: ['API-contact'],
  summary: 'Check your SMTP settings is valid',
  operationId: 'checkSMTP',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CHECK_SMTP) },
  responses: jsonResponse(SmtpTestResultSchema),
});
