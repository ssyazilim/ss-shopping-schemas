import { registry } from '../registry';
import {
  SHIPPING_ORDER_INFO,
  ADD_SHIPPING_ADDRESS,
  ADD_SHIPPING_SHIPMENT,
  CREATE_SHIPPING_SHIPMENT,
  SHIPPING_RETURN_ADDRESS,
  RETURN_SHIPPING_SHIPMENT,
  UPDATE_SHIPPING_PACKAGE,
  SHIPPING_TEMPLATE,
  SHIPPING_PROVIDER,
  SHIPPING_WEBHOOK,
} from './validation';

registry.register('shippingOrderInfo', SHIPPING_ORDER_INFO());

export const AddShippingAddressSchema = registry.register('addShippingAddress', ADD_SHIPPING_ADDRESS());

export const AddShippingShipmentSchema = registry.register('addShippingShipment', ADD_SHIPPING_SHIPMENT());

export const CreateShippingShipmentSchema = registry.register('createShippingShipment', CREATE_SHIPPING_SHIPMENT());

registry.register('shippingReturnAddress', SHIPPING_RETURN_ADDRESS());

export const ReturnShippingShipmentSchema = registry.register('returnShippingShipment', RETURN_SHIPPING_SHIPMENT());

export const UpdateShippingPackageSchema = registry.register('updateShippingPackage', UPDATE_SHIPPING_PACKAGE());

export const ShippingTemplateSchema = registry.register('shippingTemplate', SHIPPING_TEMPLATE());

export const ShippingProviderSchema = registry.register('shippingProvider', SHIPPING_PROVIDER());

export const ShippingWebhookSchema = registry.register('shippingWebhook', SHIPPING_WEBHOOK());
