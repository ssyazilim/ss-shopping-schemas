import { registry } from '../registry';
import {
  ProductSchema as ProductEntitySchema,
  ProductAndVariantSchema,
  BestProductsSchema,
} from '../../types/product';
import { ADD_PRODUCT, ADD_PRODUCTS } from './validation';

export const AddProductSchema = registry.register('addProduct', ADD_PRODUCT());
export const EditProductSchema = registry.register('editProduct', ADD_PRODUCT().partial());
export const AddProductsSchema = registry.register('addProducts', ADD_PRODUCTS());

export const ProductModel = registry.register('Product', ProductEntitySchema);
export const ProductAndVariantModel = registry.register(
  'ProductAndVariant',
  ProductAndVariantSchema,
);
export const BestProductsModel = registry.register('BestProducts', BestProductsSchema);
