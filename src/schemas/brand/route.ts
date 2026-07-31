import { z } from 'zod';
import { registry } from '../registry';
import { AddBrandSchema, UpdateBrandSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

// GET /public/brands
registry.registerPath({
  method: 'get',
  path: '/public/brands',
  tags: ['Brand'],
  summary: 'Get all brands in the system',
  operationId: 'getBrands',
  request: { query: ListQuerySchema },
  responses,
});

// GET /public/brand/{brandId}
registry.registerPath({
  method: 'get',
  path: '/public/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Get a brand from the system',
  operationId: 'getBrand',
  request: { params: z.object({ brandId: z.string() }) },
  responses,
});

// POST /admin/brand
registry.registerPath({
  method: 'post',
  path: '/admin/brand',
  tags: ['Brand'],
  summary: 'Add new brands to the system',
  operationId: 'addBrand',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddBrandSchema) },
  responses,
});

// DELETE /admin/brand
registry.registerPath({
  method: 'delete',
  path: '/admin/brand',
  tags: ['Brand'],
  summary: 'Delete brands from the system',
  operationId: 'deleteBrands',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

// PATCH /admin/brand/{brandId}
registry.registerPath({
  method: 'patch',
  path: '/admin/brand/{brandId}',
  tags: ['Brand'],
  summary: 'Update a brand from the system',
  operationId: 'updateBrand',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ brandId: z.string() }),
    body: buildRequestBody(UpdateBrandSchema),
  },
  responses,
});
