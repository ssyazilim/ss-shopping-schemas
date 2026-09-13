import { z } from 'zod';
import { ADD_CATEGORY } from './validation';
import { MongoSchema } from '../../types/common';
import { ImageSchema } from '../product/schema';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

export type IParentId = z.infer<typeof IParentIdSchema>;
export const IParentIdSchema = z.object({
  _id: z.string(),
  name: z.string(),
  parentId: z.string(),
  ancestorsId: z.array(z.string()),
  order: z.number(),
});

export type ICategory = z.infer<typeof CategorySchema>;
export const CategorySchema = ADD_CATEGORY()
  .extend({
    parentId: z.union([z.string(), IParentIdSchema]).nullable(),
    ancestorsId: z.union([z.array(z.string()), z.array(IParentIdSchema)]),
    pathNames: z.array(z.string()),
    order: z.number(),
    productCount: z.number(),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Category' });

export type ICategoryYML = z.infer<typeof CategoryYMLSchema>;
export const CategoryYMLSchema = z.object({
  id: z.string(),
  parentId: z.string().optional(),
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

export const DEFAULT_CATEGORY: ICategory = getDefaultsForSchema(CategorySchema);
