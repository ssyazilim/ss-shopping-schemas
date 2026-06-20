import { z } from 'zod';
import { registry } from '../registry';
import { CategorySchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

registry.registerPath({
  method: 'get',
  path: '/public/categories',
  tags: ['Category'],
  summary: 'Get all categories in the system',
  operationId: 'getCategories',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/categories/google/{locale}',
  tags: ['Category'],
  summary: 'Get Google categories from the system',
  operationId: 'getGoogleCategories',
  request: {
    params: z.object({ locale: z.enum(['en-US', 'tr-TR']).meta({ examples: ['tr-TR'] }) }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/category',
  tags: ['Category'],
  summary: 'Add a new category to system',
  operationId: 'addCategory',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CategorySchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/category',
  tags: ['Category'],
  summary: 'Delete a categories in the system',
  operationId: 'deleteCategories',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/category/{categoryId}',
  tags: ['Category'],
  summary: 'Update a category from the system',
  operationId: 'updateCategory',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ categoryId: z.string() }),
    body: buildRequestBody(CategorySchema),
  },
  responses,
});
