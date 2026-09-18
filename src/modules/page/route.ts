import { z } from 'zod';

import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_PAGE, UPDATE_PAGE } from './validation';
import { PageSchema, PageListItemSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/pages
registerRoute({
  method: 'get',
  path: '/public/pages',
  tags: [API_TAGS.page.name],
  summary: 'Get all pages of the storefront without markdown content',
  responses: listResponse(PageListItemSchema),
});

// GET /public/page/{key}
registerRoute({
  method: 'get',
  path: '/public/page/{key}',
  tags: [API_TAGS.page.name],
  summary: 'Get a page with its markdown content by key',
  request: {
    params: z.object({ key: PageSchema.shape.key.meta({ examples: ['about-us'] }) }),
  },
  responses: jsonResponse(PageSchema),
});

// GET /admin/pages
registerRoute({
  method: 'get',
  path: '/admin/pages',
  tags: [API_TAGS.page.name],
  summary: 'Get all pages in the system with pagination and search',
  security: [{ JWT: [] }],
  request: {
    query: ListQuerySchema,
  },
  responses: listResponse(PageListItemSchema),
});

// GET /admin/page/{pageId}
registerRoute({
  method: 'get',
  path: '/admin/page/{pageId}',
  tags: [API_TAGS.page.name],
  summary: 'Get a page from the system',
  security: [{ JWT: [] }],
  request: { params: z.object({ pageId: z.string() }) },
  responses: jsonResponse(PageSchema),
});

// POST /admin/page
registerRoute({
  method: 'post',
  path: '/admin/page',
  tags: [API_TAGS.page.name],
  summary: 'Add a new page to the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_PAGE()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/page
registerRoute({
  method: 'delete',
  path: '/admin/page',
  tags: [API_TAGS.page.name],
  summary: 'Delete a page or pages in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/page/{pageId}
registerRoute({
  method: 'patch',
  path: '/admin/page/{pageId}',
  tags: [API_TAGS.page.name],
  summary: 'Update a page from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ pageId: z.string() }),
    body: buildRequestBody(UPDATE_PAGE()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
