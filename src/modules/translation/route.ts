import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_TRANSLATION, UPDATE_TRANSLATION } from './validation';
import { TranslationSchema, TranslationKeySchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/translations
registerRoute({
  method: 'get',
  path: '/public/translations',
  tags: [API_TAGS.translation.name],
  summary: 'Get all translations in the system',
  request: {
    query: ListQuerySchema.extend({
      include: z
        .string()
        .optional()
        .meta({ examples: ['code,name'] }),
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['translations,logs'] }),
    }),
  },
  responses: listResponse(TranslationSchema),
});

// GET /public/translation/{code}
registerRoute({
  method: 'get',
  path: '/public/translation/{code}',
  tags: [API_TAGS.translation.name],
  summary: 'Get a translation from the system',
  request: {
    params: z.object({
      code: z.enum(['en', 'tr']).meta({ default: 'en' }),
    }),
  },
  responses: jsonResponse(z.union([TranslationSchema, z.null()])),
});

// GET /admin/translation
registerRoute({
  method: 'get',
  path: '/admin/translation',
  tags: [API_TAGS.translation.name],
  summary: 'Get a specific key translation in the system',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      code: z.string().meta({ examples: ['tr'] }),
      key: z.string().meta({ examples: ['private_forms_contactMe_contactWapp'] }),
    }),
  },
  responses: jsonResponse(TranslationKeySchema),
});

// POST /admin/translation
registerRoute({
  method: 'post',
  path: '/admin/translation',
  tags: [API_TAGS.translation.name],
  summary: 'Add a new translation to system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_TRANSLATION()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/translation
registerRoute({
  method: 'delete',
  path: '/admin/translation',
  tags: [API_TAGS.translation.name],
  summary: 'Delete a translation or translations in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/translation/{translationId}
registerRoute({
  method: 'patch',
  path: '/admin/translation/{translationId}',
  tags: [API_TAGS.translation.name],
  summary: 'Update a translation from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ translationId: z.string() }),
    body: buildRequestBody(UPDATE_TRANSLATION()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
