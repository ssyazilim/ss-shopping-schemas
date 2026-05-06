import { z } from 'zod';
import { registry } from './registry.js';
import {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
} from './product.js';
import { PaginationQuerySchema, ApiErrorSchema, UuidSchema } from './common.js';

const ProductIdParam = z.object({
  id: UuidSchema,
});

// GET /products
registry.registerPath({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'Ürün listesi',
  request: {
    query: PaginationQuerySchema,
  },
  responses: {
    200: {
      description: 'Başarılı',
      content: {
        'application/json': {
          schema: z.object({
            data: z.array(ProductSchema),
            total: z.number().int(),
            page: z.number().int(),
            limit: z.number().int(),
          }),
        },
      },
    },
  },
});

// GET /products/:id
registry.registerPath({
  method: 'get',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Ürün detayı',
  request: {
    params: ProductIdParam,
  },
  responses: {
    200: {
      description: 'Başarılı',
      content: {
        'application/json': {
          schema: ProductSchema,
        },
      },
    },
    404: {
      description: 'Ürün bulunamadı',
      content: {
        'application/json': {
          schema: ApiErrorSchema,
        },
      },
    },
  },
});

// POST /products
registry.registerPath({
  method: 'post',
  path: '/products',
  tags: ['Products'],
  summary: 'Yeni ürün oluştur',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateProductSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Oluşturuldu',
      content: {
        'application/json': {
          schema: ProductSchema,
        },
      },
    },
    400: {
      description: 'Validasyon hatası',
      content: {
        'application/json': {
          schema: ApiErrorSchema,
        },
      },
    },
  },
});

// PATCH /products/:id
registry.registerPath({
  method: 'patch',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Ürün güncelle',
  request: {
    params: ProductIdParam,
    body: {
      content: {
        'application/json': {
          schema: UpdateProductSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Güncellendi',
      content: {
        'application/json': {
          schema: ProductSchema,
        },
      },
    },
    404: {
      description: 'Ürün bulunamadı',
      content: {
        'application/json': {
          schema: ApiErrorSchema,
        },
      },
    },
  },
});

// DELETE /products/:id
registry.registerPath({
  method: 'delete',
  path: '/products/{id}',
  tags: ['Products'],
  summary: 'Ürün sil',
  request: {
    params: ProductIdParam,
  },
  responses: {
    204: {
      description: 'Silindi',
    },
    404: {
      description: 'Ürün bulunamadı',
      content: {
        'application/json': {
          schema: ApiErrorSchema,
        },
      },
    },
  },
});
