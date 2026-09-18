import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { UPDATE_HEADER_MENU } from './validation';
import { HeaderMenuSchema } from './schema';
import { buildRequestBody, jsonResponse, UpdateResultSchema } from '../../utils/common';

// GET /public/header-menu
registerRoute({
  method: 'get',
  path: '/public/header-menu',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Get the header menu of the storefront',
  responses: jsonResponse(HeaderMenuSchema),
});

// PATCH /admin/header-menu
registerRoute({
  method: 'patch',
  path: '/admin/header-menu',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Update the header menu of the storefront',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UPDATE_HEADER_MENU()) },
  responses: jsonResponse(UpdateResultSchema),
});
