import { z } from 'zod';
import { fields } from '../fields';
import { ILocale } from '../../locales';
import * as locales from '../../locales';
import { isValidCard } from '../../utils/validations';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const ADD_BASKET_ITEM_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    id: f.text(24, 24),
    name: f.text(),
    price: z
      .number({ message: m.public_forms_validations_mustNumber })
      .positive({ message: m.public_forms_validations_mustNumberPositive }),
    category1: f.text(),
    category2: f.text(),
    itemType: f.text(),
  });
};
export const ADD_SHIPPING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    contactName: f.text(),
    country: f.text(),
    city: f.text(),
    address: f.text(),
  });
};
export const ADD_BILLING_ADDRESS_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    contactName: f.text(),
    country: f.text(),
    city: f.text(),
    address: f.text(),
    zipCode: f.text(),
  });
};
export const ADD_BUYER_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z.object({
    id: f.text(24, 24),
    name: f.text(),
    surname: f.text(),
    identityNumber: f.text(11, 11),
    email: f.email(),
    country: f.text(),
    city: f.text(),
    registrationAddress: f.text(),
    ip: z.union([z.ipv4(), z.ipv6()]),
  });
};

export const ADD_PAYMENT_CARD = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    name: f.text(),
    surname: f.text(),
    cardNumber: f.text(16, 16),
    expireMonth: f.text(1, 2),
    expireYear: f.text(2, 4),
    cvc: f.text(2, 4),
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
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    cardAlias: f.text(),
    cardHolderName: f.text(),
    cardNumber: z.string().refine(isValidCard, { message: m.public_forms_validations_cardNumber }),
    expireMonth: f.text(1, 2),
    expireYear: f.text(4, 4),
  });
};
export const ADD_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      email: f.email(),
      card: ADD_PAYMENT_CARD_IYZICO(locale),
    })
    .meta({ id: 'AddCard' });
};
export const ADD_PAYMENT_CARD_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return ADD_PAYMENT_CARD_IYZICO(locale).extend({
    cvc: f.text(3, 4),
  });
};

export const ADD_PAYMENT_IYZICO = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
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
    })
    .meta({ id: 'checkHTMLForIyzico' });
};
export const ADD_PAYMENT_IYZICO_NON_3D = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z
    .object({
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
    })
    .meta({ id: 'addPayment' });
};

export const CHECK_HTML_FOR_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    paymentCard: z.object({
      name: f.text(),
      surname: f.text(),
    }),
    buyer: ADD_BUYER_IYZICO(locale),
    shippingAddress: ADD_SHIPPING_ADDRESS_IYZICO(locale),
    billingAddress: ADD_BILLING_ADDRESS_IYZICO(locale),
    basketItems: z.array(ADD_BASKET_ITEM_IYZICO(locale)),
  });
};
export const COMPLETE_PAYMENT_3D = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      conversationId: f.text(),
      conversationData: f.text(),
    })
    .meta({ id: 'completePayment3D' });
};
export const CHECK_INSTALLMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      binNumber: f.text(),
      price: f.text(),
    })
    .meta({ id: 'checkInstallment' });
};
export const CANCEL_PAYMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      paymentId: f.text(),
    })
    .meta({ id: 'cancelPayment' });
};
export const DELETE_CARD_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      cardUserKey: f.text(),
      cardToken: f.text(),
    })
    .meta({ id: 'deleteCard' });
};
export const REFUND_PAYMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      paymentId: f.text(),
      conversationId: f.text(),
      price: f.text(),
      currency: f.text(),
    })
    .meta({ id: 'refundPayment' });
};
export const ADD_IYZICO = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];
  return z.object({
    name: f.text(),
    surname: f.text(),
    identityNumber: f.text(11, 11),
    phoneNumber: f.phone(),
    email: f.email(),
    checkApprove: z.literal(true, { message: m.public_forms_validations_required }),
  });
};
