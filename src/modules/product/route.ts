import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_PRODUCT, UPDATE_PRODUCT } from './validation';
import { ProductSchema, BestProductsSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
  messageResponse,
  xmlResponse,
} from '../../utils/common';
import { UPDATE_TAX } from '../company/validation';

// GET /public/products
registerRoute({
  method: 'get',
  path: '/public/products',
  tags: [API_TAGS.product.name],
  summary: 'Get all products in the system',
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
registerRoute({
  method: 'get',
  path: '/public/items/best-seller',
  tags: [API_TAGS.product.name],
  summary: 'Get all best products and variants in the system',
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
registerRoute({
  method: 'get',
  path: '/public/products/XML/google',
  tags: [API_TAGS.product.name],
  summary: 'Get all products in the system with Google XML format',
  responses: xmlResponse('Google Merchant product feed'),
});

// GET /public/products/XML/yandex
registerRoute({
  method: 'get',
  path: '/public/products/XML/yandex',
  tags: [API_TAGS.product.name],
  summary: 'Get all products in the system with Yandex XML format',
  responses: xmlResponse('Yandex product feed'),
});

// GET /public/product/{productId}
registerRoute({
  method: 'get',
  path: '/public/product/{productId}',
  tags: [API_TAGS.product.name],
  summary: 'Get a product from the system',
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
registerRoute({
  method: 'get',
  path: '/admin/products/count',
  tags: [API_TAGS.product.name],
  summary: 'Check product and variant count in the system',
  security: [{ JWT: [] }],
  responses: jsonResponse(z.object({ productCount: z.number(), variantCount: z.number() })),
});

// GET /admin/products/update-sku
registerRoute({
  method: 'get',
  path: '/admin/products/update-sku',
  tags: [API_TAGS.product.name],
  summary: 'Update sku for all items in the system',
  security: [{ JWT: [] }],
  responses: messageResponse(),
});

// PATCH /admin/products/update-tax
registerRoute({
  method: 'patch',
  path: '/admin/products/update-tax',
  tags: [API_TAGS.product.name],
  summary: 'Update tax for all items in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UPDATE_TAX()) },
  responses: jsonResponse(z.object({ product: UpdateResultSchema, variant: UpdateResultSchema })),
});

// POST /admin/product
registerRoute({
  method: 'post',
  path: '/admin/product',
  tags: [API_TAGS.product.name],
  summary: 'Add a new product to system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_PRODUCT()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/product
registerRoute({
  method: 'delete',
  path: '/admin/product',
  tags: [API_TAGS.product.name],
  summary: 'Delete a product or products in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/product/{productId}
registerRoute({
  method: 'patch',
  path: '/admin/product/{productId}',
  tags: [API_TAGS.product.name],
  summary: 'Update a product in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(UPDATE_PRODUCT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// GET /admin/products
registerRoute({
  method: 'get',
  path: '/admin/products',
  tags: [API_TAGS.product.name],
  summary: 'Get all products in the system for the admin panel',
  security: [{ JWT: [] }],
  request: { query: ListQuerySchema },
  responses: listResponse(ProductSchema),
});
