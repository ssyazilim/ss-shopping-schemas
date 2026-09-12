import { z } from 'zod';
import { registry } from '../registry';
import { ADD_CATEGORY, UPDATE_CATEGORY } from './validation';
import { CategorySchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/categories
registry.registerPath({
  method: 'get',
  path: '/public/categories',
  tags: ['API-category'],
  summary: 'Get all categories in the system',
  operationId: 'getCategories',
  request: { query: ListQuerySchema },
  responses: listResponse(CategorySchema),
});

// POST /admin/category
registry.registerPath({
  method: 'post',
  path: '/admin/category',
  tags: ['API-category'],
  summary: 'Add a new category to system',
  operationId: 'addCategory',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CATEGORY()) },
  responses: jsonResponse(CategorySchema),
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
  responses: jsonResponse(DeleteResultSchema),
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
    body: buildRequestBody(UPDATE_CATEGORY()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
