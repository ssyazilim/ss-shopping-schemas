import { z } from 'zod';
import { registry } from '../registry';
import { AddProductsSchema, ProductSchema, EditProductSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';
import { UpdateTaxSchema } from '../payment/schema';

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
  path: '/public/products',
  tags: ['Product'],
  summary: 'Get all products in the system',
  operationId: 'getProducts',
  request: {
    query: ListQuerySchema.extend({
      category: z.string().optional(),
      filters: z
        .string()
        .optional()
        .meta({ examples: ['color:red,size:XL'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/items/best-seller',
  tags: ['Product'],
  summary: 'Get all best products and variants in the system',
  operationId: 'getItems',
  request: {
    query: z.object({
      limit: z
        .number()
        .int()
        .optional()
        .meta({ examples: [10] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/products/XML/google',
  tags: ['Product'],
  summary: 'Get all products in the system with Google XML format',
  operationId: 'getProductsGoogleXML',
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/products/XML/yandex',
  tags: ['Product'],
  summary: 'Get all products in the system with Yandex XML format',
  operationId: 'getProductsYandexXML',
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/product/{productId}',
  tags: ['Product'],
  summary: 'Get a product from the system',
  operationId: 'getProduct',
  request: {
    params: z.object({ productId: z.string() }),
    query: z.object({
      locale: z
        .string()
        .optional()
        .meta({ examples: ['tr'] }),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/products/count',
  tags: ['Product'],
  summary: 'Check product and variant count in the system',
  operationId: 'countProducts',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/products',
  tags: ['Product'],
  summary: 'Add a new products to the system',
  operationId: 'addProducts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddProductsSchema) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/products/update-sku',
  tags: ['Product'],
  summary: 'Update sku for all items in the system',
  operationId: 'updateSkuForItems',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/products/update-tax',
  tags: ['Product'],
  summary: 'Update tax for all items in the system',
  operationId: 'updateTaxForItems',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UpdateTaxSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/product',
  tags: ['Product'],
  summary: 'Add a new product to system',
  operationId: 'addProduct',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ProductSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/product',
  tags: ['Product'],
  summary: 'Delete a product or products in the system',
  operationId: 'deleteProduct',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
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
