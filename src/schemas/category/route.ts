import { z } from 'zod';
import { registry } from '../registry';
import { AddCategorySchema, UpdateCategorySchema, ImageSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

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
  path: '/public/category/{categoryId}',
  tags: ['Category'],
  summary: 'Get a category from the system',
  operationId: 'getCategory',
  request: { params: z.object({ categoryId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/categories',
  tags: ['Category'],
  summary: 'Add new categories to the system',
  operationId: 'addCategories',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCategorySchema) },
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
    body: buildRequestBody(UpdateCategorySchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/category',
  tags: ['Category'],
  summary: 'Delete categories from the system',
  operationId: 'deleteCategories',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/category/image/{categoryId}',
  tags: ['Category'],
  summary: 'Add image to a category',
  operationId: 'addCategoryImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ categoryId: z.string() }),
    body: buildRequestBody(ImageSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/category/image/{categoryId}',
  tags: ['Category'],
  summary: 'Delete image from a category',
  operationId: 'deleteCategoryImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ categoryId: z.string() }),
    body: buildRequestBody(ImageSchema),
  },
  responses,
});
