import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';
import { ImageSchema } from './product';
import { ADD_CATEGORY } from '../schemas';

export type IParentId = z.infer<typeof IParentIdSchema>;
export const IParentIdSchema = z.object({
  _id: z.string(),
  name: z.string(),
  parentId: z.string(),
  ancestorsId: z.array(z.string()),
  order: z.number(),
});

export type ICategory = Omit<z.infer<typeof CategorySchema>, 'parentId' | 'ancestorsId'> & {
  parentId: IParentId | null | string;
  ancestorsId: IParentId[] | string[];
};
export const CategorySchema = ADD_CATEGORY()
  .extend({
    ancestorsId: z.array(z.string()),
    pathNames: z.array(z.string()),
    order: z.number(),
    productCount: z.number(),
  })
  .extend(MongoSchema.shape);

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

const CategoryMenuBaseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  parentId: IParentIdSchema.nullable(),
  pathNames: z.array(z.string()),
  order: z.number(),
  images: ImageSchema,
});
export type ICategoryMenu = z.infer<typeof CategoryMenuBaseSchema> & {
  subCategories: ICategoryMenu[];
};
export const CategoryMenuSchema: z.ZodType<ICategoryMenu> = CategoryMenuBaseSchema.extend({
  subCategories: z.lazy(() => z.array(CategoryMenuSchema)),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_CATEGORY: ICategory = getDefaultsForSchema(CategorySchema);
