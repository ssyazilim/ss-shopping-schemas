import { registry } from '../registry';
import { OrderSchema as OrderEntitySchema } from '../../types/order';
import { SAVE_ORDER } from './validation';

export const SaveOrderSchema = registry.register('saveOrder', SAVE_ORDER());
export const EditOrderSchema = registry.register('editOrder', SAVE_ORDER().partial());

export const OrderModel = registry.register('Order', OrderEntitySchema);
