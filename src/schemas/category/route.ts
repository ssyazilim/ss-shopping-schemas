import { z } from 'zod';
import { registry } from '../registry';
import { CategorySchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

// GET /public/categories
registry.registerPath({
  method: 'get',
  path: '/public/categories',
  tags: ['API-category'],
  summary: 'Get all categories in the system',
  operationId: 'getCategories',
  request: { query: ListQuerySchema },
  responses,
});

// GET /public/categories/google/{locale}
registry.registerPath({
  method: 'get',
  path: '/public/categories/google/{locale}',
  tags: ['API-category'],
  summary: 'Get Google categories from the system',
  operationId: 'getGoogleCategories',
  request: {
    params: z.object({ locale: z.enum(['en-US', 'tr-TR']).meta({ examples: ['tr-TR'] }) }),
  },
  responses,
});

// POST /admin/category
registry.registerPath({
  method: 'post',
  path: '/admin/category',
  tags: ['API-category'],
  summary: 'Add a new category to system',
  operationId: 'addCategory',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CategorySchema) },
  responses,
});

// DELETE /admin/category
registry.registerPath({
  method: 'delete',
  path: '/admin/category',
  tags: ['API-category'],
  summary: 'Delete a categories in the system',
  operationId: 'deleteCategories',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

// PATCH /admin/category/{categoryId}
registry.registerPath({
  method: 'patch',
  path: '/admin/category/{categoryId}',
  tags: ['API-category'],
  summary: 'Update a category from the system',
  operationId: 'updateCategory',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ categoryId: z.string() }),
    body: buildRequestBody(CategorySchema),
  },
  responses,
});
