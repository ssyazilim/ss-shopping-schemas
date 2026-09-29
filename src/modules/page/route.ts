import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { PageContentSchema, PageSchema } from './schema';
import {
  jsonResponse,
  listResponse,
} from '../../utils/common';

// GET /public/pages
registerRoute({
  method: 'get',
  path: '/public/pages',
  tags: [API_TAGS.page.name],
  summary: 'Get storefront pages that are not drafts, without markdown',
  responses: listResponse(PageSchema),
});

// GET /public/page?path=
registerRoute({
  method: 'get',
  path: '/public/page',
  tags: [API_TAGS.page.name],
  summary: 'Get a storefront page by its path with the markdown from the content repository',
  request: { query: z.object({ path: PageSchema.shape.path }) },
  responses: jsonResponse(PageContentSchema),
});

// POST /admin/pages/sync
registerRoute({
  method: 'post',
  path: '/admin/pages/sync',
  tags: [API_TAGS.page.name],
  summary: 'Rebuild the stored pages from the content repository',
  security: [{ JWT: [] }],
  responses: listResponse(PageSchema),
});
