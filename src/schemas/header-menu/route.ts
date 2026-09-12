import { registry } from '../registry';
import { UPDATE_HEADER_MENU } from './validation';
import { HeaderMenuSchema } from './schema';
import { buildRequestBody, jsonResponse } from '../common';

// GET /public/header-menu
registry.registerPath({
  method: 'get',
  path: '/public/header-menu',
  tags: ['API-header-menu'],
  summary: 'Get the header menu of the storefront',
  operationId: 'getHeaderMenu',
  responses: jsonResponse(HeaderMenuSchema),
});

// PATCH /admin/header-menu
registry.registerPath({
  method: 'patch',
  path: '/admin/header-menu',
  tags: ['API-header-menu'],
  summary: 'Update the header menu of the storefront',
  operationId: 'updateHeaderMenu',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UPDATE_HEADER_MENU()) },
  responses: jsonResponse(HeaderMenuSchema),
});
