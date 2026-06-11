import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';

export type IDealer = z.infer<typeof DealerSchema>;
export const DealerSchema = z.object({
  _id: z.string(),
  name: z.string(),
  code: z.string(),
  logo: z.string(),
});

export type IPackageTemplate = z.infer<typeof PackageTemplateSchema>;
export const PackageTemplateSchema = z.object({
  id: z.string(),
  length: z.string(),
  width: z.string(),
  height: z.string(),
  weight: z.string(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type IDealerPricesWithDesi = z.infer<typeof DealerPricesWithDesiSchema>;
export const DealerPricesWithDesiSchema = z.object({
  desi: z.string(),
  providerCode: z.string(),
  amount: z.string(),
  amountVat: z.string(),
  amountTax: z.string(),
  totalAmount: z.string(),
  currency: z.string(),
});

export type IDealerPricesWithDesiFormatted = z.infer<typeof DealerPricesWithDesiFormattedSchema>;
export const DealerPricesWithDesiFormattedSchema = DealerPricesWithDesiSchema.extend({
  _id: z.string(),
  name: z.string(),
  image: z.string(),
});

export type IGeliverBalanceResponse = z.infer<typeof GeliverBalanceResponseSchema>;
export const GeliverBalanceResponseSchema = z.object({
  result: z.boolean(),
  additionalMessage: z.string(),
  data: z.string(),
  dept: z.string(),
});

export type IGeliverDealerPriceResponse = z.infer<typeof GeliverDealerPriceResponseSchema>;
export const GeliverDealerPriceResponseSchema = z.object({
  desi: z.string(),
  offers: z.array(
    z.object({
      amount: z.string(),
      currency: z.string(),
      amountLocal: z.string(),
      amountVat: z.string(),
      amountLocalVat: z.string(),
      amountTax: z.string(),
      amountLocalTax: z.string(),
      totalAmount: z.string(),
      totalAmountLocal: z.string(),
      providerCode: z.string(),
      providerServiceCode: z.string(),
      transportType: z.string(),
    }),
  ),
});

export type IGeliverCity = z.infer<typeof GeliverCitySchema>;
export const GeliverCitySchema = z.object({
  name: z.string(),
  areaCode: z.string(),
  cityCode: z.string(),
  countryCode: z.string(),
});

export type IGeliverDistrict = z.infer<typeof GeliverDistrictSchema>;
export const GeliverDistrictSchema = z.object({
  name: z.string(),
  districtID: z.string(),
  cityCode: z.string(),
  regionCode: z.string(),
  countryCode: z.string(),
});

export type IGeliverAddressAdd = z.infer<typeof GeliverAddressAddSchema>;
export const GeliverAddressAddSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().optional(),
  countryCode: z.string(),
  cityName: z.string(),
  cityCode: z.string(),
  districtName: z.string(),
  districtID: z.string(),
  zip: z.string(),
  isRecipientAddress: z.boolean(),
  shortName: z.string(),
});

export type IGeliverAddressAddResponse = z.infer<typeof GeliverAddressAddResponseSchema>;
export const GeliverAddressAddResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  shortName: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: GeliverCitySchema.nullable(),
  cityCode: z.string(),
  cityName: z.string(),
  state: z.string(),
  zip: z.string(),
  district: GeliverDistrictSchema.nullable(),
  districtID: z.number(),
  districtName: z.string(),
  streetID: z.string(),
  streetName: z.string(),
  source: z.string(),
  countryCode: z.string(),
  countryName: z.string(),
  isDefaultSenderAddress: z.boolean(),
  isDefaultReturnAddress: z.boolean(),
  isRecipientAddress: z.boolean(),
  isInvoiceAddress: z.boolean(),
  isActive: z.boolean(),
});

export type IGeliverAddress = z.infer<typeof GeliverAddressSchema>;
export const GeliverAddressSchema = z.object({
  result: z.boolean(),
  additionalMessage: z.string(),
  limit: z.number(),
  page: z.number(),
  sort: z.string(),
  totalRows: z.number(),
  totalPages: z.number(),
  data: z.array(GeliverAddressAddResponseSchema),
});

export type IGeliverAddPackageTemplate = z.infer<typeof GeliverAddPackageTemplateSchema>;
export const GeliverAddPackageTemplateSchema = z.object({
  name: z.string(),
  distanceUnit: z.string(), // 'm' | 'cm' | 'mm'
  massUnit: z.string(), // 'kg' | 'g'
  length: z.string(),
  height: z.string(),
  width: z.string(),
  weight: z.string(),
});

export type IGeliverAddPackageTemplateResponse = z.infer<
  typeof GeliverAddPackageTemplateResponseSchema
>;
export const GeliverAddPackageTemplateResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  length: z.string(),
  width: z.string(),
  height: z.string(),
  desi: z.string(),
  oldDesi: z.string(),
  distanceUnit: z.string(), // 'm' | 'cm' | 'mm'
  weight: z.string(),
  oldWeight: z.string(),
  massUnit: z.enum(['kg', 'g']),
  isActive: z.boolean(),
  name: z.string(),
  LanguageCode: z.string(),
});

export type IGeliverAddWebHook = z.infer<typeof GeliverAddWebHookSchema>;
export const GeliverAddWebHookSchema = z.object({
  type: z.string(),
  url: z.string(),
  headerName: z.string().optional(),
  headerValue: z.string().optional(),
});

export type IGeliverAddWebHookResponse = z.infer<typeof GeliverAddWebHookResponseSchema>;
export const GeliverAddWebHookResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  organizationID: z.string(),
  type: z.string(),
  url: z.string(),
  headerName: z.string(),
  headerValue: z.string(),
  isActive: z.boolean(),
});

export type IGeliverAddProvider = z.infer<typeof GeliverAddProviderSchema>;
export const GeliverAddProviderSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  providerCode: z.string(),
  version: z.number(),
  isActive: z.boolean(),
  parameters: z.record(z.string(), z.unknown()),
  isC2C: z.boolean(),
  sharable: z.boolean(),
  isTest: z.boolean(),
});

export type IGeliverAddProviderResponse = z.infer<typeof GeliverAddProviderResponseSchema>;
export const GeliverAddProviderResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  providerCode: z.string(),
  username: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  isB2B: z.boolean(),
  isC2C: z.boolean(),
  isXL: z.boolean(),
  isDynamicPrice: z.boolean(),
  isPublic: z.boolean(),
  sharable: z.boolean(),
  integrationType: z.string(),
  labelFileType: z.string(),
  parameters: z.record(z.string(), z.unknown()),
  version: z.number(),
  priceUpdatedAt: z.string(),
});

export type IGeliverShipmentItem = z.infer<typeof GeliverShipmentItemSchema>;
export const GeliverShipmentItemSchema = z.object({
  title: z.string(),
  quantity: z.number(),
});

export type IGeliverShipmentRecipientAddress = z.infer<
  typeof GeliverShipmentRecipientAddressSchema
>;
export const GeliverShipmentRecipientAddressSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.e164(),
  address1: z.string(),
  countryCode: z.string(),
  cityCode: z.string(),
  districtName: z.string(),
});

export type IGeliverShipmentOrderInfo = z.infer<typeof GeliverShipmentOrderInfoSchema>;
export const GeliverShipmentOrderInfoSchema = z.object({
  sourceCode: z.literal('API'),
  sourceIdentifier: z.string(),
  orderNumber: z.string(),
  totalAmount: z.number().optional(),
  totalAmountCurrency: z.string().optional(),
});

export type IGeliverShipmentAdd = z.infer<typeof GeliverShipmentAddSchema>;
export const GeliverShipmentAddSchema = z.object({
  test: z.boolean().optional(),
  items: z.array(GeliverShipmentItemSchema),
  senderAddressID: z.string(),
  returnAddressID: z.string().optional(),
  recipientAddress: GeliverShipmentRecipientAddressSchema.optional(),
  recipientAddressID: z.string().optional(),
  order: GeliverShipmentOrderInfoSchema,
  parcelTemplateID: z.string().optional(),
  length: z.string().optional(),
  height: z.string().optional(),
  width: z.string().optional(),
  distanceUnit: z.string().optional(), // 'cm' | 'm' | 'mm'
  weight: z.string(),
  massUnit: z.string(), // 'kg' | 'g'
  productPaymentOnDelivery: z.boolean(),
});

export type IGeliverTrackingStatus = z.infer<typeof GeliverTrackingStatusSchema>;
export const GeliverTrackingStatusSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  trackingStatusCode: z.string(),
  trackingSubStatusCode: z.string(),
  statusDetails: z.string(),
  statusDate: z.string(),
  locationName: z.string(),
  locationLat: z.number().nullable(),
  locationLng: z.number().nullable(),
  hash: z.string(),
});

export type IGeliverOrder = z.infer<typeof GeliverOrderSchema>;
export const GeliverOrderSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  itemIDs: z.array(z.string()).nullable(),
  buyerShippingCost: z.string(),
  buyerShipmentMethod: z.string(),
  totalAmount: z.string(),
  totalTax: z.string(),
  totalAmountCurrency: z.string(),
  sourceCode: z.string(),
  sourceIdentifier: z.string(),
  orderNumber: z.string(),
  orderCode: z.string(),
  notes: z.string(),
  organizationID: z.string().nullable(),
});

export type IGeliverOffer = z.infer<typeof GeliverOfferSchema>;
export const GeliverOfferSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  amount: z.string(),
  currency: z.string(),
  amountLocal: z.string(),
  currencyLocal: z.string(),
  amountVat: z.string(),
  amountLocalVat: z.string(),
  amountTax: z.string(),
  amountLocalTax: z.string(),
  totalAmount: z.string(),
  totalAmountLocal: z.string(),
  amountOld: z.string(),
  amountLocalOld: z.string(),
  discountRate: z.string(),
  bonusBalance: z.string(),
  providerCode: z.string(),
  providerServiceCode: z.string(),
  providerAccountID: z.string().optional(),
  averageEstimatedTime: z.number().optional(),
  averageEstimatedTimeHumanReadible: z.string(),
  durationTerms: z.string(),
  rating: z.number(),
  isAccepted: z.boolean(),
  isGlobal: z.boolean(),
  isC2C: z.boolean(),
  integrationType: z.string(),
  isMainOffer: z.boolean(),
  isProviderAccountOffer: z.boolean(),
  providerAccountOwnerType: z.string().optional(),
  providerAccountName: z.string().nullish(),
});

export type IGeliverOffers = z.infer<typeof GeliverOffersSchema>;
export const GeliverOffersSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  length: z.string(),
  width: z.string(),
  height: z.string(),
  weight: z.string(),
  cheapest: GeliverOfferSchema,
  fastest: GeliverOfferSchema,
  list: z.array(GeliverOfferSchema),
  percentageCompleted: z.number(),
  totalOffersRequested: z.number(),
  totalOffersCompleted: z.literal(0),
  allowOfferFallback: z.boolean(),
});

export type IGeliverItem = z.infer<typeof GeliverItemSchema>;
export const GeliverItemSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  title: z.string(),
  variantTitle: z.string(),
  quantity: z.number(),
  unitWeight: z.string(),
  totalPrice: z.string(),
  totalPriceLocal: z.string(),
  massUnit: z.string(),
  unitPrice: z.string(),
  currency: z.string().nullable(),
  unitPriceLocal: z.string(),
  currencyLocal: z.string(),
  countryOfOrigin: z.string(),
  maxShipTime: z.string().nullable(),
  maxDeliveryTime: z.string().nullable(),
  sku: z.string(),
});

export type IGeliverShipmentAddResponse = z.infer<typeof GeliverShipmentAddResponseSchema>;
export const GeliverShipmentAddResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  test: z.boolean(),
  amount: z.string(),
  currency: z.string(),
  amountLocal: z.string(),
  currencyLocal: z.string(),
  amountVat: z.string(),
  amountLocalVat: z.string(),
  amountTax: z.string(),
  amountLocalTax: z.string(),
  totalAmount: z.string(),
  totalAmountLocal: z.string(),
  amountOld: z.string(),
  amountLocalOld: z.string(),
  discountRate: z.string(),
  bonusBalance: z.string(),
  length: z.string(),
  width: z.string(),
  height: z.string(),
  desi: z.string(),
  oldDesi: z.string(),
  distanceUnit: z.string(),
  weight: z.string(),
  oldWeight: z.string(),
  massUnit: z.string(),
  useWeightOfItems: z.boolean(),
  useDimensionsOfItems: z.boolean(),
  trackingStatus: GeliverTrackingStatusSchema,
  labelFileType: z.string(),
  hidePackageContentOnTag: z.boolean(),
  shipmentDate: z.string().nullable(),
  invoiceGenerated: z.boolean(),
  refundInvoiceID: z.string().nullable(),
  productPaymentOnDelivery: z.boolean(),
  orderID: z.string(),
  order: GeliverOrderSchema,
  senderAddressID: z.string(),
  senderAddress: GeliverAddressAddResponseSchema,
  recipientAddressID: z.string(),
  recipientAddress: GeliverAddressAddResponseSchema,
  createReturnLabel: z.boolean(),
  statusCode: z.string(),
  offers: GeliverOffersSchema,
  acceptedOffer: GeliverOfferSchema.nullable(),
  enableAutomation: z.boolean(),
  items: z.array(GeliverItemSchema),
  organizationShipmentID: z.number(),
  providerBranchName: z.string().nullable(),
  providerInvoiceNo: z.string().nullable(),
  providerReceiptNo: z.string().nullable(),
  providerSerialNo: z.string().nullable(),
  hasError: z.boolean(),
  lastErrorMessage: z.string().nullable(),
  lastErrorCode: z.string().nullable(),
  cancelDate: z.string(),
  isReturned: z.boolean(),
  isReturn: z.boolean(),
  isTrackingOnly: z.boolean(),
  isRecipientSmsActivated: z.boolean(),
  packageAcceptedAt: z.string().nullable(),
  tenantId: z.string().nullable(),
});

export type IGeliverShipment = z.infer<typeof GeliverShipmentSchema>;
export const GeliverShipmentSchema = z.object({
  result: z.boolean(),
  additionalMessage: z.string(),
  limit: z.number(),
  page: z.number(),
  sort: z.string(),
  totalRows: z.number(),
  totalPages: z.number(),
  data: z.array(GeliverShipmentAddResponseSchema),
});

export type IGeliverOfferShipment = z.infer<typeof GeliverOfferShipmentSchema>;
export const GeliverOfferShipmentSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  test: z.boolean(),
  amount: z.string(),
  currency: z.string(),
  amountLocal: z.string(),
  amountVat: z.string(),
  amountLocalVat: z.string(),
  amountTax: z.string(),
  amountLocalTax: z.string(),
  totalAmount: z.string(),
  totalAmountLocal: z.string(),
  amountOld: z.string(),
  amountLocalOld: z.string(),
  discountRate: z.string(),
  bonusBalance: z.string(),
  length: z.string(),
  width: z.string(),
  height: z.string(),
  desi: z.string(),
  oldDesi: z.string(),
  distanceUnit: z.string(),
  weight: z.string(),
  oldWeight: z.string(),
  massUnit: z.string(),
  useWeightOfItems: z.boolean(),
  useDimensionsOfItems: z.boolean(),
  trackingStatus: GeliverTrackingStatusSchema.nullable(),
  barcode: z.string(),
  labelFileType: z.string(),
  labelURL: z.string(),
  responsiveLabelURL: z.string(),
  hidePackageContentOnTag: z.boolean(),
  shipmentDate: z.string().nullable(),
  invoiceGenerated: z.boolean(),
  refundInvoiceID: z.string().nullable(),
  productPaymentOnDelivery: z.boolean(),
  orderID: z.string(),
  order: z.unknown().nullable(),
  senderAddressID: z.string(),
  senderAddress: GeliverAddressAddResponseSchema.nullable(),
  recipientAddressID: z.string(),
  recipientAddress: GeliverAddressAddResponseSchema.nullable(),
  createReturnLabel: z.boolean(),
  statusCode: z.string(),
  offers: GeliverOffersSchema.nullable(),
  acceptedOfferID: z.string(),
  acceptedOffer: GeliverOfferSchema.nullable(),
  providerCode: z.string(),
  providerServiceCode: z.string(),
  enableAutomation: z.boolean(),
  organizationShipmentID: z.number(),
  providerBranchName: z.string().nullable(),
  providerInvoiceNo: z.string().nullable(),
  providerReceiptNo: z.string().nullable(),
  providerSerialNo: z.string().nullable(),
  hasError: z.boolean(),
  lastErrorMessage: z.string().nullable(),
  lastErrorCode: z.string().nullable(),
  cancelDate: z.string(),
  isReturned: z.boolean(),
  isReturn: z.boolean(),
  isTrackingOnly: z.boolean(),
  isRecipientSmsActivated: z.boolean(),
  packageAcceptedAt: z.string().nullable(),
  tenantId: z.string().nullable(),
  items: z.array(GeliverItemSchema),
  trackingNumber: z.string().optional(),
  trackingUrl: z.string().optional(),
});

export type IGeliverOfferResponse = z.infer<typeof GeliverOfferResponseSchema>;
export const GeliverOfferResponseSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  amount: z.string(),
  currency: z.string(),
  amountLocal: z.string(),
  currencyLocal: z.string(),
  amountVat: z.string(),
  amountLocalVat: z.string(),
  amountTax: z.string(),
  amountLocalTax: z.string(),
  totalAmount: z.string(),
  totalAmountLocal: z.string(),
  amountOld: z.string(),
  amountLocalOld: z.string(),
  discountRate: z.string(),
  bonusBalance: z.string(),
  offerID: z.string(),
  shipment: GeliverOfferShipmentSchema,
  description: z.string(),
  isRefund: z.boolean(),
  isCustomAccountCharge: z.boolean(),
  isPayed: z.boolean(),
  payedVia: z.string(),
  transactionType: z.string(),
  invoiceID: z.string(),
  cancelDescription: z.string(),
  isCanceled: z.boolean(),
  oldBalance: z.string(),
  newBalance: z.string(),
  invoiceOldDebt: z.string(),
  invoiceNewDebt: z.string(),
});

export type IGeliverReturnShipment = z.infer<typeof GeliverReturnShipmentSchema>;
export const GeliverReturnShipmentSchema = z.object({
  isReturn: z.boolean(),
  willAccept: z.boolean(),
  providerServiceCode: z.string(),
  count: z.number(),
  senderAddress: GeliverShipmentRecipientAddressSchema,
});

export type IGeliverTicket = z.infer<typeof GeliverTicketSchema>;
export const GeliverTicketSchema = z.object({
  test: z.boolean(),
  senderAddressID: z.string(),
  returnAddressID: z.string(),
  recipientAddress: GeliverShipmentRecipientAddressSchema,
  length: z.string(),
  height: z.string(),
  width: z.string(),
  distanceUnit: z.string(),
  weight: z.string(),
  massUnit: z.string(),
  items: z.array(GeliverShipmentItemSchema),
  productPaymentOnDelivery: z.boolean(),
  hidePackageContentOnTag: z.boolean(),
  order: GeliverShipmentOrderInfoSchema,
});

export type IGeliverBuyTicket = z.infer<typeof GeliverBuyTicketSchema>;
export const GeliverBuyTicketSchema = z.object({
  providerServiceCode: z.string(),
  shipment: GeliverTicketSchema,
});

export const DEFAULT_GELIVER_ADDRESS: IGeliverAddressAddResponse = getDefaultsForSchema(
  GeliverAddressAddResponseSchema,
);
export const DEFAULT_GELIVER_PACKAGE_TEMPLATE: IGeliverAddPackageTemplateResponse =
  getDefaultsForSchema(GeliverAddPackageTemplateResponseSchema);
export const DEFAULT_GELIVER_TRACKING_STATUS: IGeliverTrackingStatus = getDefaultsForSchema(
  GeliverTrackingStatusSchema,
);
export const DEFAULT_GELIVER_ORDER: IGeliverOrder = getDefaultsForSchema(GeliverOrderSchema);
export const DEFAULT_GELIVER_OFFER: IGeliverOffer = getDefaultsForSchema(GeliverOfferSchema);
export const DEFAULT_GELIVER_OFFERS: IGeliverOffers = getDefaultsForSchema(GeliverOffersSchema);
export const DEFAULT_GELIVER_ITEM: IGeliverItem = getDefaultsForSchema(GeliverItemSchema);
export const DEFAULT_GELIVER_SHIPMENT: IGeliverShipmentAddResponse = getDefaultsForSchema(
  GeliverShipmentAddResponseSchema,
);
export const DEFAULT_GELIVER_PROVIDER: IGeliverAddProviderResponse = getDefaultsForSchema(
  GeliverAddProviderResponseSchema,
);
export const DEFAULT_GELIVER_WEBHOOK: IGeliverAddWebHookResponse = getDefaultsForSchema(
  GeliverAddWebHookResponseSchema,
);
