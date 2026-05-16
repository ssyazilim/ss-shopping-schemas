export interface IPackageTemplate {
  id: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface IDealerPricesWithDesi {
  desi: string;
  providerCode: string;
  amount: string;
  amountVat: string;
  amountTax: string;
  totalAmount: string;
  currency: string;
}
export interface IDealerPricesWithDesiFormatted extends IDealerPricesWithDesi {
  _id: string;
  name: string;
  image: string;
}

export interface IGeliverBalanceResponse {
  result: boolean;
  additionalMessage: string;
  data: string;
  dept: string;
}
export interface IGeliverDealerPriceResponse {
  desi: string;
  offers: {
    amount: string;
    currency: string;
    amountLocal: string;
    amountVat: string;
    amountLocalVat: string;
    amountTax: string;
    amountLocalTax: string;
    totalAmount: string;
    totalAmountLocal: string;
    providerCode: string;
    providerServiceCode: string;
    transportType: string;
  }[];
}

export interface IGeliverCity {
  name: string;
  areaCode: string;
  cityCode: string;
  countryCode: string;
}

export interface IGeliverDistrict {
  name: string;
  districtID: string;
  cityCode: string;
  regionCode: string;
  countryCode: string;
}

export interface IGeliverAddressAdd {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  countryCode: string;
  cityName: string;
  cityCode: string;
  districtName: string;
  districtID: string;
  zip: string;
  isRecipientAddress: boolean;
  shortName: string;
}

export interface IGeliverAddressAddResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  shortName: string;
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: IGeliverCity | null;
  cityCode: string;
  cityName: string;
  state: string;
  zip: string;
  district: IGeliverDistrict | null;
  districtID: number;
  districtName: string;
  streetID: string;
  streetName: string;
  source: string;
  countryCode: string;
  countryName: string;
  isDefaultSenderAddress: boolean;
  isDefaultReturnAddress: boolean;
  isRecipientAddress: boolean;
  isInvoiceAddress: boolean;
  isActive: boolean;
}

export interface IGeliverAddress {
  result: boolean;
  additionalMessage: string;
  limit: number;
  page: number;
  sort: string;
  totalRows: number;
  totalPages: number;
  data: IGeliverAddressAddResponse[];
}

export interface IGeliverAddPackageTemplate {
  name: string;
  distanceUnit: 'm' | 'cm' | 'mm';
  massUnit: 'kg' | 'g';
  length: string;
  height: string;
  width: string;
  weight: string;
}

export interface IGeliverAddPackageTemplateResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  length: string;
  width: string;
  height: string;
  desi: string;
  oldDesi: string;
  distanceUnit: 'm' | 'cm' | 'mm';
  weight: string;
  oldWeight: string;
  massUnit: 'kg' | 'g';
  isActive: boolean;
  name: string;
  LanguageCode: string;
}

export interface IGeliverAddWebHook {
  type: string;
  url: string;
  headerName?: string;
  headerValue?: string;
}

export interface IGeliverAddWebHookResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  organizationID: string;
  type: string;
  url: string;
  headerName: string;
  headerValue: string;
  isActive: boolean;
}

export interface IGeliverAddProvider {
  id: string;
  username: string;
  password: string;
  providerCode: string;
  version: number;
  isActive: boolean;
  parameters: Record<string, unknown>;
  isC2C: boolean;
  sharable: boolean;
  isTest: boolean;
}

export interface IGeliverAddProviderResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  providerCode: string;
  username: string;
  name: string;
  isActive: boolean;
  isB2B: boolean;
  isC2C: boolean;
  isXL: boolean;
  isDynamicPrice: boolean;
  isPublic: boolean;
  sharable: boolean;
  integrationType: string;
  labelFileType: string;
  parameters: Record<string, unknown>;
  version: number;
  priceUpdatedAt: string;
}

export interface IGeliverShipmentItem {
  title: string;
  quantity: number;
}

export interface IGeliverShipmentRecipientAddress {
  name: string;
  email: string;
  phone: string;
  address1: string;
  countryCode: string;
  cityCode: string;
  districtName: string;
}

export interface IGeliverShipmentOrderInfo {
  sourceCode: 'API';
  sourceIdentifier: string;
  orderNumber: string;
  totalAmount?: number;
  totalAmountCurrency?: string;
}

export interface IGeliverShipmentAdd {
  test?: boolean;
  items: IGeliverShipmentItem[];
  senderAddressID: string;
  returnAddressID?: string;
  recipientAddress?: IGeliverShipmentRecipientAddress;
  recipientAddressID?: string;
  order: IGeliverShipmentOrderInfo;
  parcelTemplateID?: string;
  length?: string;
  height?: string;
  width?: string;
  distanceUnit?: 'cm' | 'm' | 'mm';
  weight: string;
  massUnit: 'kg' | 'g';
  productPaymentOnDelivery: boolean;
}

export interface IGeliverTrackingStatus {
  id: string;
  createdAt: string;
  updatedAt: string;
  trackingStatusCode: string;
  trackingSubStatusCode: string;
  statusDetails: string;
  statusDate: string;
  locationName: string;
  locationLat: number | null;
  locationLng: number | null;
  hash: string;
}

export interface IGeliverOrder {
  id: string;
  createdAt: string;
  updatedAt: string;
  itemIDs: string[] | null;
  buyerShippingCost: string;
  buyerShipmentMethod: string;
  totalAmount: string;
  totalTax: string;
  totalAmountCurrency: string;
  sourceCode: string;
  sourceIdentifier: string;
  orderNumber: string;
  orderCode: string;
  notes: string;
  organizationID: string | null;
}

export interface IGeliverOffer {
  id: string;
  createdAt: string;
  updatedAt: string;
  amount: string;
  currency: string;
  amountLocal: string;
  currencyLocal: string;
  amountVat: string;
  amountLocalVat: string;
  amountTax: string;
  amountLocalTax: string;
  totalAmount: string;
  totalAmountLocal: string;
  amountOld: string;
  amountLocalOld: string;
  discountRate: string;
  bonusBalance: string;
  providerCode: string;
  providerServiceCode: string;
  providerAccountID?: string;
  averageEstimatedTime?: number;
  averageEstimatedTimeHumanReadible: string;
  durationTerms: string;
  rating: number;
  isAccepted: boolean;
  isGlobal: boolean;
  isC2C: boolean;
  integrationType: string;
  isMainOffer: boolean;
  isProviderAccountOffer: boolean;
  providerAccountOwnerType?: string;
  providerAccountName?: string | null;
}

export interface IGeliverOffers {
  createdAt: string;
  updatedAt: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  cheapest: IGeliverOffer;
  fastest: IGeliverOffer;
  list: IGeliverOffer[];
  percentageCompleted: number;
  totalOffersRequested: number;
  totalOffersCompleted: 0;
  allowOfferFallback: boolean;
}

export interface IGeliverItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  variantTitle: string;
  quantity: number;
  unitWeight: string;
  totalPrice: string;
  totalPriceLocal: string;
  massUnit: string;
  unitPrice: string;
  currency: string | null;
  unitPriceLocal: string;
  currencyLocal: string;
  countryOfOrigin: string;
  maxShipTime: string | null;
  maxDeliveryTime: string | null;
  sku: string;
}

export interface IGeliverShipmentAddResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  test: boolean;
  amount: string;
  currency: string;
  amountLocal: string;
  currencyLocal: string;
  amountVat: string;
  amountLocalVat: string;
  amountTax: string;
  amountLocalTax: string;
  totalAmount: string;
  totalAmountLocal: string;
  amountOld: string;
  amountLocalOld: string;
  discountRate: string;
  bonusBalance: string;
  length: string;
  width: string;
  height: string;
  desi: string;
  oldDesi: string;
  distanceUnit: string;
  weight: string;
  oldWeight: string;
  massUnit: string;
  useWeightOfItems: boolean;
  useDimensionsOfItems: boolean;
  trackingStatus: IGeliverTrackingStatus;
  labelFileType: string;
  hidePackageContentOnTag: boolean;
  shipmentDate: string | null;
  invoiceGenerated: boolean;
  refundInvoiceID: string | null;
  productPaymentOnDelivery: boolean;
  orderID: string;
  order: IGeliverOrder;
  senderAddressID: string;
  senderAddress: IGeliverAddressAddResponse;
  recipientAddressID: string;
  recipientAddress: IGeliverAddressAddResponse;
  createReturnLabel: boolean;
  statusCode: string;
  offers: IGeliverOffers;
  acceptedOffer: IGeliverOffer | null;
  enableAutomation: boolean;
  items: IGeliverItem[];
  organizationShipmentID: number;
  providerBranchName: string | null;
  providerInvoiceNo: string | null;
  providerReceiptNo: string | null;
  providerSerialNo: string | null;
  hasError: boolean;
  lastErrorMessage: string | null;
  lastErrorCode: string | null;
  cancelDate: string;
  isReturned: boolean;
  isReturn: boolean;
  isTrackingOnly: boolean;
  isRecipientSmsActivated: boolean;
  packageAcceptedAt: string | null;
  tenantId: string | null;
}

export interface IGeliverShipment {
  result: boolean;
  additionalMessage: string;
  limit: number;
  page: number;
  sort: string;
  totalRows: number;
  totalPages: number;
  data: IGeliverShipmentAddResponse[];
}

export interface IGeliverOfferShipment {
  id: string;
  createdAt: string;
  updatedAt: string;
  test: boolean;
  amount: string;
  currency: string;
  amountLocal: string;
  amountVat: string;
  amountLocalVat: string;
  amountTax: string;
  amountLocalTax: string;
  totalAmount: string;
  totalAmountLocal: string;
  amountOld: string;
  amountLocalOld: string;
  discountRate: string;
  bonusBalance: string;
  length: string;
  width: string;
  height: string;
  desi: string;
  oldDesi: string;
  distanceUnit: string;
  weight: string;
  oldWeight: string;
  massUnit: string;
  useWeightOfItems: boolean;
  useDimensionsOfItems: boolean;
  trackingStatus: IGeliverTrackingStatus | null;
  barcode: string;
  labelFileType: string;
  labelURL: string;
  responsiveLabelURL: string;
  hidePackageContentOnTag: boolean;
  shipmentDate: string | null;
  invoiceGenerated: boolean;
  refundInvoiceID: string | null;
  productPaymentOnDelivery: boolean;
  orderID: string;
  order: unknown | null;
  senderAddressID: string;
  senderAddress: IGeliverAddressAddResponse | null;
  recipientAddressID: string;
  recipientAddress: IGeliverAddressAddResponse | null;
  createReturnLabel: boolean;
  statusCode: string;
  offers: IGeliverOffers | null;
  acceptedOfferID: string;
  acceptedOffer: IGeliverOffer | null;
  providerCode: string;
  providerServiceCode: string;
  enableAutomation: boolean;
  organizationShipmentID: number;
  providerBranchName: string | null;
  providerInvoiceNo: string | null;
  providerReceiptNo: string | null;
  providerSerialNo: string | null;
  hasError: boolean;
  lastErrorMessage: string | null;
  lastErrorCode: string | null;
  cancelDate: string;
  isReturned: boolean;
  isReturn: boolean;
  isTrackingOnly: boolean;
  isRecipientSmsActivated: boolean;
  packageAcceptedAt: string | null;
  tenantId: string | null;
  items: IGeliverItem[];
  trackingNumber?: string;
  trackingUrl?: string;
}

export interface IGeliverOfferResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  amount: string;
  currency: string;
  amountLocal: string;
  currencyLocal: string;
  amountVat: string;
  amountLocalVat: string;
  amountTax: string;
  amountLocalTax: string;
  totalAmount: string;
  totalAmountLocal: string;
  amountOld: string;
  amountLocalOld: string;
  discountRate: string;
  bonusBalance: string;
  offerID: string;
  shipment: IGeliverOfferShipment;
  description: string;
  isRefund: boolean;
  isCustomAccountCharge: boolean;
  isPayed: boolean;
  payedVia: string;
  transactionType: string;
  invoiceID: string;
  cancelDescription: string;
  isCanceled: boolean;
  oldBalance: string;
  newBalance: string;
  invoiceOldDebt: string;
  invoiceNewDebt: string;
}

export interface IGeliverReturnShipment {
  isReturn: boolean;
  willAccept: boolean;
  providerServiceCode: string;
  count: number;
  senderAddress: IGeliverShipmentRecipientAddress;
}

export interface IGeliverTicket {
  test: boolean;
  senderAddressID: string;
  returnAddressID: string;
  recipientAddress: IGeliverShipmentRecipientAddress;
  length: string;
  height: string;
  width: string;
  distanceUnit: string;
  weight: string;
  massUnit: string;
  items: IGeliverShipmentItem[];
  productPaymentOnDelivery: boolean;
  hidePackageContentOnTag: boolean;
  order: IGeliverShipmentOrderInfo;
}

export interface IGeliverBuyTicket {
  providerServiceCode: string;
  shipment: IGeliverTicket;
}

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_GELIVER_ADDRESS: IGeliverAddressAddResponse = {
  id: '',
  createdAt: '',
  updatedAt: '',
  shortName: '',
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: null,
  cityCode: '',
  cityName: '',
  state: '',
  zip: '',
  district: null,
  districtID: 0,
  districtName: '',
  streetID: '',
  streetName: '',
  source: '',
  countryCode: '',
  countryName: '',
  isDefaultSenderAddress: false,
  isDefaultReturnAddress: false,
  isRecipientAddress: false,
  isInvoiceAddress: false,
  isActive: false,
};

export const DEFAULT_GELIVER_PACKAGE_TEMPLATE: IGeliverAddPackageTemplateResponse = {
  id: '',
  createdAt: '',
  updatedAt: '',
  length: '',
  width: '',
  height: '',
  desi: '',
  oldDesi: '',
  distanceUnit: 'cm',
  weight: '',
  oldWeight: '',
  massUnit: 'kg',
  isActive: false,
  name: '',
  LanguageCode: '',
};

export const DEFAULT_GELIVER_TRACKING_STATUS: IGeliverTrackingStatus = {
  id: '',
  createdAt: '',
  updatedAt: '',
  trackingStatusCode: '',
  trackingSubStatusCode: '',
  statusDetails: '',
  statusDate: '',
  locationName: '',
  locationLat: 0,
  locationLng: 0,
  hash: '',
};

export const DEFAULT_GELIVER_ORDER: IGeliverOrder = {
  id: '',
  createdAt: '',
  updatedAt: '',
  itemIDs: [],
  buyerShippingCost: '',
  buyerShipmentMethod: '',
  totalAmount: '',
  totalTax: '',
  totalAmountCurrency: '',
  sourceCode: '',
  sourceIdentifier: '',
  orderNumber: '',
  orderCode: '',
  notes: '',
  organizationID: '',
};

export const DEFAULT_GELIVER_OFFER: IGeliverOffer = {
  id: '',
  createdAt: '',
  updatedAt: '',
  amount: '',
  currency: '',
  amountLocal: '',
  currencyLocal: '',
  amountVat: '',
  amountLocalVat: '',
  amountTax: '',
  amountLocalTax: '',
  totalAmount: '',
  totalAmountLocal: '',
  amountOld: '',
  amountLocalOld: '',
  discountRate: '',
  bonusBalance: '',
  providerCode: '',
  providerServiceCode: '',
  providerAccountID: '',
  averageEstimatedTime: 0,
  averageEstimatedTimeHumanReadible: '',
  durationTerms: '',
  rating: 0,
  isAccepted: false,
  isGlobal: false,
  isC2C: false,
  integrationType: '',
  isMainOffer: false,
  isProviderAccountOffer: false,
  providerAccountOwnerType: '',
  providerAccountName: '',
};

export const DEFAULT_GELIVER_OFFERS: IGeliverOffers = {
  createdAt: '',
  updatedAt: '',
  length: '',
  width: '',
  height: '',
  weight: '',
  cheapest: DEFAULT_GELIVER_OFFER,
  fastest: DEFAULT_GELIVER_OFFER,
  list: [],
  percentageCompleted: 0,
  totalOffersRequested: 0,
  totalOffersCompleted: 0,
  allowOfferFallback: false,
};

export const DEFAULT_GELIVER_ITEM: IGeliverItem = {
  id: '',
  createdAt: '',
  updatedAt: '',
  title: '',
  variantTitle: '',
  quantity: 0,
  unitWeight: '',
  totalPrice: '',
  totalPriceLocal: '',
  massUnit: '',
  unitPrice: '',
  currency: '',
  unitPriceLocal: '',
  currencyLocal: '',
  countryOfOrigin: '',
  maxShipTime: '',
  maxDeliveryTime: '',
  sku: '',
};

export const DEFAULT_GELIVER_SHIPMENT: IGeliverShipmentAddResponse = {
  id: '',
  createdAt: '',
  updatedAt: '',
  test: false,
  amount: '',
  currency: '',
  amountLocal: '',
  currencyLocal: '',
  amountVat: '',
  amountLocalVat: '',
  amountTax: '',
  amountLocalTax: '',
  totalAmount: '',
  totalAmountLocal: '',
  amountOld: '',
  amountLocalOld: '',
  discountRate: '',
  bonusBalance: '',
  length: '',
  width: '',
  height: '',
  desi: '',
  oldDesi: '',
  distanceUnit: 'cm',
  weight: '',
  oldWeight: '',
  massUnit: 'kg',
  useWeightOfItems: false,
  useDimensionsOfItems: false,
  trackingStatus: DEFAULT_GELIVER_TRACKING_STATUS,
  labelFileType: '',
  hidePackageContentOnTag: false,
  shipmentDate: '',
  invoiceGenerated: false,
  refundInvoiceID: '',
  productPaymentOnDelivery: false,
  orderID: '',
  order: DEFAULT_GELIVER_ORDER,
  senderAddressID: '',
  senderAddress: DEFAULT_GELIVER_ADDRESS,
  recipientAddressID: '',
  recipientAddress: DEFAULT_GELIVER_ADDRESS,
  createReturnLabel: false,
  statusCode: '',
  offers: DEFAULT_GELIVER_OFFERS,
  acceptedOffer: DEFAULT_GELIVER_OFFER,
  enableAutomation: false,
  items: [],
  organizationShipmentID: 0,
  providerBranchName: '',
  providerInvoiceNo: '',
  providerReceiptNo: '',
  providerSerialNo: '',
  hasError: false,
  lastErrorMessage: '',
  lastErrorCode: '',
  cancelDate: '',
  isReturned: false,
  isReturn: false,
  isTrackingOnly: false,
  isRecipientSmsActivated: false,
  packageAcceptedAt: '',
  tenantId: '',
};

export const DEFAULT_GELIVER_PROVIDER: IGeliverAddProviderResponse = {
  id: '',
  createdAt: '',
  updatedAt: '',
  providerCode: '',
  name: '',
  username: '',
  isActive: false,
  parameters: {},
  version: 0,
  isC2C: false,
  integrationType: '',
  labelFileType: '',
  isPublic: false,
  sharable: false,
  isDynamicPrice: false,
  priceUpdatedAt: '',
  isB2B: false,
  isXL: false,
};

export const DEFAULT_GELIVER_WEBHOOK: IGeliverAddWebHookResponse = {
  id: '',
  createdAt: '',
  updatedAt: '',
  organizationID: '',
  type: '',
  url: '',
  headerName: '',
  headerValue: '',
  isActive: false,
};
