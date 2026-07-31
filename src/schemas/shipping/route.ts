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

// GET /public/shipping/prices
registry.registerPath({
  method: 'get',
  path: '/public/shipping/prices',
  tags: ['Shipping'],
  summary: 'Get price list for parcel dimensions',
  operationId: 'getShippingPrices',
  request: {
    query: z.object({
      paramType: z.string().meta({ examples: ['parcel'] }),
      length: z
        .number()
        .int()
        .meta({ examples: [10] }),
      width: z
        .number()
        .int()
        .meta({ examples: [10] }),
      height: z
        .number()
        .int()
        .meta({ examples: [10] }),
      weight: z
        .number()
        .int()
        .meta({ examples: [1] }),
      distanceUnit: z
        .string()
        .optional()
        .meta({ examples: ['cm'] }),
      massUnit: z
        .string()
        .optional()
        .meta({ examples: ['kg'] }),
    }),
  },
  responses,
});

// GET /public/shipping/templates
registry.registerPath({
  method: 'get',
  path: '/public/shipping/templates',
  tags: ['Shipping'],
  summary: 'List shipment templates',
  operationId: 'getShippingTemplates',
  responses,
});

// GET /public/shipping/shipment/labelPDF/{shipmentId}
registry.registerPath({
  method: 'get',
  path: '/public/shipping/shipment/labelPDF/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Download label PDF for a shipment',
  operationId: 'getShippingShipmentLabelPDF',
  request: {
    params: z.object({
      shipmentId: z.string().meta({ examples: ['1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
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
  tags: ['Shipping'],
  summary: 'Download responsive label HTML for a shipment',
  operationId: 'getShippingShipmentLabelHTML',
  request: {
    params: z.object({
      shipmentId: z.string().meta({ examples: ['1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'] }),
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
  tags: ['Shipping'],
  summary: 'Create a shipping address',
  operationId: 'addShippingAddress',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(AddShippingAddressSchema) },
  responses,
});

// GET /public-key/shipping/addresses
registry.registerPath({
  method: 'get',
  path: '/public-key/shipping/addresses',
  tags: ['Shipping'],
  summary: 'List shipping addresses',
  operationId: 'getShippingAddresses',
  security: [{ 'X-API-KEY': [] }],
  request: {
    query: z.object({
      page: z
        .number()
        .int()
        .optional()
        .meta({ examples: [1] }),
      limit: z
        .number()
        .int()
        .optional()
        .meta({ examples: [25] }),
      isRecipientAddress: z.coerce.boolean().optional(),
    }),
  },
  responses,
});

// POST /public-key/shipping/shipment
registry.registerPath({
  method: 'post',
  path: '/public-key/shipping/shipment',
  tags: ['Shipping'],
  summary: 'Create a shipment',
  operationId: 'addShippingShipment',
  security: [{ 'X-API-KEY': [] }],
  request: { body: buildRequestBody(AddShippingShipmentSchema) },
  responses,
});

// POST /public-key/shipping/shipment/accept/{offerId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/accept/{offerId}',
  tags: ['Shipping'],
  summary: 'Accept an offer (purchase label)',
  operationId: 'acceptShippingOffer',
  security: [{ 'X-API-KEY': [] }],
  request: { params: z.object({ offerId: z.string() }) },
  responses,
});

// GET /admin/shipping/balance/{organizationId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/balance/{organizationId}',
  tags: ['Shipping'],
  summary: 'Get organisation balance information',
  operationId: 'getShippingBalance',
  security: [{ JWT: [] }],
  request: { params: z.object({ organizationId: z.string() }) },
  responses,
});

// GET /admin/shipping/address/{addressId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/address/{addressId}',
  tags: ['Shipping'],
  summary: 'Get a specific shipping address',
  operationId: 'getShippingAddress',
  security: [{ JWT: [] }],
  request: { params: z.object({ addressId: z.string() }) },
  responses,
});

// DELETE /admin/shipping/address/{addressId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/address/{addressId}',
  tags: ['Shipping'],
  summary: 'Delete a shipping address',
  operationId: 'deleteShippingAddress',
  security: [{ JWT: [] }],
  request: { params: z.object({ addressId: z.string() }) },
  responses,
});

// GET /admin/shipping/shipments
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/shipments',
  tags: ['Shipping'],
  summary: 'List shipments',
  operationId: 'getShippingShipments',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      page: z
        .number()
        .int()
        .meta({ examples: [1] }),
      limit: z
        .number()
        .int()
        .meta({ examples: [25] }),
      statusFilter: z
        .string()
        .optional()
        .meta({ examples: ['GOT_OFFERS'] }),
    }),
  },
  responses,
});

// GET /admin/shipping/shipment/{shipmentId}
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/shipment/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Get a specific shipment',
  operationId: 'getShippingShipment',
  security: [{ JWT: [] }],
  request: { params: z.object({ shipmentId: z.string() }) },
  responses,
});

// PATCH /admin/shipping/shipment/update-package/{shipmentId}
registry.registerPath({
  method: 'patch',
  path: '/admin/shipping/shipment/update-package/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Update package dimensions for a shipment',
  operationId: 'patchShippingPackage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(UpdateShippingPackageSchema),
  },
  responses,
});

// DELETE /admin/shipping/shipment/cancel/{shipmentId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/shipment/cancel/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Cancel a shipment',
  operationId: 'deleteShippingShipment',
  security: [{ JWT: [] }],
  request: { params: z.object({ shipmentId: z.string() }) },
  responses,
});

// POST /admin/shipping/shipment/clone/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/clone/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Clone a shipment',
  operationId: 'cloneShippingShipment',
  security: [{ JWT: [] }],
  request: { params: z.object({ shipmentId: z.string() }) },
  responses,
});

// POST /admin/shipping/shipment/return/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/return/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Create a return shipment',
  operationId: 'returnShippingShipment',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(ReturnShippingShipmentSchema),
  },
  responses,
});

// POST /admin/shipping/shipment/accept-return/{shipmentId}
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/accept-return/{shipmentId}',
  tags: ['Shipping'],
  summary: 'Create and purchase a return shipment label',
  operationId: 'acceptShippingReturn',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(ReturnShippingShipmentSchema),
  },
  responses,
});

// POST /admin/shipping/shipment/create
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/shipment/create',
  tags: ['Shipping'],
  summary: 'One-step label purchase',
  operationId: 'createShippingShipment',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(CreateShippingShipmentSchema) },
  responses,
});

// POST /admin/shipping/template
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/template',
  tags: ['Shipping'],
  summary: 'Add a shipment template',
  operationId: 'createShippingTemplate',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ShippingTemplateSchema) },
  responses,
});

// DELETE /admin/shipping/template/{templateId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/template/{templateId}',
  tags: ['Shipping'],
  summary: 'Delete a shipment template',
  operationId: 'deleteShippingTemplate',
  security: [{ JWT: [] }],
  request: { params: z.object({ templateId: z.string() }) },
  responses,
});

// GET /admin/shipping/providers
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/providers',
  tags: ['Shipping'],
  summary: 'List shipping provider accounts',
  operationId: 'getShippingProviders',
  security: [{ JWT: [] }],
  responses,
});

// POST /admin/shipping/provider
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/provider',
  tags: ['Shipping'],
  summary: 'Create a shipping provider account',
  operationId: 'createShippingProvider',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ShippingProviderSchema) },
  responses,
});

// DELETE /admin/shipping/provider/{providerAccountId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/provider/{providerAccountId}',
  tags: ['Shipping'],
  summary: 'Delete a shipping provider',
  operationId: 'deleteShippingProvider',
  security: [{ JWT: [] }],
  request: { params: z.object({ providerAccountId: z.string() }) },
  responses,
});

// GET /admin/shipping/webhooks
registry.registerPath({
  method: 'get',
  path: '/admin/shipping/webhooks',
  tags: ['Shipping'],
  summary: 'List shipping webhooks',
  operationId: 'getShippingWebhooks',
  security: [{ JWT: [] }],
  responses,
});

// POST /admin/shipping/webhook
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/webhook',
  tags: ['Shipping'],
  summary: 'Create a shipping webhook',
  operationId: 'createShippingWebhook',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ShippingWebhookSchema) },
  responses,
});

// POST /admin/shipping/webhook/test
registry.registerPath({
  method: 'post',
  path: '/admin/shipping/webhook/test',
  tags: ['Shipping'],
  summary: 'Test a shipping webhook',
  operationId: 'testShippingWebhook',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ShippingWebhookSchema) },
  responses,
});

// DELETE /admin/shipping/webhook/{webhookId}
registry.registerPath({
  method: 'delete',
  path: '/admin/shipping/webhook/{webhookId}',
  tags: ['Shipping'],
  summary: 'Delete a shipping webhook',
  operationId: 'deleteShippingWebhook',
  security: [{ JWT: [] }],
  request: { params: z.object({ webhookId: z.string() }) },
  responses,
});
