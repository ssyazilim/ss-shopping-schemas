import { z } from 'zod';
import { registry } from '../registry';

export const CategorySchema = registry.register(
  'Category',
  z.object({
    name: z.string(),
    parent: z.string(),
    tree: z.array(z.string()).meta({ examples: [['root']] }),
    categoryI10n: z
      .string()
      .optional()
      .meta({ examples: ["{'id':'543586','name':'Kıyafet'}"] }),
  }),
);

export const AddCategorySchema = registry.register('AddCategory', z.array(CategorySchema));

export const UpdateCategorySchema = registry.register('UpdateCategory', CategorySchema.partial());

export const ImageSchema = registry.register(
  'Image',
  z.object({
    image: z.object({
      name: z.string(),
      image: z.string(),
    }),
  }),
);
