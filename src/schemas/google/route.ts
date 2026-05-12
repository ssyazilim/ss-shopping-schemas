import { z } from 'zod';
import { registry } from '../registry';
import { GeminiPromptSchema, TranslateSchema } from './schema';
import { PasswordResetUserSchema } from '../auth/schema';
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
  path: '/public/google/translate',
  tags: ['Google'],
  summary: 'Translate a prompt selected language',
  operationId: 'translatePrompt',
  request: { body: buildRequestBody(TranslateSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/google/subscribe',
  tags: ['Google'],
  summary: 'Add your email to subscription list',
  operationId: 'addMailToSubscription',
  request: { body: buildRequestBody(PasswordResetUserSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/google/gemini-prompt',
  tags: ['Google'],
  summary: 'Send a prompt to Gemini AI',
  operationId: 'sendGeminiPrompt',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(GeminiPromptSchema) },
  responses,
});
