import { z } from 'zod';
import { registry } from '../registry';
import {
  AddShippingAddressSchema,
  AddShippingShipmentSchema,
  CreateShippingShipmentSchema,
  ReturnShippingShipmentSchema,
  UpdateShippingPackageSchema,
  ShippingTemplateSchema,
  ShippingProviderSchema,
  ShippingWebhookSchema,
} from './schema';
import { responses, buildRequestBody } from '../common';

const geliverHeaders = z.object({
  'x-geliver-token': z.string().default('2b9e3373-4ef2-4907-9329-3bf8d4a7d929'),
});

const apiKeyGeliverHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
  'x-geliver-token': z.string().default('2b9e3373-4ef2-4907-9329-3bf8d4a7d929'),
});

// GET /public/shipping/prices
registry.registerPath({
  method: 'get',
  path: '/public/shipping/prices',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Get price list for parcel dimensions',
  operationId: 'getShippingPrices',
  security: [],
  request: {
    headers: geliverHeaders,
    query: z.object({
      paramType: z.string().default('all'),
      length: z.number().int().default(20),
      width: z.number().int().default(15),
      height: z.number().int().default(10),
      weight: z.number().default(0.8),
      distanceUnit: z.string().optional().default('cm'),
      massUnit: z.string().optional().default('kg'),
    }),
  },
  responses,
});

// GET /public/shipping/templates
registry.registerPath({
  method: 'get',
  path: '/public/shipping/templates',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'List shipment templates',
  operationId: 'getShippingTemplates',
  security: [],
  request: { headers: geliverHeaders },
  responses,
});

// GET /public/shipping/shipment/labelPDF/{shipmentId}
registry.registerPath({
  method: 'get',
  path: '/public/shipping/shipment/labelPDF/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Download label PDF for a shipment',
  operationId: 'getShippingShipmentLabelPDF',
  security: [],
  request: {
    headers: geliverHeaders,
    params: z.object({
      shipmentId: z.string().default('1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/pdf': { schema: z.string() } } },
    400: responses[400],
  },
});

// GET /public/shipping/shipment/labelHTML/{shipmentId}
registry.registerPath({
  method: 'get',
  path: '/public/shipping/shipment/labelHTML/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Download responsive label HTML for a shipment',
  operationId: 'getShippingShipmentLabelHTML',
  security: [],
  request: {
    headers: geliverHeaders,
    params: z.object({
      shipmentId: z.string().default('1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/html': { schema: z.string() } } },
    400: responses[400],
  },
});

// POST /public-key/shipping/address
registry.registerPath({
  method: 'post',
  path: '/public-key/shipping/address',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create a shipping address',
  operationId: 'addShippingAddress',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyGeliverHeaders, body: buildRequestBody(AddShippingAddressSchema) },
  responses,
});

// GET /public-key/shipping/addresses
registry.registerPath({
  method: 'get',
  path: '/public-key/shipping/addresses',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'List shipping addresses',
  operationId: 'getShippingAddresses',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyGeliverHeaders,
    query: z.object({
      page: z.number().int().optional().default(1),
      limit: z.number().int().optional().default(25),
      isRecipientAddress: z.coerce.boolean().optional(),
    }),
  },
  responses,
});

// POST /public-key/shipping/shipment
registry.registerPath({
  method: 'post',
  path: '/public-key/shipping/shipment',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create a shipment',
  operationId: 'addShippingShipment',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyGeliverHeaders, body: buildRequestBody(AddShippingShipmentSchema) },
  responses,
});

// POST /public-key/shipping/shipment/accept/{offerId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/accept/{offerId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Accept an offer (purchase label)',
  operationId: 'acceptShippingOffer',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyGeliverHeaders, params: z.object({ offerId: z.string() }) },
  responses,
});

// GET /admin/shipping/balance/{organizationId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/balance/{organizationId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Get organisation balance information',
  operationId: 'getShippingBalance',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ organizationId: z.string() }) },
  responses,
});

// GET /admin/shipping/address/{addressId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/address/{addressId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Get a specific shipping address',
  operationId: 'getShippingAddress',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ addressId: z.string() }) },
  responses,
});

// DELETE /admin/shipping/address/{addressId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/address/{addressId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Delete a shipping address',
  operationId: 'deleteShippingAddress',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ addressId: z.string() }) },
  responses,
});

// GET /admin/shipping/shipments
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/shipments',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'List shipments',
  operationId: 'getShippingShipments',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    query: z.object({
      page: z.number().int().default(1),
      limit: z.number().int().default(25),
      statusFilter: z.string().optional().default('GOT_OFFERS'),
    }),
  },
  responses,
});

// GET /admin/shipping/shipment/{shipmentId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/shipment/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Get a specific shipment',
  operationId: 'getShippingShipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses,
});

// PATCH /admin/shipping/shipment/update-package/{shipmentId}
registry.registerPath({
  method: 'patch',
  path: '/admin/shipping/shipment/update-package/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Update package dimensions for a shipment',
  operationId: 'patchShippingPackage',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(UpdateShippingPackageSchema),
  },
  responses,
});

// DELETE /admin/shipping/shipment/cancel/{shipmentId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/shipment/cancel/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Cancel a shipment',
  operationId: 'deleteShippingShipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses,
});

// POST /admin/shipping/shipment/clone/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/clone/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Clone a shipment',
  operationId: 'cloneShippingShipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses,
});

// POST /admin/shipping/shipment/return/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/return/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create a return shipment',
  operationId: 'returnShippingShipment',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(ReturnShippingShipmentSchema),
  },
  responses,
});

// POST /admin/shipping/shipment/accept-return/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/accept-return/{shipmentId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create and purchase a return shipment label',
  operationId: 'acceptShippingReturn',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(ReturnShippingShipmentSchema),
  },
  responses,
});

// POST /admin/shipping/shipment/create
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/create',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'One-step label purchase',
  operationId: 'createShippingShipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(CreateShippingShipmentSchema) },
  responses,
});

// POST /admin/shipping/template
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/template',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Add a shipment template',
  operationId: 'createShippingTemplate',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(ShippingTemplateSchema) },
  responses,
});

// DELETE /admin/shipping/template/{templateId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/template/{templateId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Delete a shipment template',
  operationId: 'deleteShippingTemplate',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ templateId: z.string() }) },
  responses,
});

// GET /admin/shipping/providers
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/providers',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'List shipping provider accounts',
  operationId: 'getShippingProviders',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders },
  responses,
});

// POST /admin/shipping/provider
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/provider',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create a shipping provider account',
  operationId: 'createShippingProvider',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(ShippingProviderSchema) },
  responses,
});

// DELETE /admin/shipping/provider/{providerAccountId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/provider/{providerAccountId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Delete a shipping provider',
  operationId: 'deleteShippingProvider',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ providerAccountId: z.string() }) },
  responses,
});

// GET /admin/shipping/webhooks
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/webhooks',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'List shipping webhooks',
  operationId: 'getShippingWebhooks',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders },
  responses,
});

// POST /admin/shipping/webhook
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/webhook',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Create a shipping webhook',
  operationId: 'createShippingWebhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(ShippingWebhookSchema) },
  responses,
});

// POST /admin/shipping/webhook/test
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/webhook/test',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Test a shipping webhook',
  operationId: 'testShippingWebhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(ShippingWebhookSchema) },
  responses,
});

// DELETE /admin/shipping/webhook/{webhookId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/webhook/{webhookId}',
  tags: ['SERVICE-shipping-geliver'],
  summary: 'Delete a shipping webhook',
  operationId: 'deleteShippingWebhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ webhookId: z.string() }) },
  responses,
});
