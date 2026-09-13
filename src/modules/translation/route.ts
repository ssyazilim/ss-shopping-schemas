import { z } from 'zod';
import { registry } from '../registry';
import { ADD_TRANSLATION, UPDATE_TRANSLATION } from './validation';
import { TranslationSchema, TranslationKeySchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/translations
registry.registerPath({
  method: 'get',
  path: '/public/translations',
  tags: ['API-translation'],
  summary: 'Get all translations in the system',
  operationId: 'getTranslations',
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
registry.registerPath({
  method: 'get',
  path: '/public/translation/{code}',
  tags: ['API-translation'],
  summary: 'Get a translation from the system',
  operationId: 'getTranslation',
  request: {
    params: z.object({
      code: z.enum(['en', 'tr']).meta({ default: 'en' }),
    }),
  },
  responses: jsonResponse(z.union([TranslationSchema, z.null()])),
});

// GET /admin/translation
registry.registerPath({
  method: 'get',
  path: '/admin/translation',
  tags: ['API-translation'],
  summary: 'Get a specific key translation in the system',
  operationId: 'getTranslationByKey',
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
registry.registerPath({
  method: 'post',
  path: '/admin/translation',
  tags: ['API-translation'],
  summary: 'Add a new translation to system',
  operationId: 'addTranslation',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_TRANSLATION()) },
  responses: jsonResponse(TranslationSchema),
});

// DELETE /admin/translation
registry.registerPath({
  method: 'delete',
  path: '/admin/translation',
  tags: ['API-translation'],
  summary: 'Delete a translation or translations in the system',
  operationId: 'deleteTranslations',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/translation/{translationId}
registry.registerPath({
  method: 'patch',
  path: '/admin/translation/{translationId}',
  tags: ['API-translation'],
  summary: 'Update a translation from the system',
  operationId: 'updateTranslation',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ translationId: z.string() }),
    body: buildRequestBody(UPDATE_TRANSLATION()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
