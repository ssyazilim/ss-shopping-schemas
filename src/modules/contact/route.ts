import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { CONTACT_ME, CONTACT_ME_ERROR, CONTACT_ME_RESUME, FILE, CHECK_SMTP } from './validation';
import { UploadedFileSchema, SmtpTestResultSchema, EmptyResultSchema } from './schema';
import { buildRequestBody, jsonResponse } from '../../utils/common';

// POST /public/contact/send-message
registerRoute({
  method: 'post',
  path: '/public/contact/send-message',
  tags: [API_TAGS.contact.name],
  summary: 'Send a Customer message to system',
  request: { body: buildRequestBody(CONTACT_ME()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /public/contact/upload-file
registerRoute({
  method: 'post',
  path: '/public/contact/upload-file',
  tags: [API_TAGS.contact.name],
  summary: 'User can be upload a file (xml, pdf)',
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
registerRoute({
  method: 'post',
  path: '/public/contact/send-resume',
  tags: [API_TAGS.contact.name],
  summary: 'Send a Customer resume to the authorities',
  request: { body: buildRequestBody(CONTACT_ME_RESUME()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /public/contact/send-error-message
registerRoute({
  method: 'post',
  path: '/public/contact/send-error-message',
  tags: [API_TAGS.contact.name],
  summary: 'Send a Customer error message to system',
  request: { body: buildRequestBody(CONTACT_ME_ERROR()) },
  responses: jsonResponse(EmptyResultSchema),
});

// POST /admin/contact/check-smtp
registerRoute({
  method: 'post',
  path: '/admin/contact/check-smtp',
  tags: [API_TAGS.contact.name],
  summary: 'Check your SMTP settings is valid',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CHECK_SMTP) },
  responses: jsonResponse(SmtpTestResultSchema),
});
