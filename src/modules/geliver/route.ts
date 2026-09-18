import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import {
  ADD_SHIPPING_SHIPMENT_ADDRESS,
  ADD_SHIPPING_SHIPMENT,
  CREATE_SHIPPING_SHIPMENT,
  RETURN_SHIPPING_SHIPMENT,
  UPDATE_SHIPPING_PACKAGE,
  SHIPPING_TEMPLATE,
  SHIPPING_PROVIDER,
  SHIPPING_WEBHOOK,
} from './validation';
import { errorResponse, buildRequestBody, jsonResponse } from '../../utils/common';
import {
  GeliverAddPackageTemplateResponseSchema,
  GeliverAddProviderResponseSchema,
  GeliverAddWebHookResponseSchema,
  GeliverAddressAddResponseSchema,
  GeliverAddressSchema,
  GeliverBalanceResponseSchema,
  GeliverDealerPriceResponseSchema,
  GeliverPackageTemplateListSchema,
  GeliverProviderListSchema,
  GeliverResultSchema,
  GeliverShipmentAddResponseSchema,
  GeliverShipmentListSchema,
  GeliverTransactionSchema,
} from './schema';

const geliverHeaders = z.object({
  'x-geliver-token': z.string().default('2b9e3373-4ef2-4907-9329-3bf8d4a7d929'),
});

const apiKeyGeliverHeaders = z.object({
  'x-api-key': z.string().default('9f3a1c2e-7b4d-4d8f-9a6e-2c1b7e8d5f3a'),
  'x-geliver-token': z.string().default('2b9e3373-4ef2-4907-9329-3bf8d4a7d929'),
});

// GET /public/shipping/prices
registerRoute({
  method: 'get',
  path: '/public/shipping/prices',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Get price list for parcel dimensions',
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
  responses: jsonResponse(GeliverDealerPriceResponseSchema),
});

// GET /public/shipping/templates
registerRoute({
  method: 'get',
  path: '/public/shipping/templates',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'List shipment templates',
  security: [],
  request: { headers: geliverHeaders },
  responses: jsonResponse(GeliverPackageTemplateListSchema),
});

// GET /public/shipping/shipment/labelPDF/{shipmentId}
registerRoute({
  method: 'get',
  path: '/public/shipping/shipment/labelPDF/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Download label PDF for a shipment',
  security: [],
  request: {
    headers: geliverHeaders,
    params: z.object({
      shipmentId: z.string().default('1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/pdf': { schema: z.string() } } },
    400: errorResponse,
  },
});

// GET /public/shipping/shipment/labelHTML/{shipmentId}
registerRoute({
  method: 'get',
  path: '/public/shipping/shipment/labelHTML/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Download responsive label HTML for a shipment',
  security: [],
  request: {
    headers: geliverHeaders,
    params: z.object({
      shipmentId: z.string().default('1186e0d8-dd49-4fb9-b5ec-2d6af4146e32'),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/html': { schema: z.string() } } },
    400: errorResponse,
  },
});

// POST /public/shipping/address
registerRoute({
  method: 'post',
  path: '/public/shipping/address',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create a shipping address',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyGeliverHeaders,
    body: buildRequestBody(ADD_SHIPPING_SHIPMENT_ADDRESS()),
  },
  responses: jsonResponse(GeliverAddressAddResponseSchema),
});

// GET /public/shipping/addresses
registerRoute({
  method: 'get',
  path: '/public/shipping/addresses',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'List shipping addresses',
  security: [{ 'X-API-KEY': [] }],
  request: {
    headers: apiKeyGeliverHeaders,
    query: z.object({
      page: z.number().int().optional().default(1),
      limit: z.number().int().optional().default(25),
      isRecipientAddress: z.coerce.boolean().optional(),
    }),
  },
  responses: jsonResponse(GeliverAddressSchema),
});

// POST /public/shipping/shipment
registerRoute({
  method: 'post',
  path: '/public/shipping/shipment',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create a shipment',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyGeliverHeaders, body: buildRequestBody(ADD_SHIPPING_SHIPMENT()) },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// POST /public/shipping/shipment/accept/{offerId}
registerRoute({
  method: 'post',
  path: '/public/shipping/shipment/accept/{offerId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Accept an offer (purchase label)',
  security: [{ 'X-API-KEY': [] }],
  request: { headers: apiKeyGeliverHeaders, params: z.object({ offerId: z.string() }) },
  responses: jsonResponse(GeliverTransactionSchema),
});

// GET /admin/shipping/balance/{organizationId}
registerRoute({
  method: 'get',
  path: '/admin/shipping/balance/{organizationId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Get organisation balance information',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ organizationId: z.string() }) },
  responses: jsonResponse(GeliverBalanceResponseSchema),
});

// GET /admin/shipping/address/{addressId}
registerRoute({
  method: 'get',
  path: '/admin/shipping/address/{addressId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Get a specific shipping address',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ addressId: z.string() }) },
  responses: jsonResponse(GeliverAddressAddResponseSchema),
});

// DELETE /admin/shipping/address/{addressId}
registerRoute({
  method: 'delete',
  path: '/admin/shipping/address/{addressId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Delete a shipping address',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ addressId: z.string() }) },
  responses: jsonResponse(GeliverResultSchema),
});

// GET /admin/shipping/shipments
registerRoute({
  method: 'get',
  path: '/admin/shipping/shipments',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'List shipments',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    query: z.object({
      page: z.number().int().default(1),
      limit: z.number().int().default(25),
      statusFilter: z.string().optional().default('GOT_OFFERS'),
    }),
  },
  responses: jsonResponse(GeliverShipmentListSchema),
});

// GET /admin/shipping/shipment/{shipmentId}
registerRoute({
  method: 'get',
  path: '/admin/shipping/shipment/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Get a specific shipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// PATCH /admin/shipping/shipment/update-package/{shipmentId}
registerRoute({
  method: 'patch',
  path: '/admin/shipping/shipment/update-package/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Update package dimensions for a shipment',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(UPDATE_SHIPPING_PACKAGE()),
  },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// DELETE /admin/shipping/shipment/cancel/{shipmentId}
registerRoute({
  method: 'delete',
  path: '/admin/shipping/shipment/cancel/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Cancel a shipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// POST /admin/shipping/shipment/clone/{shipmentId}
registerRoute({
  method: 'post',
  path: '/admin/shipping/shipment/clone/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Clone a shipment',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ shipmentId: z.string() }) },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// POST /admin/shipping/shipment/return/{shipmentId}
registerRoute({
  method: 'post',
  path: '/admin/shipping/shipment/return/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create a return shipment',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(RETURN_SHIPPING_SHIPMENT()),
  },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// POST /admin/shipping/shipment/accept-return/{shipmentId}
registerRoute({
  method: 'post',
  path: '/admin/shipping/shipment/accept-return/{shipmentId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create and purchase a return shipment label',
  security: [{ JWT: [] }],
  request: {
    headers: geliverHeaders,
    params: z.object({ shipmentId: z.string() }),
    body: buildRequestBody(RETURN_SHIPPING_SHIPMENT()),
  },
  responses: jsonResponse(GeliverTransactionSchema),
});

// POST /admin/shipping/shipment/create
registerRoute({
  method: 'post',
  path: '/admin/shipping/shipment/create',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'One-step label purchase',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(CREATE_SHIPPING_SHIPMENT()) },
  responses: jsonResponse(GeliverShipmentAddResponseSchema),
});

// POST /admin/shipping/template
registerRoute({
  method: 'post',
  path: '/admin/shipping/template',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Add a shipment template',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(SHIPPING_TEMPLATE()) },
  responses: jsonResponse(GeliverAddPackageTemplateResponseSchema),
});

// DELETE /admin/shipping/template/{templateId}
registerRoute({
  method: 'delete',
  path: '/admin/shipping/template/{templateId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Delete a shipment template',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ templateId: z.string() }) },
  responses: jsonResponse(GeliverResultSchema),
});

// GET /admin/shipping/providers
registerRoute({
  method: 'get',
  path: '/admin/shipping/providers',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'List shipping provider accounts',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders },
  responses: jsonResponse(GeliverProviderListSchema),
});

// POST /admin/shipping/provider
registerRoute({
  method: 'post',
  path: '/admin/shipping/provider',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create a shipping provider account',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(SHIPPING_PROVIDER()) },
  responses: jsonResponse(GeliverAddProviderResponseSchema),
});

// DELETE /admin/shipping/provider/{providerAccountId}
registerRoute({
  method: 'delete',
  path: '/admin/shipping/provider/{providerAccountId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Delete a shipping provider',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ providerAccountId: z.string() }) },
  responses: jsonResponse(GeliverResultSchema),
});

// GET /admin/shipping/webhooks
registerRoute({
  method: 'get',
  path: '/admin/shipping/webhooks',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'List shipping webhooks',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders },
  responses: jsonResponse(z.array(GeliverAddWebHookResponseSchema)),
});

// POST /admin/shipping/webhook
registerRoute({
  method: 'post',
  path: '/admin/shipping/webhook',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Create a shipping webhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(SHIPPING_WEBHOOK()) },
  responses: jsonResponse(GeliverAddWebHookResponseSchema),
});

// POST /admin/shipping/webhook/test
registerRoute({
  method: 'post',
  path: '/admin/shipping/webhook/test',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Test a shipping webhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, body: buildRequestBody(SHIPPING_WEBHOOK()) },
  responses: jsonResponse(GeliverResultSchema),
});

// DELETE /admin/shipping/webhook/{webhookId}
registerRoute({
  method: 'delete',
  path: '/admin/shipping/webhook/{webhookId}',
  tags: [SERVICE_TAGS.shippingGeliver.name],
  summary: 'Delete a shipping webhook',
  security: [{ JWT: [] }],
  request: { headers: geliverHeaders, params: z.object({ webhookId: z.string() }) },
  responses: jsonResponse(GeliverResultSchema),
});
