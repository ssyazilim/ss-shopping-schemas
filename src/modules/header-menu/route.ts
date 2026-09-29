import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import {
  ADD_MENU_ITEM,
  ADD_MENU_SUB_ITEM,
  DELETE_HEADER_MENU,
  UPDATE_HEADER_MENU,
} from './validation';
import { HeaderMenuItemSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  listResponse,
  jsonResponse,
  DeleteResultSchema,
  InsertResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/header-menu
registerRoute({
  method: 'get',
  path: '/public/header-menu',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Get the header menu of the storefront',
  request: { query: ListQuerySchema },
  responses: listResponse(HeaderMenuItemSchema),
});

// POST /admin/header-menu
registerRoute({
  method: 'post',
  path: '/admin/header-menu',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Add a new top level item to the header menu',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_MENU_ITEM()) },
  responses: jsonResponse(InsertResultSchema),
});

// POST /admin/header-menu/sub-item
registerRoute({
  method: 'post',
  path: '/admin/header-menu/sub-item',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Add a new sub item under a top level header menu item',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_MENU_SUB_ITEM()) },
  responses: jsonResponse(UpdateResultSchema),
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

// DELETE /admin/header-menu
registerRoute({
  method: 'delete',
  path: '/admin/header-menu',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Delete a top level header menu item by labelKey',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_HEADER_MENU()) },
  responses: jsonResponse(DeleteResultSchema),
});

// DELETE /admin/header-menu/sub-item
registerRoute({
  method: 'delete',
  path: '/admin/header-menu/sub-item',
  tags: [API_TAGS.headerMenu.name],
  summary: 'Delete a header menu sub item by labelKey',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_HEADER_MENU()) },
  responses: jsonResponse(UpdateResultSchema),
});
