import { z } from 'zod';
import { registry } from '../registry';
import { TranslationSchema, AddTranslationsSchema, UpdateTranslationSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/public/translations',
  tags: ['Translation'],
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

registry.registerPath({
  method: 'get',
  path: '/public/translation/{code}',
  tags: ['Translation'],
  summary: 'Get a translation from the system',
  operationId: 'getTranslation',
  request: {
    params: z.object({
      code: z.enum(['en', 'tr']).meta({ default: 'en' }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/translations',
  tags: ['Translation'],
  summary: 'Add a new translations to system (JSON or CSV)',
  operationId: 'addTranslations',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddTranslationsSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/translation',
  tags: ['Translation'],
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

registry.registerPath({
  method: 'post',
  path: '/admin/translation',
  tags: ['Translation'],
  summary: 'Add a new translation to system',
  operationId: 'addTranslation',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(TranslationSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/translation',
  tags: ['Translation'],
  summary: 'Delete a translation or translations in the system',
  operationId: 'deleteTranslations',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/translation/{translationId}',
  tags: ['Translation'],
  summary: 'Update a translation from the system',
  operationId: 'updateTranslation',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ translationId: z.string() }),
    body: buildRequestBody(UpdateTranslationSchema),
  },
  responses,
});
