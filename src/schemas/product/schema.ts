import { registry } from '../registry';
import { ADD_PRODUCT, ADD_PRODUCTS, EDIT_PRODUCT } from './validation';

export const ProductSchema = registry.register('product', ADD_PRODUCT());
export const AddProductsSchema = registry.register('addProducts', ADD_PRODUCTS());
export const EditProductSchema = registry.register('editProduct', EDIT_PRODUCT());
