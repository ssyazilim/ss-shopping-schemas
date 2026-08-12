import { registry } from '../registry';
import { SAVE_ORDER } from './validation';

export const OrderSchema = registry.register('saveOrder', SAVE_ORDER());
export const EditOrderSchema = registry.register('editOrder', SAVE_ORDER().partial());
