import { z } from 'zod';
import { MongoSchema } from './common';
import { ImageSchema } from './product';
import { ADD_CATEGORY } from '../schemas';

/*************************
 *        TYPES          *
 *************************/
export type ICategory = z.infer<typeof CategoryDocSchema>;
export const CategoryDocSchema = ADD_CATEGORY().extend(MongoSchema.shape);

export type ICategoryYML = z.infer<typeof CategoryYMLSchema>;
export const CategoryYMLSchema = z.object({
  id: z.string(),
  parentId: z.string().optional(),
});

export type IGoogleCategory = z.infer<typeof GoogleCategorySchema>;
export const GoogleCategorySchema = z.object({
  id: z.string(),
  name: z.array(z.string()),
});

export type ITags = z.infer<typeof TagsSchema>;
export const TagsSchema = z.object({
  text: z.string(),
  tiClasses: z.array(z.string()),
});

export type ICategoryMenu = z.infer<typeof CategoryMenuSchema>;
export const CategoryMenuSchema: z.ZodType<any> = z.object({
  _id: z.string(),
  name: z.string(),
  parent: z.string(),
  categoryTree: z.array(z.string()),
  images: ImageSchema,
  subCategories: z.lazy(() => z.array(CategoryMenuSchema)),
});
