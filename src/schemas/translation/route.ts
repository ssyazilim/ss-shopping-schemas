import { z } from 'zod';
import { registry } from '../registry';
import { TranslationSchema, UpdateTranslationSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

// GET /public/translations
registry.registerPath({
  method: 'get',
  path: '/public/translations',
  tags: ['API-translation'],
  summary: 'Get all translations in the system',
  operationId: 'getTranslations',
  request: {
    query: ListQuerySchema.extend({
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['translations,logs'] }),
    }),
  },
  responses,
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
  responses,
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
      locale: z.string().meta({ examples: ['tr'] }),
      name: z.string().meta({ examples: ['web'] }),
      key: z.string().meta({ examples: ['private_forms_contactMe_contactWapp'] }),
    }),
  },
  responses,
});

// POST /admin/translation
registry.registerPath({
  method: 'post',
  path: '/admin/translation',
  tags: ['API-translation'],
  summary: 'Add a new translation to system',
  operationId: 'addTranslation',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(TranslationSchema) },
  responses,
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
  responses,
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
    body: buildRequestBody(UpdateTranslationSchema),
  },
  responses,
});
