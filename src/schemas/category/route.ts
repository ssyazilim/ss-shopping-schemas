import { z } from 'zod';
import { registry } from '../registry';
import { AddCategorySchema, CategorySchema } from './schema';
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
  path: '/public/categories',
  tags: ['Category'],
  summary: 'Get all categories in the system',
  operationId: 'getCategories',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/category/parent/{parentName}',
  tags: ['Category'],
  summary: 'Returns matching category parents in the database',
  operationId: 'getCategoryParent',
  request: { params: z.object({ parentName: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/category/tree/{treeName}',
  tags: ['Category'],
  summary: 'Returns all matching category for the category tree in database',
  operationId: 'getCategoryTree',
  request: { params: z.object({ treeName: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/category/name/{categoryName}',
  tags: ['Category'],
  summary: 'Returns all category parents matching the category name in the database',
  operationId: 'getCategoryNodes',
  request: { params: z.object({ categoryName: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/categories/google/{locale}',
  tags: ['Category'],
  summary: 'Get Google categories from the system',
  operationId: 'getGoogleCategories',
  request: { params: z.object({ locale: z.enum(['en-US', 'tr-TR']).default('tr-TR') }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/categories',
  tags: ['Category'],
  summary: 'Add a new categories to system',
  operationId: 'addCategories',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCategorySchema) },
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
