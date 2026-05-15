import { registry } from '../registry';
import {
  PRICE,
  PRODUCT_PROPERTIES,
  VARIANTS_TYPE,
  PRODUCT,
  ADD_PRODUCTS,
  EDIT_PRODUCT,
  PRODUCT_IMAGE,
} from './validation';
import { ImageSchema } from '../../types/zod/image';

export const ImagesSchema = registry.register('images', ImageSchema);
export const PriceSchema = registry.register('price', PRICE());
export const ProductPropertiesSchema = registry.register('productProperties', PRODUCT_PROPERTIES());
export const VariantsTypeSchema = registry.register('variantsType', VARIANTS_TYPE());
export const ProductSchema = registry.register('product', PRODUCT());
export const AddProductsSchema = registry.register('addProducts', ADD_PRODUCTS());
export const EditProductSchema = registry.register('editProduct', EDIT_PRODUCT());
export const ProductImageSchema = registry.register('productImage', PRODUCT_IMAGE());
