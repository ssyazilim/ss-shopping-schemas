import { z } from 'zod';
import { registry } from '../registry';
import { ADD_BRAND, UPDATE_BRAND } from './validation';
import { BrandSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/brands
registry.registerPath({
  method: 'get',
  path: '/public/brands',
  tags: ['API-brand'],
  summary: 'Get all brands in the system',
  operationId: 'getBrands',
  request: { query: ListQuerySchema },
  responses: listResponse(BrandSchema),
});

// GET /public/brand/{brandId}
registry.registerPath({
  method: 'get',
  path: '/public/brand/{brandId}',
  tags: ['API-brand'],
  summary: 'Get a brand from the system',
  operationId: 'getBrand',
  request: { params: z.object({ brandId: z.string() }) },
  responses: jsonResponse(BrandSchema),
});

// POST /admin/brand
registry.registerPath({
  method: 'post',
  path: '/admin/brand',
  tags: ['API-brand'],
  summary: 'Add new brands to the system',
  operationId: 'addBrand',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_BRAND()) },
  responses: jsonResponse(BrandSchema),
});

// DELETE /admin/brand
registry.registerPath({
  method: 'delete',
  path: '/admin/brand',
  tags: ['API-brand'],
  summary: 'Delete brands from the system',
  operationId: 'deleteBrands',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/brand/{brandId}
registry.registerPath({
  method: 'patch',
  path: '/admin/brand/{brandId}',
  tags: ['API-brand'],
  summary: 'Update a brand from the system',
  operationId: 'updateBrand',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ brandId: z.string() }),
    body: buildRequestBody(UPDATE_BRAND()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
