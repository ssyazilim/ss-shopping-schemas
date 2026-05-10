import { z } from 'zod';
import { registry } from '../registry';

const ShippingItemSchema = z.object({
  title: z.string().meta({ examples: ['Lorem ipsum dolor sit amet'] }),
  quantity: z
    .number()
    .int()
    .meta({ examples: [2] }),
});

const ShippingOrderInfoSchema = registry.register(
  'ShippingOrderInfo',
  z.object({
    sourceCode: z.string().meta({ examples: ['API'] }),
    sourceIdentifier: z.string().meta({ examples: ['http://localhost:5000'] }),
    orderNumber: z.string().meta({ examples: ['1234567890'] }),
    totalAmount: z
      .number()
      .int()
      .optional()
      .meta({ examples: [250] }),
    totalAmountCurrency: z
      .string()
      .optional()
      .meta({ examples: ['TL'] }),
  }),
);

export const AddShippingAddressSchema = registry.register(
  'AddShippingAddress',
  z.object({
    name: z.string().meta({ examples: ['Ufuk Sarı'] }),
    email: z.email().meta({ examples: ['test@example.com'] }),
    phone: z.string().meta({ examples: ['+905309464864'] }),
    address1: z.string().meta({ examples: ['Belek mahallesi Atatürk caddesi No: 11/1'] }),
    address2: z
      .string()
      .optional()
      .meta({ examples: [''] }),
    countryCode: z.string().meta({ examples: ['TR'] }),
    cityName: z.string().meta({ examples: ['Antalya'] }),
    cityCode: z.string().meta({ examples: ['07'] }),
    districtName: z.string().meta({ examples: ['Belek'] }),
    zip: z.string().meta({ examples: ['07500'] }),
    isRecipientAddress: z.boolean().meta({ examples: [true] }),
    shortName: z.string().meta({ examples: ['UFUKSARI'] }),
  }),
);

export const AddShippingShipmentSchema = registry.register(
  'AddShippingShipment',
  z.object({
    test: z.boolean().meta({ examples: [true] }),
    items: z.array(ShippingItemSchema),
    senderAddressID: z.string().meta({ examples: ['7f76e149-9d63-4993-b62a-ac0eee05f830'] }),
    returnAddressID: z.string().optional(),
    recipientAddressID: z.string().meta({ examples: ['64c4f70f-83b8-4195-85c3-cb5a16751e3d'] }),
    order: ShippingOrderInfoSchema,
    parcelTemplateID: z.string().meta({ examples: ['3cb149af-8c2b-4712-863a-25b39c1dbe0a'] }),
    productPaymentOnDelivery: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
  }),
);

export const CreateShippingShipmentSchema = registry.register(
  'CreateShippingShipment',
  AddShippingShipmentSchema.extend({
    providerServiceCode: z
      .string()
      .optional()
      .meta({ examples: ['GELIVER_STANDART'] }),
    providerAccountID: z
      .string()
      .optional()
      .meta({ examples: [''] }),
  }),
);

const ShippingAddress2Schema = registry.register(
  'ShippingReturnAddress',
  z.object({
    name: z.string().meta({ examples: ['İzzet Sarı'] }),
    email: z.email().optional(),
    phone: z
      .string()
      .optional()
      .meta({ examples: ['+905332810759'] }),
    address1: z.string().optional(),
    countryCode: z
      .string()
      .optional()
      .meta({ examples: ['TR'] }),
    cityCode: z
      .string()
      .optional()
      .meta({ examples: ['07'] }),
    districtName: z
      .string()
      .optional()
      .meta({ examples: ['Serik'] }),
  }),
);

export const ReturnShippingShipmentSchema = registry.register(
  'ReturnShippingShipment',
  z.object({
    isReturn: z
      .boolean()
      .optional()
      .meta({ examples: [true] }),
    providerServiceCode: z
      .string()
      .optional()
      .meta({ examples: ['GELIVER_STANDART'] }),
    count: z
      .number()
      .int()
      .optional()
      .meta({ examples: [1] }),
    senderAddress: ShippingAddress2Schema.optional(),
  }),
);

export const UpdateShippingPackageSchema = registry.register(
  'UpdateShippingPackage',
  z.object({
    length: z
      .string()
      .optional()
      .meta({ examples: ['20'] }),
    width: z
      .string()
      .optional()
      .meta({ examples: ['15'] }),
    height: z
      .string()
      .optional()
      .meta({ examples: ['10'] }),
    weight: z
      .string()
      .optional()
      .meta({ examples: ['0.8'] }),
  }),
);

export const ShippingTemplateSchema = registry.register(
  'ShippingTemplate',
  z.object({
    name: z.string().meta({ examples: ['kilim-olcusu'] }),
    length: z.string().meta({ examples: ['100'] }),
    width: z.string().meta({ examples: ['50'] }),
    height: z.string().meta({ examples: ['2'] }),
    weight: z.string().meta({ examples: ['5'] }),
    distanceUnit: z
      .string()
      .optional()
      .meta({ examples: ['cm'] }),
    massUnit: z
      .string()
      .optional()
      .meta({ examples: ['kg'] }),
  }),
);

export const ShippingProviderSchema = registry.register(
  'ShippingProvider',
  z.object({
    username: z.string().meta({ examples: ['test'] }),
    password: z
      .string()
      .optional()
      .meta({ examples: ['pass'] }),
    providerCode: z.string().meta({ examples: ['SURAT'] }),
    version: z
      .number()
      .int()
      .meta({ examples: [1] }),
    isActive: z.boolean().meta({ examples: [false] }),
    isC2C: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    sharable: z.boolean().meta({ examples: [true] }),
    isTest: z
      .boolean()
      .optional()
      .meta({ examples: [false] }),
    parameters: z.record(z.string(), z.unknown()).optional(),
  }),
);

export const ShippingWebhookSchema = registry.register(
  'ShippingWebhook',
  z.object({
    url: z.string().meta({ examples: ['https://webhook.site/test'] }),
    type: z.string().meta({ examples: ['TRACK_UPDATED'] }),
  }),
);
