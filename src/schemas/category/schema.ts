import { registry } from '../registry';
import { ADD_CATEGORY, ADD_CATEGORIES } from './validation';

export const CategorySchema = registry.register('Category', ADD_CATEGORY());

export const UpdateCategorySchema = registry.register('UpdateCategory', ADD_CATEGORY().partial());

export const AddCategorySchema = registry.register('AddCategory', ADD_CATEGORIES());
