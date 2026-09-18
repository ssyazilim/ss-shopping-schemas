import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import { GEMINI_PROMPT, TRANSLATE, SUBSCRIBE_MAIL } from './validation';
import { GoogleCategorySchema, SubscribeResultSchema } from './schema';
import { buildRequestBody, jsonResponse, listResponse } from '../../utils/common';

// GET /public/google/categories/{locale}
registerRoute({
  method: 'get',
  path: '/public/google/categories/{locale}',
  tags: [SERVICE_TAGS.google.name],
  summary: 'Get Google categories from the system',
  request: {
    params: z.object({ locale: z.enum(['en-US', 'tr-TR']).meta({ examples: ['tr-TR'] }) }),
  },
  responses: listResponse(GoogleCategorySchema),
});

// POST /public/google/translate
registerRoute({
  method: 'post',
  path: '/public/google/translate',
  tags: [SERVICE_TAGS.google.name],
  summary: 'Translate a prompt selected language',
  request: { body: buildRequestBody(TRANSLATE) },
  responses: jsonResponse(z.string()),
});

// POST /public/google/subscribe
registerRoute({
  method: 'post',
  path: '/public/google/subscribe',
  tags: [SERVICE_TAGS.google.name],
  summary: 'Add your email to subscription list',
  request: { body: buildRequestBody(SUBSCRIBE_MAIL) },
  responses: jsonResponse(SubscribeResultSchema),
});

// POST /admin/google/gemini-prompt
registerRoute({
  method: 'post',
  path: '/admin/google/gemini-prompt',
  tags: [SERVICE_TAGS.google.name],
  summary: 'Send a prompt to Gemini AI',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(GEMINI_PROMPT) },
  responses: jsonResponse(z.string()),
});
