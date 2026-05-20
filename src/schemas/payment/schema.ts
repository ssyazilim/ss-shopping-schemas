import { z } from 'zod';
import { registry } from '../registry';
import {
  ADD_BASKET_ITEM,
  ADD_BILLING_ADDRESS,
  ADD_BUYER,
  ADD_PAYMENT_CARD,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPMENT,
  ADD_PAYMENT_USER,
  ADD_PAYMENT,
  SAVE_PAYMENT,
  CHECK_HTML_FOR_IYZICO,
  COMPLETE_PAYMENT_3D,
  CHECK_INSTALLMENT,
  CANCEL_PAYMENT,
  UPDATE_TAX,
} from './validation';

registry.register('basketItems', z.array(ADD_BASKET_ITEM()));
registry.register('billingAddress', ADD_BILLING_ADDRESS());
registry.register('buyer', ADD_BUYER());
registry.register('paymentCard', ADD_PAYMENT_CARD());
registry.register('shippingAddress', ADD_SHIPPING_ADDRESS());
registry.register('shipment', ADD_SHIPMENT());
registry.register('paymentUser', ADD_PAYMENT_USER());

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
