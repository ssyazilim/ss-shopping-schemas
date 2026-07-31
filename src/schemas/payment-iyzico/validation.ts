import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';
import {
  ADD_BASKET_ITEM,
  ADD_BILLING_ADDRESS,
  ADD_BUYER,
  ADD_SHIPPING_ADDRESS,
} from '../payment/validation';
import { isValidCard } from '../../utils/validations';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BASKET_ITEM_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['674094c121add706a8980816'] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Samsung Galaxy A16 4 Gb Ram 128 Gb Gri'] }),
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1500.65] }),
    category1: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Cep telefonu & Aksesuar'] }),
    category2: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['product'] }),
    itemType: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['PHYSICAL'] }),
  });
};
export const ADD_SHIPPING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ayşe'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik'] }),
  });
};
export const ADD_BILLING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    contactName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Varyant Restaurant'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    address: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Bahçelievler Mahallesi, Atatürk Parkı 25/21'] }),
    zipCode: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['07500'] }),
  });
};
export const ADD_BUYER_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    id: z
      .string()
      .length(24, { message: m.public_forms_validations_minLength(24) })
      .meta({ examples: ['674094c121add706a8980819'] }),
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Ayşe'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarı'] }),
    identityNumber: z
      .string()
      .length(11, { message: m.public_forms_validations_minLength(11) })
      .meta({ examples: ['19342410262'] }),
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['no-reply@ssyazilim.com'] }),
    country: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Türkiye'] }),
    city: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Antalya'] }),
    registrationAddress: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Sarıabalı Mahallesi, Müftüler Mevki, Sokak:20 No:3 Serik'] }),
    ip: z.union([z.ipv4(), z.ipv6()]).meta({ examples: ['95.70.235.104'] }),
  });
};
export const ADD_PAYMENT_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    cardAlias: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ALISARI'] }),
    cardHolderName: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ALI SARI'] }),
    cardNumber: z
      .string()
      .refine(isValidCard, { message: m.public_forms_validations_cardNumber })
      .meta({ examples: ['5170410000000004'] }),
    expireMonth: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(2) })
      .max(2, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['10'] }),
    expireYear: z
      .string()
      .min(4, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['2030'] }),
  });
};
export const ADD_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    email: z
      .email({ message: m.public_forms_validations_email })
      .meta({ examples: ['no-reply@ssyazilim.com'] }),
    card: ADD_PAYMENT_CARD_IYZICO(locale),
  });
};
export const ADD_PAYMENT_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1500.65] }),
    paidPrice: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1800.65] }),
    installments: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    paymentCard: ADD_PAYMENT_CARD_IYZICO(locale),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};

export const ADD_PAYMENT_CARD_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return ADD_PAYMENT_CARD_IYZICO(locale).extend({
    cvc: z
      .string()
      .min(3, { message: m.public_forms_validations_minLength(3) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['123'] }),
  });
};
export const ADD_PAYMENT_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1500.65] }),
    paidPrice: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1800.65] }),
    installments: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .positive({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    paymentCard: ADD_PAYMENT_CARD_IYZICO_NON_3D(locale),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};

export const ADD_PAYMENT_CARD = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    name: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['ALI'] }),
    surname: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['SARI'] }),
    cardNumber: z
      .string()
      .min(16, { message: m.public_forms_validations_minLength(16) })
      .max(16, { message: m.public_forms_validations_maxLength(16) })
      .meta({ examples: ['5890040000000016'] }),
    expireMonth: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(2, { message: m.public_forms_validations_maxLength(2) })
      .meta({ examples: ['11'] }),
    expireYear: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['2026'] }),
    cvc: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(4, { message: m.public_forms_validations_maxLength(4) })
      .meta({ examples: ['704'] }),
    installment: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
    registerCard: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [0] }),
  });
};

export const CHECK_HTML_FOR_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    paymentCard: z.object({
      name: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['Ali'] }),
      surname: z
        .string()
        .min(2, { message: m.public_forms_validations_minLength(2) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['SARI'] }),
    }),
    buyer: ADD_BUYER(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS(locale),
    billingAddress: ADD_BILLING_ADDRESS(locale),
    basketItems: z.array(ADD_BASKET_ITEM(locale)),
  });
};
export const COMPLETE_PAYMENT_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    conversationId: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['e1e4b5c04f3a4b6a9d8ca0a6f3e3f4a1'] }),
    conversationData: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: [''] }),
  });
};
export const CHECK_INSTALLMENT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    binNumber: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['531157'] }),
    price: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['2500'] }),
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
