import { z } from 'zod';
import { registry } from '../registry';
import {
  ADD_BASKET_ITEM,
  ADD_BILLING_ADDRESS,
  ADD_BUYER,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPMENT,
  ADD_PAYMENT_USER,
  SAVE_PAYMENT,
  UPDATE_TAX,
} from './validation';

registry.register('basketItems', z.array(ADD_BASKET_ITEM()));
registry.register('billingAddress', ADD_BILLING_ADDRESS());
registry.register('buyer', ADD_BUYER());
registry.register('shippingAddress', ADD_SHIPPING_ADDRESS());
registry.register('shipment', ADD_SHIPMENT());
registry.register('paymentUser', ADD_PAYMENT_USER());

export const SavePaymentSchema = registry.register('savePayment', SAVE_PAYMENT());

export const UpdateTaxSchema = registry.register('updateTax', UPDATE_TAX());
