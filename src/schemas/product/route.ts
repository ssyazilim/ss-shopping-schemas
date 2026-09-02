import { z } from 'zod';
import { registry } from '../registry';
import { ProductSchema, EditProductSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';
import { UpdateTaxSchema } from '../company/schema';

// GET /public/products
registry.registerPath({
  method: 'get',
  path: '/public/products',
  tags: ['API-product'],
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

// GET /public/items/best-seller
registry.registerPath({
  method: 'get',
  path: '/public/items/best-seller',
  tags: ['API-product'],
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

// GET /public/products/XML/google
registry.registerPath({
  method: 'get',
  path: '/public/products/XML/google',
  tags: ['API-product'],
  summary: 'Get all products in the system with Google XML format',
  operationId: 'getProductsGoogleXML',
  responses,
});

// GET /public/products/XML/yandex
registry.registerPath({
  method: 'get',
  path: '/public/products/XML/yandex',
  tags: ['API-product'],
  summary: 'Get all products in the system with Yandex XML format',
  operationId: 'getProductsYandexXML',
  responses,
});

// GET /public/product/{productId}
registry.registerPath({
  method: 'get',
  path: '/public/product/{productId}',
  tags: ['API-product'],
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

// GET /admin/products/count
registry.registerPath({
  method: 'get',
  path: '/admin/products/count',
  tags: ['API-product'],
  summary: 'Check product and variant count in the system',
  operationId: 'countProducts',
  security: [{ JWT: [] }],
  responses,
});

// GET /admin/products/update-sku
registry.registerPath({
  method: 'get',
  path: '/admin/products/update-sku',
  tags: ['API-product'],
  summary: 'Update sku for all items in the system',
  operationId: 'updateSkuForItems',
  security: [{ JWT: [] }],
  responses,
});

// PATCH /admin/products/update-tax
registry.registerPath({
  method: 'patch',
  path: '/admin/products/update-tax',
  tags: ['API-product'],
  summary: 'Update tax for all items in the system',
  operationId: 'updateTaxForItems',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UpdateTaxSchema) },
  responses,
});

// POST /admin/product
registry.registerPath({
  method: 'post',
  path: '/admin/product',
  tags: ['API-product'],
  summary: 'Add a new product to system',
  operationId: 'addProduct',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ProductSchema) },
  responses,
});

// DELETE /admin/product
registry.registerPath({
  method: 'delete',
  path: '/admin/product',
  tags: ['API-product'],
  summary: 'Delete a product or products in the system',
  operationId: 'deleteProduct',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

// PATCH /admin/product/{productId}
registry.registerPath({
  method: 'patch',
  path: '/admin/product/{productId}',
  tags: ['API-product'],
  summary: 'Update a product in the system',
  operationId: 'updateProduct',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(EditProductSchema),
  },
  responses,
});
