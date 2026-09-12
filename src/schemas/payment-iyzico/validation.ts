import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';
import { isValidCard } from '../../utils/validations';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BASKET_ITEM_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    category1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    category2: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    itemType: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_SHIPPING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_BILLING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_BUYER_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z.string().length(24, { message: m.public_forms_validations_minLength(24) }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    identityNumber: z.string().length(11, { message: m.public_forms_validations_minLength(11) }),
    email: z.email({ message: m.public_forms_validations_email }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    registrationAddress: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    ip: z.union([z.ipv4(), z.ipv6()]),
  });
};

export const ADD_PAYMENT_CARD = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cardNumber: z
      .string()
      .min(16, { message: m.public_forms_validations_minLength(16) })
      .max(16, { message: m.public_forms_validations_maxLength(16) }),
    expireMonth: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(2, { message: m.public_forms_validations_maxLength(2) }),
    expireYear: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) }),
    cvc: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) }),
    installment: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    registerCard: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
  });
};
export const ADD_PAYMENT_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    cardAlias: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cardHolderName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cardNumber: z.string().refine(isValidCard, { message: m.public_forms_validations_cardNumber }),
    expireMonth: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(2) })
      .max(2, { message: m.public_forms_validations_maxLength(254) }),
    expireYear: z
      .string()
      .min(4, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z.email({ message: m.public_forms_validations_email }),
    card: ADD_PAYMENT_CARD_IYZICO(locale),
  });
};
export const ADD_PAYMENT_CARD_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return ADD_PAYMENT_CARD_IYZICO(locale).extend({
    cvc: z
      .string()
      .min(3, { message: m.public_forms_validations_minLength(3) })
      .max(4, { message: m.public_forms_validations_maxLength(4) }),
  });
};

export const ADD_PAYMENT_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    paidPrice: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    installments: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    paymentCard: ADD_PAYMENT_CARD_IYZICO(locale),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};
export const ADD_PAYMENT_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    paidPrice: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    installments: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    paymentCard: ADD_PAYMENT_CARD_IYZICO_NON_3D(locale),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};

export const CHECK_HTML_FOR_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentCard: z.object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
      surname: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) }),
    }),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};
export const COMPLETE_PAYMENT_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    conversationId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    conversationData: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const CHECK_INSTALLMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    binNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    price: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const CANCEL_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const DELETE_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    cardUserKey: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    cardToken: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const REFUND_PAYMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    conversationId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    price: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    currency: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
    identityNumber: z.string().length(11, { message: m.public_forms_validations_minLength(11) }),
    phoneNumber: z.e164({ message: m.public_forms_validations_phoneNumber }),
    email: z.email({ message: m.public_forms_validations_email }),
    checkApprove: z.literal(true, { message: m.public_forms_validations_required }),
  });
};
