import { z } from 'zod';
import { registry } from '../registry';
import {
  BASKET_ITEM,
  BILLING_ADDRESS,
  BUYER,
  PAYMENT_CARD,
  SHIPPING_ADDRESS,
  SHIPMENT,
  PAYMENT_USER,
  ADD_PAYMENT,
  SAVE_PAYMENT,
  CHECK_HTML_FOR_IYZICO,
  COMPLETE_PAYMENT_3D,
  CHECK_INSTALLMENT,
  CANCEL_PAYMENT,
  UPDATE_TAX,
} from './validation';

registry.register('basketItems', z.array(BASKET_ITEM()));
registry.register('billingAddress', BILLING_ADDRESS());
registry.register('buyer', BUYER());
registry.register('paymentCard', PAYMENT_CARD());
registry.register('shippingAddress', SHIPPING_ADDRESS());
registry.register('shipment', SHIPMENT());
registry.register('paymentUser', PAYMENT_USER());

export const AddPaymentSchema = registry.register('addPayment', ADD_PAYMENT());

export const SavePaymentSchema = registry.register('savePayment', SAVE_PAYMENT());

export const CheckHTMLForIyzicoSchema = registry.register(
  'checkHTMLForIyzico',
  CHECK_HTML_FOR_IYZICO(),
);

export const CompletePayment3DSchema = registry.register(
  'completePayment3D',
  COMPLETE_PAYMENT_3D(),
);

export const CheckInstallmentSchema = registry.register('checkInstallment', CHECK_INSTALLMENT());

export const CancelPaymentSchema = registry.register('cancelPayment', CANCEL_PAYMENT());

export const UpdateTaxSchema = registry.register('updateTax', UPDATE_TAX());
