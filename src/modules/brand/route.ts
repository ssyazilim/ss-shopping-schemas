import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_BRAND, UPDATE_BRAND } from './validation';
import { BrandSchema } from './schema';
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

// GET /public/brands
registerRoute({
  method: 'get',
  path: '/public/brands',
  tags: [API_TAGS.brand.name],
  summary: 'Get all brands in the system',
  request: { query: ListQuerySchema },
  responses: listResponse(BrandSchema),
});

// GET /public/brand/{brandId}
registerRoute({
  method: 'get',
  path: '/public/brand/{brandId}',
  tags: [API_TAGS.brand.name],
  summary: 'Get a brand from the system',
  request: { params: z.object({ brandId: z.string() }) },
  responses: jsonResponse(BrandSchema),
});

// POST /admin/brand
registerRoute({
  method: 'post',
  path: '/admin/brand',
  tags: [API_TAGS.brand.name],
  summary: 'Add new brands to the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_BRAND()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/brand
registerRoute({
  method: 'delete',
  path: '/admin/brand',
  tags: [API_TAGS.brand.name],
  summary: 'Delete brands from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/brand/{brandId}
registerRoute({
  method: 'patch',
  path: '/admin/brand/{brandId}',
  tags: [API_TAGS.brand.name],
  summary: 'Update a brand from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ brandId: z.string() }),
    body: buildRequestBody(UPDATE_BRAND()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
