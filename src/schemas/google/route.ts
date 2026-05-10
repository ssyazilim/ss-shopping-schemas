import { z } from 'zod';
import { registry } from '../registry';
import { GeminiPromptSchema, TranslateSchema } from './schema';
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
  path: '/public/google/gemini',
  tags: ['Google'],
  summary: 'Generate content with Google Gemini',
  operationId: 'gemini',
  request: { body: buildRequestBody(GeminiPromptSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/google/translate',
  tags: ['Google'],
  summary: 'Translate text using Google',
  operationId: 'translate',
  request: { body: buildRequestBody(TranslateSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/google/analytics',
  tags: ['Google'],
  summary: 'Get Google Analytics data',
  operationId: 'getGoogleAnalytics',
  security: [{ JWT: [] }],
  responses,
});
