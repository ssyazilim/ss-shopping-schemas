import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { PaymentBasketItemsSchema } from './payment';

export type IPaymentCard = z.infer<typeof PaymentCardSchema>;
export const PaymentCardSchema = z.object({
  cardHolderName: z.string(),
  cardNumber: z.string(),
  expireMonth: z.string(),
  expireYear: z.string(),
  cvc: z.string(),
  registerCard: z.union([z.literal(0), z.literal(1)]).optional(),
});

export type IPaymentBuyer = z.infer<typeof PaymentBuyerSchema>;
export const PaymentBuyerSchema = z.object({
  id: z.string(),
  name: z.string(),
  surname: z.string(),
  identityNumber: z.string(),
  city: z.string(),
  country: z.string(),
  email: z.string(),
  message: z.string().optional(),
  gsmNumber: z.string().optional(),
  ip: z.string(),
  registrationAddress: z.string(),
  zipCode: z.string().optional(),
  registrationDate: z.string().optional(),
  lastLoginDate: z.string().optional(),
});

export type IPaymentAddress = z.infer<typeof PaymentAddressSchema>;
export const PaymentAddressSchema = z.object({
  contactName: z.string(),
  city: z.string(),
  country: z.string(),
  address: z.string(),
  zipCode: z.string().optional(),
});

export type IInstallment = z.infer<typeof InstallmentSchema>;
export const InstallmentSchema = z.object({
  status: z.enum(['success', 'failure']),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
  installmentDetails: z.object({
    binNumber: z.string(),
    price: z.string(),
    cardType: z.enum(['CREDIT_CARD', 'DEBIT_CARD', 'PREPAID_CARD']),
    cardAssociation: z.enum(['MASTER_CARD', 'VISA', 'TROY', 'AMERICAN_EXPRESS']),
    cardFamilyName: z.enum([
      'Bonus',
      'Axess',
      'World',
      'Maximum',
      'Paraf',
      'cardFinans',
      'Advantage',
    ]),
    force3ds: z.enum(['1', '0']),
    bankName: z.string(),
    bankCode: z.number(),
  }),
  installmentPrices: z.object({
    installmentDetails: z.object({
      installmentPrice: z.string(),
      totalPrice: z.number(),
      installmentNumber: z.number(),
    }),
  }),
  errorCode: z.string().optional(),
  errorMessage: z.string().optional(),
  errorGroup: z.string().optional(),
});

const InstallmentNumberSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(6),
  z.literal(9),
]);

const PaymentChannelSchema = z.enum([
  'WEB',
  'MOBILE',
  'MOBILE_WEB',
  'MOBILE_IOS',
  'MOBILE_ANDROID',
  'MOBILE_WINDOWS',
  'MOBILE_TABLET',
  'MOBILE_PHONE',
]);

const PaymentGroupSchema = z.enum(['PRODUCT', 'LISTING', 'SUBSCRIPTION']);

export type IPaymentIyzico = z.infer<typeof PaymentIyzicoSchema>;
export const PaymentIyzicoSchema = z.object({
  locale: z.enum(['tr', 'en']).optional(),
  conversationId: z.string().optional(),
  price: z.number(),
  paidPrice: z.number(),
  currency: z.string(),
  installment: InstallmentNumberSchema,
  basketId: z.string().optional(),
  paymentChannel: PaymentChannelSchema.optional(),
  paymentGroup: PaymentGroupSchema.optional(),
  paymentCard: z.union([
    PaymentCardSchema,
    z.object({ cardUserKey: z.string(), cardToken: z.string() }),
  ]),
  buyer: PaymentBuyerSchema,
  billingAddress: PaymentAddressSchema,
  shippingAddress: PaymentAddressSchema,
  basketItems: z.array(PaymentBasketItemsSchema),
});

export type IPaymentCheckCodeFor3D = z.infer<typeof PaymentCheckCodeFor3DSchema>;
export const PaymentCheckCodeFor3DSchema = PaymentIyzicoSchema.extend({
  callbackUrl: z.string(),
});

export type IPaymentCheckCodeForIyzico = z.infer<typeof PaymentCheckCodeForIyzicoSchema>;
export const PaymentCheckCodeForIyzicoSchema = z.object({
  locale: z.enum(['tr', 'en']).optional(),
  conversationId: z.string().optional(),
  price: z.number(),
  paidPrice: z.number(),
  currency: z.string(),
  installment: InstallmentNumberSchema,
  basketId: z.string().optional(),
  paymentChannel: PaymentChannelSchema.optional(),
  paymentGroup: PaymentGroupSchema.optional(),
  callbackUrl: z.string(),
  buyer: PaymentBuyerSchema,
  billingAddress: PaymentAddressSchema,
  shippingAddress: PaymentAddressSchema,
  basketItems: z.array(PaymentBasketItemsSchema),
});

export type IItemTransactions = z.infer<typeof ItemTransactionsSchema>;
export const ItemTransactionsSchema = z.object({
  paymentTransactionId: z.string(),
  itemId: z.string(),
  price: z.number(),
  paidPrice: z.number(),
  transactionStatus: z.union([z.literal(-1), z.literal(0), z.literal(1), z.literal(2)]),
  blockageRate: z.number(),
  blockageRateAmountMerchant: z.number(),
  blockageResolvedDate: z.string(),
  iyziCommissionFee: z.number(),
  iyziCommissionRateAmount: z.number(),
  merchantCommissionRate: z.number(),
  merchantCommissionRateAmount: z.number(),
  merchantPayoutAmount: z.number(),
  convertedPayout: z.object({
    paidPrice: z.number(),
    iyziCommissionFee: z.number(),
    iyziCommissionRateAmount: z.number(),
    blockageRateAmount: z.number(),
    blockageRateAmountMerchant: z.number(),
    merchantPayoutAmount: z.number(),
    iyziConversionRate: z.number(),
    iyziConversionRateAmount: z.number(),
    currency: z.string(),
  }),
});

const FraudStatusSchema = z.union([z.literal(-1), z.literal(0), z.literal(1)]);

export type IPaymentResult = z.infer<typeof PaymentResultSchema>;
export const PaymentResultSchema = z.object({
  status: z.enum(['success', 'failure']),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
  paymentId: z.string(),
  price: z.number(),
  paidPrice: z.number(),
  currency: z.string(),
  installment: InstallmentNumberSchema,
  basketId: z.string(),
  binNumber: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardType: z.string(),
  fraudStatus: FraudStatusSchema,
  iyziCommissionFee: z.number(),
  iyziCommissionRateAmount: z.number(),
  merchantCommissionRate: z.number(),
  merchantCommissionRateAmount: z.number(),
  itemTransactions: z.array(ItemTransactionsSchema),
});

export type IPaymentCheckCodeForIyzicoResult = z.infer<
  typeof PaymentCheckCodeForIyzicoResultSchema
>;
export const PaymentCheckCodeForIyzicoResultSchema = z.object({
  status: z.enum(['success', 'failure']),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
  token: z.string(),
  checkoutFormContent: z.string(),
  tokenExpireTime: z.number(),
  paymentPageUrl: z.string(),
  payWithIyzicoPageUrl: z.string(),
  errorCode: z.string().optional(),
  errorMessage: z.string().optional(),
  errorGroup: z.string().optional(),
});

export type IPaymentResultForIyzico = z.infer<typeof PaymentResultForIyzicoSchema>;
export const PaymentResultForIyzicoSchema = z.object({
  token: z.string(),
  callbackUrl: z.string(),
  status: z.enum(['success', 'failure']),
  paymentStatus: z.enum([
    'SUCCESS',
    'FAILURE',
    'INIT_THREEDS',
    'CALLBACK_THREEDS',
    'BKM_POS_SELECTED',
    'CALLBACK_RECCO',
  ]),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
  paymentId: z.string(),
  price: z.number(),
  paidPrice: z.number(),
  currency: z.string(),
  installment: InstallmentNumberSchema,
  basketId: z.string(),
  binNumber: z.string(),
  lastFourDigits: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardType: z.string(),
  fraudStatus: FraudStatusSchema,
  iyziCommissionFee: z.number(),
  iyziCommissionRateAmount: z.number(),
  merchantCommissionRate: z.number(),
  merchantCommissionRateAmount: z.number(),
  itemTransactions: z.array(ItemTransactionsSchema),
  authCode: z.string(),
  phase: z.string(),
  hostReference: z.string(),
  signature: z.string(),
});

export type IPaymentWith3DResult = z.infer<typeof PaymentWith3DResultSchema>;
export const PaymentWith3DResultSchema = z.object({
  status: z.enum(['success', 'failure']),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
  htmlContent: z.string(),
});

export type IPaymentResultCancel = z.infer<typeof PaymentResultCancelSchema>;
export const PaymentResultCancelSchema = z.object({
  price: z.string(),
  currency: z.string(),
  paymentId: z.string(),
  status: z.enum(['success', 'failure']),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.enum(['tr', 'en']),
  systemTime: z.number(),
  conversationId: z.string(),
});

export type IIyzicoHTML = z.infer<typeof IyzicoHTMLSchema>;
export const IyzicoHTMLSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  token: z.string(),
  checkoutFormContent: z.string(),
  tokenExpireTime: z.number(),
  paymentPageUrl: z.string(),
  payWithIyzicoPageUrl: z.string(),
  signature: z.string(),
});

export type IIyzicoHTML3D = z.infer<typeof IyzicoHTML3DSchema>;
export const IyzicoHTML3DSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  threeDSHtmlContent: z.string(),
  signature: z.string(),
});

export const DEFAULT_PAYMENT_RESULT_IYZICO: IPaymentResultForIyzico = getDefaultsForSchema(
  PaymentResultForIyzicoSchema,
);
