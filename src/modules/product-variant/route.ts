import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_VARIANT, ADD_VARIANTS, UPDATE_VARIANT, DELETE_FOR_VARIANT } from './validation';
import { VariantSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/variants
registerRoute({
  method: 'get',
  path: '/public/variants',
  tags: [API_TAGS.productVariant.name],
  summary: 'Get all variants in the system',
  request: { query: ListQuerySchema },
  responses: listResponse(VariantSchema),
});

// GET /public/variant/{productId}
registerRoute({
  method: 'get',
  path: '/public/variant/{productId}',
  tags: [API_TAGS.productVariant.name],
  summary: 'Get a product variants from the system',
  request: { params: z.object({ productId: z.string() }) },
  responses: listResponse(VariantSchema),
});

// POST /admin/variant/{productId}
registerRoute({
  method: 'post',
  path: '/admin/variant/{productId}',
  tags: [API_TAGS.productVariant.name],
  summary: 'Add a new variant to system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ADD_VARIANT()),
  },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /admin/variant/{productId}
registerRoute({
  method: 'patch',
  path: '/admin/variant/{productId}',
  tags: [API_TAGS.productVariant.name],
  summary: 'Update a variant in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(UPDATE_VARIANT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /admin/variant
registerRoute({
  method: 'delete',
  path: '/admin/variant',
  tags: [API_TAGS.productVariant.name],
  summary: 'Delete a variant or variants in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DELETE_FOR_VARIANT()) },
  responses: jsonResponse(DeleteResultSchema),
});

// POST /admin/variants/{productId}
registerRoute({
  method: 'post',
  path: '/admin/variants/{productId}',
  tags: [API_TAGS.productVariant.name],
  summary: 'Add a new variants to product in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_VARIANTS()) },
  responses: jsonResponse(InsertResultSchema),
});
