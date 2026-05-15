import type { IPaymentBasketItems } from '../zod/payment';

export interface IPaymentCard {
  cardHolderName: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
  cvc: string;
  registerCard?: 0 | 1;
}

export interface IPaymentBuyer {
  id: string;
  name: string;
  surname: string;
  identityNumber: string;
  city: string;
  country: string;
  email: string;
  message?: string;
  gsmNumber?: string;
  ip: string;
  registrationAddress: string;
  zipCode?: string;
  registrationDate?: string;
  lastLoginDate?: string;
}

export interface IPaymentAddress {
  contactName: string;
  city: string;
  country: string;
  address: string;
  zipCode?: string;
}

export interface IInstallment {
  status: 'success' | 'failure';
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
  installmentDetails: {
    binNumber: string;
    price: string;
    cardType: 'CREDIT_CARD' | 'DEBIT_CARD' | 'PREPAID_CARD';
    cardAssociation: 'MASTER_CARD' | 'VISA' | 'TROY' | 'AMERICAN_EXPRESS';
    cardFamilyName: 'Bonus' | 'Axess' | 'World' | 'Maximum' | 'Paraf' | 'cardFinans' | 'Advantage';
    force3ds: '1' | '0';
    bankName: string;
    bankCode: number;
  };
  installmentPrices: {
    installmentDetails: {
      installmentPrice: string;
      totalPrice: number;
      installmentNumber: number;
    };
  };
  errorCode?: string;
  errorMessage?: string;
  errorGroup?: string;
}

export interface IPaymentIyzico {
  locale?: 'tr' | 'en';
  conversationId?: string;
  price: number;
  paidPrice: number;
  currency: string;
  installment: 1 | 2 | 3 | 6 | 9;
  basketId?: string;
  paymentChannel?:
    | 'WEB'
    | 'MOBILE'
    | 'MOBILE_WEB'
    | 'MOBILE_IOS'
    | 'MOBILE_ANDROID'
    | 'MOBILE_WINDOWS'
    | 'MOBILE_TABLET'
    | 'MOBILE_PHONE';
  paymentGroup?: 'PRODUCT' | 'LISTING' | 'SUBSCRIPTION';
  paymentCard: IPaymentCard | { cardUserKey: string; cardToken: string };
  buyer: IPaymentBuyer;
  billingAddress: IPaymentAddress;
  shippingAddress: IPaymentAddress;
  basketItems: IPaymentBasketItems[];
}

export interface IPaymentCheckCodeFor3D extends IPaymentIyzico {
  callbackUrl: string;
}

export interface IPaymentCheckCodeForIyzico {
  locale?: 'tr' | 'en';
  conversationId?: string;
  price: number;
  paidPrice: number;
  currency: string;
  installment: 1 | 2 | 3 | 6 | 9;
  basketId?: string;
  paymentChannel?:
    | 'WEB'
    | 'MOBILE'
    | 'MOBILE_WEB'
    | 'MOBILE_IOS'
    | 'MOBILE_ANDROID'
    | 'MOBILE_WINDOWS'
    | 'MOBILE_TABLET'
    | 'MOBILE_PHONE';
  paymentGroup?: 'PRODUCT' | 'LISTING' | 'SUBSCRIPTION';
  callbackUrl: string;
  buyer: IPaymentBuyer;
  billingAddress: IPaymentAddress;
  shippingAddress: IPaymentAddress;
  basketItems: IPaymentBasketItems[];
}

export interface IItemTransactions {
  paymentTransactionId: string;
  itemId: string;
  price: number;
  paidPrice: number;
  transactionStatus: -1 | 0 | 1 | 2;
  blockageRate: number;
  blockageRateAmountMerchant: number;
  blockageResolvedDate: string;
  iyziCommissionFee: number;
  iyziCommissionRateAmount: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  merchantPayoutAmount: number;
  convertedPayout: {
    paidPrice: number;
    iyziCommissionFee: number;
    iyziCommissionRateAmount: number;
    blockageRateAmount: number;
    blockageRateAmountMerchant: number;
    merchantPayoutAmount: number;
    iyziConversionRate: number;
    iyziConversionRateAmount: number;
    currency: string;
  };
}

export interface IPaymentResult {
  status: 'success' | 'failure';
  errorCode: string;
  errorMessage: string;
  errorGroup: string;
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
  paymentId: string;
  price: number;
  paidPrice: number;
  currency: string;
  installment: 1 | 2 | 3 | 6 | 9;
  basketId: string;
  binNumber: string;
  cardAssociation: string;
  cardFamily: string;
  cardType: string;
  fraudStatus: -1 | 0 | 1;
  iyziCommissionFee: number;
  iyziCommissionRateAmount: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  itemTransactions: IItemTransactions[];
}

export interface IPaymentCheckCodeForIyzicoResult {
  status: 'success' | 'failure';
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
  token: string;
  checkoutFormContent: string;
  tokenExpireTime: number;
  paymentPageUrl: string;
  payWithIyzicoPageUrl: string;
  errorCode?: string;
  errorMessage?: string;
  errorGroup?: string;
}

export interface IPaymentResultForIyzico {
  token: string;
  callbackUrl: string;
  status: 'success' | 'failure';
  paymentStatus:
    | 'SUCCESS'
    | 'FAILURE'
    | 'INIT_THREEDS'
    | 'CALLBACK_THREEDS'
    | 'BKM_POS_SELECTED'
    | 'CALLBACK_RECCO';
  errorCode: string;
  errorMessage: string;
  errorGroup: string;
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
  paymentId: string;
  price: number;
  paidPrice: number;
  currency: string;
  installment: 1 | 2 | 3 | 6 | 9;
  basketId: string;
  binNumber: string;
  lastFourDigits: string;
  cardAssociation: string;
  cardFamily: string;
  cardType: string;
  fraudStatus: -1 | 0 | 1;
  iyziCommissionFee: number;
  iyziCommissionRateAmount: number;
  merchantCommissionRate: number;
  merchantCommissionRateAmount: number;
  itemTransactions: IItemTransactions[];
  authCode: string;
  phase: string;
  hostReference: string;
  signature: string;
}

export interface IPaymentWith3DResult {
  status: 'success' | 'failure';
  errorCode: string;
  errorMessage: string;
  errorGroup: string;
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
  htmlContent: string;
}

export interface IPaymentResultCancel {
  price: string;
  currency: string;
  paymentId: string;
  status: 'success' | 'failure';
  errorCode: string;
  errorMessage: string;
  errorGroup: string;
  locale: 'tr' | 'en';
  systemTime: number;
  conversationId: string;
}

export interface IIyzicoHTML {
  status: string;
  locale: string;
  systemTime: number;
  conversationId: string;
  token: string;
  checkoutFormContent: string;
  tokenExpireTime: number;
  paymentPageUrl: string;
  payWithIyzicoPageUrl: string;
  signature: string;
}

export interface IIyzicoHTML3D {
  status: string;
  locale: string;
  systemTime: number;
  conversationId: string;
  threeDSHtmlContent: string;
  signature: string;
}

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_PAYMENT_RESULT_IYZICO: IPaymentResultForIyzico = {
  token: '',
  callbackUrl: '',
  status: 'failure',
  paymentStatus: 'FAILURE',
  errorCode: '',
  errorMessage: '',
  errorGroup: '',
  locale: 'tr',
  systemTime: 0,
  conversationId: '',
  paymentId: '',
  price: 0,
  paidPrice: 0,
  currency: '',
  installment: 1,
  basketId: '',
  binNumber: '',
  lastFourDigits: '',
  cardAssociation: '',
  cardFamily: '',
  cardType: '',
  fraudStatus: -1,
  iyziCommissionFee: 0,
  iyziCommissionRateAmount: 0,
  merchantCommissionRate: 0,
  merchantCommissionRateAmount: 0,
  itemTransactions: [],
  authCode: '',
  phase: 'AUTH',
  hostReference: '',
  signature: '',
};
