import { z } from 'zod';

import { registry } from '../registry';
import { ADD_PAGE, UPDATE_PAGE, PageLocaleSchema } from './validation';
import { PageSchema, PageListItemSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/pages
registry.registerPath({
  method: 'get',
  path: '/public/pages',
  tags: ['API-page'],
  summary: 'Get all pages of the storefront without markdown content',
  operationId: 'getPages',
  request: {
    query: z.object({
      companyId: z.string().meta({ examples: ['68b1f0c2a4d3e51f2c9b7a10'] }),
      locale: PageLocaleSchema.optional().meta({ examples: ['tr'] }),
    }),
  },
  responses: listResponse(PageListItemSchema),
});

// GET /public/page/{slug}
registry.registerPath({
  method: 'get',
  path: '/public/page/{slug}',
  tags: ['API-page'],
  summary: 'Get a page with its markdown content by slug',
  operationId: 'getPage',
  request: {
    params: z.object({ slug: z.string().meta({ examples: ['hakkimizda'] }) }),
    query: z.object({
      companyId: z.string().meta({ examples: ['68b1f0c2a4d3e51f2c9b7a10'] }),
      locale: PageLocaleSchema.meta({ examples: ['tr'] }),
    }),
  },
  responses: jsonResponse(PageSchema),
});

// GET /admin/pages
registry.registerPath({
  method: 'get',
  path: '/admin/pages',
  tags: ['API-page'],
  summary: 'Get all pages in the system with pagination, search and locale filter',
  operationId: 'getAdminPages',
  security: [{ JWT: [] }],
  request: {
    query: ListQuerySchema.extend({
      locale: PageLocaleSchema.optional().meta({ examples: ['tr'] }),
    }),
  },
  responses: listResponse(PageListItemSchema),
});

// GET /admin/page/{pageId}
registry.registerPath({
  method: 'get',
  path: '/admin/page/{pageId}',
  tags: ['API-page'],
  summary: 'Get a page from the system',
  operationId: 'getAdminPage',
  security: [{ JWT: [] }],
  request: { params: z.object({ pageId: z.string() }) },
  responses: jsonResponse(PageSchema),
});

// POST /admin/page
registry.registerPath({
  method: 'post',
  path: '/admin/page',
  tags: ['API-page'],
  summary: 'Add a new page to the system',
  operationId: 'addPage',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_PAGE()) },
  responses: jsonResponse(PageSchema),
});

// DELETE /admin/page
registry.registerPath({
  method: 'delete',
  path: '/admin/page',
  tags: ['API-page'],
  summary: 'Delete a page or pages in the system',
  operationId: 'deletePages',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/page/{pageId}
registry.registerPath({
  method: 'patch',
  path: '/admin/page/{pageId}',
  tags: ['API-page'],
  summary: 'Update a page from the system',
  operationId: 'updatePage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ pageId: z.string() }),
    body: buildRequestBody(UPDATE_PAGE()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
