import { z } from 'zod';
import { registry } from '../registry';
import { AddVariantSchema, AddVariantsMultiSchema, UpdateVariantSchema, DeleteForVariantSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/public/products/variants',
  tags: ['Product Variant'],
  summary: 'Get all variants in the system',
  operationId: 'getVariants',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/product/variants/{productId}',
  tags: ['Product Variant'],
  summary: 'Get a product variants from the system',
  operationId: 'getProductVariants',
  request: { params: z.object({ productId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/product/variants',
  tags: ['Product Variant'],
  summary: 'Add a new variants to system',
  operationId: 'addVariantsMulti',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddVariantsMultiSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/product/variants',
  tags: ['Product Variant'],
  summary: 'Delete a variant or variants in the system',
  operationId: 'deleteVariant',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteForVariantSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/product/variant/{productId}',
  tags: ['Product Variant'],
  summary: 'Add a new variant or variants to system',
  operationId: 'addVariant',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(AddVariantSchema),
  },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/product/variant/{productId}',
  tags: ['Product Variant'],
  summary: 'Update a variant in the system',
  operationId: 'updateVariant',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(UpdateVariantSchema),
  },
  responses,
});
