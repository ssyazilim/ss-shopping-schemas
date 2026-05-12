import { z } from 'zod';
import { registry } from '../registry';
import { ADD_CATEGORY } from './validation';

export const CategorySchema = registry.register('Category', ADD_CATEGORY());

export const AddCategorySchema = registry.register('AddCategory', z.array(CategorySchema));

export const UpdateCategorySchema = registry.register('UpdateCategory', CategorySchema.partial());
