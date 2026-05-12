import { registry } from '../registry';
import { ADD_CART, SET_QUANTITY } from './validation';

export const AddToCartSchema = registry.register('AddToCart', ADD_CART());

export const SetQuantitySchema = registry.register('SetQuantity', SET_QUANTITY());
