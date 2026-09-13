import { z } from 'zod';
import { registry } from '../registry';
import { GEMINI_PROMPT, TRANSLATE, SUBSCRIBE_MAIL } from './validation';
import { GoogleCategorySchema, SubscribeResultSchema } from './schema';
import { buildRequestBody, jsonResponse, listResponse } from '../common';

// GET /public/google/categories/{locale}
registry.registerPath({
  method: 'get',
  path: '/public/google/categories/{locale}',
  tags: ['SERVICE-google'],
  summary: 'Get Google categories from the system',
  operationId: 'getGoogleCategories',
  request: {
    params: z.object({ locale: z.enum(['en-US', 'tr-TR']).meta({ examples: ['tr-TR'] }) }),
  },
  responses: listResponse(GoogleCategorySchema),
});

// POST /public/google/translate
registry.registerPath({
  method: 'post',
  path: '/public/google/translate',
  tags: ['SERVICE-google'],
  summary: 'Translate a prompt selected language',
  operationId: 'translatePrompt',
  request: { body: buildRequestBody(TRANSLATE) },
  responses: jsonResponse(z.string()),
});

// POST /public/google/subscribe
registry.registerPath({
  method: 'post',
  path: '/public/google/subscribe',
  tags: ['SERVICE-google'],
  summary: 'Add your email to subscription list',
  operationId: 'addMailToSubscription',
  request: { body: buildRequestBody(SUBSCRIBE_MAIL) },
  responses: jsonResponse(SubscribeResultSchema),
});

// POST /admin/google/gemini-prompt
registry.registerPath({
  method: 'post',
  path: '/admin/google/gemini-prompt',
  tags: ['SERVICE-google'],
  summary: 'Send a prompt to Gemini AI',
  operationId: 'sendGeminiPrompt',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(GEMINI_PROMPT) },
  responses: jsonResponse(z.string()),
});
