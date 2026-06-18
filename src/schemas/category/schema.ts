import { registry } from '../registry';
import { ADD_CATEGORY, ADD_CATEGORIES, MOVE_CATEGORY, REORDER_CATEGORY } from './validation';

export const CategorySchema = registry.register('Category', ADD_CATEGORY());

export const UpdateCategorySchema = registry.register('UpdateCategory', ADD_CATEGORY().partial());

export const AddCategorySchema = registry.register('AddCategory', ADD_CATEGORIES());

export const MoveCategorySchema = registry.register('MoveCategory', MOVE_CATEGORY());

export const ReorderCategorySchema = registry.register('ReOrderCategory', REORDER_CATEGORY());
