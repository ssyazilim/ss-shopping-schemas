import { registry } from '../registry';
import { GeminiPromptSchema, TranslateSchema } from './schema';
import { PasswordResetUserSchema } from '../auth/schema';
import { responses, buildRequestBody } from '../common';

// POST /public/google/translate
registry.registerPath({
  method: 'post',
  path: '/public/google/translate',
  tags: ['SERVICE-google'],
  summary: 'Translate a prompt selected language',
  operationId: 'translatePrompt',
  request: { body: buildRequestBody(TranslateSchema) },
  responses,
});

// POST /public/google/subscribe
registry.registerPath({
  method: 'post',
  path: '/public/google/subscribe',
  tags: ['SERVICE-google'],
  summary: 'Add your email to subscription list',
  operationId: 'addMailToSubscription',
  request: { body: buildRequestBody(PasswordResetUserSchema) },
  responses,
});

// POST /admin/google/gemini-prompt
registry.registerPath({
  method: 'post',
  path: '/admin/google/gemini-prompt',
  tags: ['SERVICE-google'],
  summary: 'Send a prompt to Gemini AI',
  operationId: 'sendGeminiPrompt',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(GeminiPromptSchema) },
  responses,
});
