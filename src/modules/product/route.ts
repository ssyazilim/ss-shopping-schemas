import { z } from 'zod';
import { registry } from '../registry';
import { ADD_PRODUCT, UPDATE_PRODUCT } from './validation';
import { ProductSchema, BestProductsSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
  messageResponse,
  xmlResponse,
} from '../common';
import { UPDATE_TAX } from '../company/validation';

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
  responses: listResponse(ProductSchema),
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
  responses: listResponse(BestProductsSchema),
});

// GET /public/products/XML/google
registry.registerPath({
  method: 'get',
  path: '/public/products/XML/google',
  tags: ['API-product'],
  summary: 'Get all products in the system with Google XML format',
  operationId: 'getProductsGoogleXML',
  responses: xmlResponse('Google Merchant product feed'),
});

// GET /public/products/XML/yandex
registry.registerPath({
  method: 'get',
  path: '/public/products/XML/yandex',
  tags: ['API-product'],
  summary: 'Get all products in the system with Yandex XML format',
  operationId: 'getProductsYandexXML',
  responses: xmlResponse('Yandex product feed'),
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
  responses: jsonResponse(ProductSchema),
});

// GET /admin/products/count
registry.registerPath({
  method: 'get',
  path: '/admin/products/count',
  tags: ['API-product'],
  summary: 'Check product and variant count in the system',
  operationId: 'countProducts',
  security: [{ JWT: [] }],
  responses: jsonResponse(z.object({ productCount: z.number(), variantCount: z.number() })),
});

// GET /admin/products/update-sku
registry.registerPath({
  method: 'get',
  path: '/admin/products/update-sku',
  tags: ['API-product'],
  summary: 'Update sku for all items in the system',
  operationId: 'updateSkuForItems',
  security: [{ JWT: [] }],
  responses: messageResponse(),
});

// PATCH /admin/products/update-tax
registry.registerPath({
  method: 'patch',
  path: '/admin/products/update-tax',
  tags: ['API-product'],
  summary: 'Update tax for all items in the system',
  operationId: 'updateTaxForItems',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UPDATE_TAX()) },
  responses: jsonResponse(z.object({ product: UpdateResultSchema, variant: UpdateResultSchema })),
});

// POST /admin/product
registry.registerPath({
  method: 'post',
  path: '/admin/product',
  tags: ['API-product'],
  summary: 'Add a new product to system',
  operationId: 'addProduct',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_PRODUCT()) },
  responses: jsonResponse(ProductSchema),
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
  responses: jsonResponse(DeleteResultSchema),
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
    body: buildRequestBody(UPDATE_PRODUCT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// GET /admin/products
registry.registerPath({
  method: 'get',
  path: '/admin/products',
  tags: ['API-product'],
  summary: 'Get all products in the system for the admin panel',
  operationId: 'getAdminProducts',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(ProductSchema),
});
