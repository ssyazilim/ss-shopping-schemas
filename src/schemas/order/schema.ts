import { registry } from '../registry';
import {
  ADD_ORDER_BASKET_ITEM,
  ADD_ORDER_BUYER,
  ADD_ORDER_PAYMENT,
  ADD_ORDER_SHIPMENT,
  ADD_ORDER_USER,
  SAVE_ORDER,
} from './validation';

registry.register('orderUser', ADD_ORDER_USER());
registry.register('orderPayment', ADD_ORDER_PAYMENT());
registry.register('orderBuyer', ADD_ORDER_BUYER());
registry.register('orderBasketItem', ADD_ORDER_BASKET_ITEM());
registry.register('orderShipment', ADD_ORDER_SHIPMENT());

export const SaveOrderSchema = registry.register('saveOrder', SAVE_ORDER());
