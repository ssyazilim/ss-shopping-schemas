import { registry } from '../registry';
import { ADD_PRODUCT, ADD_PRODUCTS } from './validation';

export const ProductSchema = registry.register('addProduct', ADD_PRODUCT());
export const EditProductSchema = registry.register('editProduct', ADD_PRODUCT().partial());
export const AddProductsSchema = registry.register('addProducts', ADD_PRODUCTS());
