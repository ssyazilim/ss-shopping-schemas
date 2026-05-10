import { z } from 'zod';
import { registry } from '../registry';
import { AddProductsSchema, EditProductSchema, ProductImageSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
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
  path: '/public/products',
  tags: ['Product'],
  summary: 'Get all products in the system',
  operationId: 'getProducts',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/product/{productId}',
  tags: ['Product'],
  summary: 'Get a product from the system',
  operationId: 'getProduct',
  request: { params: z.object({ productId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/products',
  tags: ['Product'],
  summary: 'Add new products to the system',
  operationId: 'addProducts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddProductsSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/product/{productId}',
  tags: ['Product'],
  summary: 'Update a product in the system',
  operationId: 'updateProduct',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(EditProductSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/product',
  tags: ['Product'],
  summary: 'Delete products from the system',
  operationId: 'deleteProducts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/product/image/{productId}',
  tags: ['Product'],
  summary: 'Add image to a product',
  operationId: 'addProductImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ProductImageSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/product/image/{productId}',
  tags: ['Product'],
  summary: 'Delete image from a product',
  operationId: 'deleteProductImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ProductImageSchema),
  },
  responses,
});
