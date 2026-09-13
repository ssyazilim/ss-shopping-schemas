import { z } from 'zod';
import { registry } from '../registry';
import { ADD_VARIANT, ADD_VARIANTS, UPDATE_VARIANT, DELETE_FOR_VARIANT } from './validation';
import { VariantSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/variants
registry.registerPath({
  method: 'get',
  path: '/public/variants',
  tags: ['API-product-variant'],
  summary: 'Get all variants in the system',
  operationId: 'getVariants',
  request: { query: ListQuerySchema },
  responses: listResponse(VariantSchema),
});

// GET /public/variant/{productId}
registry.registerPath({
  method: 'get',
  path: '/public/variant/{productId}',
  tags: ['API-product-variant'],
  summary: 'Get a product variants from the system',
  operationId: 'getProductVariants',
  request: { params: z.object({ productId: z.string() }) },
  responses: listResponse(VariantSchema),
});

// POST /admin/variant/{productId}
registry.registerPath({
  method: 'post',
  path: '/admin/variant/{productId}',
  tags: ['API-product-variant'],
  summary: 'Add a new variant to system',
  operationId: 'addVariant',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ADD_VARIANT()),
  },
  responses: jsonResponse(VariantSchema),
});

// PATCH /admin/variant/{productId}
registry.registerPath({
  method: 'patch',
  path: '/admin/variant/{productId}',
  tags: ['API-product-variant'],
  summary: 'Update a variant in the system',
  operationId: 'updateVariant',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(UPDATE_VARIANT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /admin/variant
registry.registerPath({
  method: 'delete',
  path: '/admin/variant',
  tags: ['API-product-variant'],
  summary: 'Delete a variant or variants in the system',
  operationId: 'deleteVariant',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_FOR_VARIANT()) },
  responses: jsonResponse(DeleteResultSchema),
});

// POST /admin/variants/{productId}
registry.registerPath({
  method: 'post',
  path: '/admin/variants/{productId}',
  tags: ['API-product-variant'],
  summary: 'Add a new variants to product in the system',
  operationId: 'addVariantsMulti',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_VARIANTS()) },
  responses: listResponse(VariantSchema),
});
