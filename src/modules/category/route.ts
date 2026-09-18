import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_CATEGORY, UPDATE_CATEGORY } from './validation';
import { CategorySchema } from './schema';
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

// GET /public/categories
registerRoute({
  method: 'get',
  path: '/public/categories',
  tags: [API_TAGS.category.name],
  summary: 'Get all categories in the system',
  request: { query: ListQuerySchema },
  responses: listResponse(CategorySchema),
});

// POST /admin/category
registerRoute({
  method: 'post',
  path: '/admin/category',
  tags: [API_TAGS.category.name],
  summary: 'Add a new category to system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_CATEGORY()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/category
registerRoute({
  method: 'delete',
  path: '/admin/category',
  tags: [API_TAGS.category.name],
  summary: 'Delete a categories in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/category/{categoryId}
registerRoute({
  method: 'patch',
  path: '/admin/category/{categoryId}',
  tags: [API_TAGS.category.name],
  summary: 'Update a category from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ categoryId: z.string() }),
    body: buildRequestBody(UPDATE_CATEGORY()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
