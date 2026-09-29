import { z } from 'zod';
import { MongoSchema } from '../../types/common';

/*************************
 *       TYPES           *
 *************************/

const IyzicoLocaleSchema = z.enum(['TR', 'EN']);
const IyzicoCurrencySchema = z.enum(['TRY', 'EUR', 'USD', 'IRR', 'GBP', 'NOK', 'RUB', 'CHF']);
const IyzicoPriceSchema = z.union([z.number(), z.string()]);

const IyzicoResultBase = z.object({
  status: z.string(),
  locale: IyzicoLocaleSchema.optional(),
  systemTime: z.number(),
  conversationId: z.string().optional(),
});

export type IPaymentCard = z.infer<typeof PaymentCardSchema>;
export const PaymentCardSchema = z.object({
  cardHolderName: z.string(),
  cardNumber: z.string(),
  expireMonth: z.string(),
  expireYear: z.string(),
  cvc: z.string(),
  registerCard: z.union([z.literal(0), z.literal(1)]).optional(),
});

export type IRefundV2Result = z.infer<typeof RefundV2RequestSchema>;
export const RefundV2ResultSchema = z.object({
  authCode: z.string().optional(),
  refundHostReference: z.string().optional(),
  retryable: z.string().optional(),
  signature: z.string().optional(),
});

export type IRefundV2Request = z.infer<typeof RefundV2RequestSchema>;
export const RefundV2RequestSchema = z.object({
  locale: z.enum(['tr', 'en']).optional(),
  conversationId: z.string().optional(),
  paymentId: z.string(),
  price: z.union([z.number(), z.string()]),
  currency: z.enum(['TRY', 'EUR', 'USD', 'GBP', 'NOK', 'CHF']).optional(),
  ip: z.string().optional(),
});

export type ICardToken = z.infer<typeof CardTokenSchema>;
export const CardTokenSchema = z.object({
  cardUserKey: z.string(),
  cardToken: z.string(),
});

export type ICard = z.infer<typeof CardSchema>;
export const CardSchema = z
  .object({
    userId: z.string(),
    email: z.string(),
    card: CardTokenSchema,
  })
  .extend(MongoSchema.shape);

export type IDetailType = z.infer<typeof DetailTypeSchema>;
export const DetailTypeSchema = z.object({ locale: z.string(), cardUserKey: z.string() });

export type ISaveIyzico = z.infer<typeof SaveIyzicoSchema>;
export const SaveIyzicoSchema = z.object({
  userId: z.string(),
  email: z.string(),
  card: CardTokenSchema,
});

export type IDeleteIyzico = z.infer<typeof DeleteIyzicoSchema>;
export const DeleteIyzicoSchema = z.object({
  locale: z.string(),
  cardUserKey: z.string(),
  cardToken: z.string(),
});

export type ICardType = z.infer<typeof CardTypeSchema>;
export const CardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  cardUserKey: z.string(),
  binNumber: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankName: z.string(),
  cardBankCode: z.string(),
  cardToken: z.string(),
  cardAlias: z.string(),
});

export type ISaveCardType = z.infer<typeof SaveCardTypeSchema>;
export const SaveCardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
  binNumber: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankName: z.string(),
  cardBankCode: z.number(),
  email: z.string(),
  cardUserKey: z.string(),
  cardToken: z.string(),
  cardAlias: z.string(),
});

export type IDeleteCardType = z.infer<typeof DeleteCardTypeSchema>;
export const DeleteCardTypeSchema = z.object({
  status: z.string(),
  errorCode: z.string(),
  errorMessage: z.string(),
  errorGroup: z.string(),
  locale: z.string(),
  systemTime: z.number(),
  conversationId: z.string(),
});

export type ICardForm = z.infer<typeof CardFormSchema>;
export const CardFormSchema = z.object({
  cardAlias: z.string(),
  name: z.string(),
  surname: z.string(),
  cardNumber: z.string(),
  expireMonth: z.string(),
  expireYear: z.string(),
  cvc: z.string(),
});

export type ICardPaymentAuth = ICardToken;
export const CardPaymentAuthSchema = CardTokenSchema;

export type ICardPayment = z.infer<typeof CardPaymentSchema>;
export const CardPaymentSchema = z.object({
  name: z.string(),
  surname: z.string(),
  cardNumber: z.string().optional(),
  expireMonth: z.string().optional(),
  expireYear: z.string().optional(),
  cvc: z.string().optional(),
  installment: z.number().optional(),
  registerCard: z.number().optional(),
});

export type IInstallmentPrice = z.infer<typeof InstallmentPriceSchema>;
export const InstallmentPriceSchema = z.object({
  installmentPrice: z.string(),
  totalPrice: z.string(),
  installmentNumber: z.string(),
});

export type IInstallmentDetails = z.infer<typeof InstallmentDetailsSchema>;
export const InstallmentDetailsSchema = z.object({
  binNumber: z.string(),
  price: z.number(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamilyName: z.string(),
  force3ds: z.number(),
  bankCode: z.number(),
  bankName: z.string(),
  forceCvc: z.number(),
  commercial: z.number(),
  dccEnabled: z.number(),
  agriculturalEnabled: z.number(),
  installmentPrices: z.array(InstallmentPriceSchema),
});

export type IInstallmentCard = z.infer<typeof InstallmentCardSchema>;
export const InstallmentCardSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.date(),
  conversationId: z.string(),
  installmentDetails: z.array(InstallmentDetailsSchema),
});

export type ICardDetails = z.infer<typeof CardDetailsSchema>;
export const CardDetailsSchema = z.object({
  cardToken: z.string(),
  cardAlias: z.string(),
  binNumber: z.string(),
  lastFourDigits: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankCode: z.number(),
  cardBankName: z.string(),
});

export type ICardsFromService = z.infer<typeof CardsFromServiceSchema>;
export const CardsFromServiceSchema = z.object({
  status: z.string(),
  locale: z.string(),
  systemTime: z.date(),
  cardUserKey: z.string(),
  cardDetails: z.array(CardDetailsSchema),
});

/*************************
 *  IYZIPAY SDK RESULTS  *
 *************************/

export type IIyzicoConvertedPayout = z.infer<typeof IyzicoConvertedPayoutSchema>;
export const IyzicoConvertedPayoutSchema = z
  .object({
    paidPrice: IyzicoPriceSchema,
    iyzicoCommissionRateAmount: z.number(),
    iyzicoCommissionFee: z.number(),
    blockageRateAmountMerchant: z.number(),
    blockageRateAmountSubMerchant: z.number(),
    subMerchantPayoutAmount: z.number(),
    merchantPayoutAmount: z.number(),
    iyziConversionRate: z.number(),
    iyziConversionRateAmount: z.number(),
    currency: IyzicoCurrencySchema,
  })
  .meta({ id: 'IyzicoConvertedPayout' });

export type IIyzicoItemTransaction = z.infer<typeof IyzicoItemTransactionSchema>;
export const IyzicoItemTransactionSchema = z
  .object({
    itemId: z.string(),
    paymentTransactionId: z.string(),
    transactionStatus: z.number(),
    price: IyzicoPriceSchema,
    paidPrice: IyzicoPriceSchema,
    merchantCommissionRate: z.number(),
    merchantCommissionRateAmount: z.number(),
    iyzicoCommissionRateAmount: z.number(),
    iyzicoCommissionFee: z.number(),
    blockageRate: z.number(),
    blockageRateAmountMerchant: z.number(),
    blockageRateAmountSubMerchant: z.number(),
    blockageResolvedDate: z.string(),
    subMerchantPrice: z.number(),
    subMerchantPayoutRate: z.number(),
    subMerchantPayoutAmount: z.number(),
    merchantPayoutAmount: z.number(),
    convertedPayout: IyzicoConvertedPayoutSchema,
  })
  .meta({ id: 'IyzicoItemTransaction' });

export type IIyzicoSavedCard = z.infer<typeof IyzicoSavedCardSchema>;
export const IyzicoSavedCardSchema = z
  .object({
    cardToken: z.string(),
    cardAlias: z.string(),
    binNumber: z.string(),
    lastFourDigits: z.string(),
    cardType: z.string(),
    cardAssociation: z.string(),
    cardFamily: z.string(),
    cardBankCode: z.number(),
    cardBankName: z.string(),
  })
  .meta({ id: 'IyzicoSavedCard' });

export type IIyzicoBuyer = z.infer<typeof IyzicoBuyerSchema>;
export const IyzicoBuyerSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    surname: z.string(),
    gsmNumber: z.string().optional(),
    email: z.string().optional(),
    identityNumber: z.string(),
    lastLoginDate: z.string().optional(),
    registrationDate: z.string().optional(),
    registrationAddress: z.string(),
    ip: z.string(),
    city: z.string(),
    country: z.string(),
    zipCode: z.string().optional(),
  })
  .meta({ id: 'IyzicoBuyer' });

export type IIyzicoAddress = z.infer<typeof IyzicoAddressSchema>;
export const IyzicoAddressSchema = z
  .object({
    contactName: z.string(),
    city: z.string(),
    country: z.string(),
    address: z.string(),
    zipCode: z.string().optional(),
  })
  .meta({ id: 'IyzicoAddress' });

export type IIyzicoBasketItem = z.infer<typeof IyzicoBasketItemSchema>;
export const IyzicoBasketItemSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    category1: z.string(),
    category2: z.string().optional(),
    itemType: z.enum(['PHYSICAL', 'VIRTUAL']),
    price: IyzicoPriceSchema,
    subMerchantPrice: IyzicoPriceSchema.optional(),
    subMerchantKey: z.string().optional(),
  })
  .meta({ id: 'IyzicoBasketItem' });

export type IIyzicoInstallmentDetail = z.infer<typeof IyzicoInstallmentDetailSchema>;
export const IyzicoInstallmentDetailSchema = z
  .object({
    installmentNumber: z.number(),
    totalPrice: IyzicoPriceSchema,
    installmentPrice: IyzicoPriceSchema,
    installmentRate: z.number(),
  })
  .meta({ id: 'IyzicoInstallmentDetail' });

export type IIyzicoPaymentResult = z.infer<typeof IyzicoPaymentResultSchema>;
export const IyzicoPaymentResultSchema = IyzicoResultBase.extend({
  price: IyzicoPriceSchema,
  paidPrice: IyzicoPriceSchema,
  installment: z.number(),
  paymentId: z.string(),
  fraudStatus: z.number(),
  merchantCommissionRate: z.number(),
  merchantCommissionRateAmount: z.number(),
  iyziCommissionRateAmount: z.number(),
  iyziCommissionFee: z.number(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardToken: z.string(),
  cardUserKey: z.string(),
  binNumber: z.string(),
  lastFourDigits: z.string(),
  basketId: z.string(),
  currency: IyzicoCurrencySchema,
  itemTransactions: z.array(IyzicoItemTransactionSchema),
  authCode: z.string(),
  phase: z.string(),
  mdStatus: z.string(),
  hostReference: z.string(),
}).meta({ id: 'IyzicoPaymentResult' });

export type IIyzicoCheckoutFormInitialResult = z.infer<
  typeof IyzicoCheckoutFormInitialResultSchema
>;
export const IyzicoCheckoutFormInitialResultSchema = IyzicoResultBase.extend({
  token: z.string(),
  checkoutFormContent: z.string(),
}).meta({ id: 'IyzicoCheckoutFormInitialResult' });

export type IIyzicoCheckoutFormRetrieveResult = z.infer<
  typeof IyzicoCheckoutFormRetrieveResultSchema
>;
export const IyzicoCheckoutFormRetrieveResultSchema = IyzicoResultBase.extend({
  token: z.string(),
  paymentStatus: z.string(),
  fraudStatus: z.number(),
  price: IyzicoPriceSchema,
  paidPrice: IyzicoPriceSchema,
  currency: IyzicoCurrencySchema,
  installment: z.number(),
  basketId: z.string(),
  paymentId: z.string(),
  paymentItems: z.array(IyzicoItemTransactionSchema),
  paymentCard: IyzicoSavedCardSchema,
  buyer: IyzicoBuyerSchema,
  shippingAddress: IyzicoAddressSchema,
  billingAddress: IyzicoAddressSchema,
  basketItems: z.array(IyzicoBasketItemSchema),
}).meta({ id: 'IyzicoCheckoutFormRetrieveResult' });

export type IIyzicoThreeDSInitializeResult = z.infer<typeof IyzicoThreeDSInitializeResultSchema>;
export const IyzicoThreeDSInitializeResultSchema = IyzicoResultBase.extend({
  threeDSHtmlContent: z.string(),
}).meta({ id: 'IyzicoThreeDSInitializeResult' });

export type IIyzicoInstallmentInfoResult = z.infer<typeof IyzicoInstallmentInfoResultSchema>;
export const IyzicoInstallmentInfoResultSchema = IyzicoResultBase.extend({
  binNumber: z.string(),
  price: IyzicoPriceSchema,
  installmentDetails: z.array(IyzicoInstallmentDetailSchema),
}).meta({ id: 'IyzicoInstallmentInfoResult' });

export type IIyzicoCancelPaymentResult = z.infer<typeof IyzicoCancelPaymentResultSchema>;
export const IyzicoCancelPaymentResultSchema = IyzicoResultBase.extend({
  paymentId: z.string(),
}).meta({ id: 'IyzicoCancelPaymentResult' });

export type IIyzicoRefundResult = z.infer<typeof IyzicoRefundResultSchema>;
export const IyzicoRefundResultSchema = IyzicoResultBase.extend({
  paymentId: z.string(),
  price: IyzicoPriceSchema,
  currency: IyzicoCurrencySchema,
  hostReference: z.string().optional(),
  authCode: z.string().optional(),
  refundHostReference: z.string().optional(),
  retryable: z.string().optional(),
  signature: z.string().optional(),
}).meta({ id: 'IyzicoRefundResult' });

export type IIyzicoSavePaymentCardResult = z.infer<typeof IyzicoSavePaymentCardResultSchema>;
export const IyzicoSavePaymentCardResultSchema = IyzicoResultBase.extend({
  externalId: z.string().optional(),
  email: z.string(),
  cardUserKey: z.string(),
  cardToken: z.string(),
  cardAlias: z.string(),
  binNumber: z.string(),
  lastFourDigits: z.string(),
  cardType: z.string(),
  cardAssociation: z.string(),
  cardFamily: z.string(),
  cardBankCode: z.number(),
  cardBankName: z.string(),
}).meta({ id: 'IyzicoSavePaymentCardResult' });

export type IIyzicoListUserCardsResult = z.infer<typeof IyzicoListUserCardsResultSchema>;
export const IyzicoListUserCardsResultSchema = IyzicoResultBase.extend({
  cardDetails: z.array(IyzicoSavedCardSchema),
}).meta({ id: 'IyzicoListUserCardsResult' });

export type IIyzicoDeleteUserCardResult = z.infer<typeof IyzicoDeleteUserCardResultSchema>;
export const IyzicoDeleteUserCardResultSchema = IyzicoResultBase.extend({}).meta({
  id: 'IyzicoDeleteUserCardResult',
});
