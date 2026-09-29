import { z } from 'zod';
import { ADD_PAGE } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';

/*************************
 *       TYPES           *
 *************************/

export type IPageFile = z.infer<typeof ContentFileSchema>;
export const ContentFileSchema = z
  .object({
    filePath: z.string(),
    sha: z.string(),
  })
  .meta({ id: 'ContentFile' });

export type IGitlabTreeItem = z.infer<typeof GitlabTreeItemSchema>;
export const GitlabTreeItemSchema = z.object({
  id: z.string(),
  path: z.string(),
  type: z.enum(['blob', 'tree']),
})

export type IPage = z.infer<typeof PageSchema>;
export const PageSchema = ADD_PAGE().extend(MongoSchema.shape).meta({ id: 'Page' });

export type IPageContent = z.infer<typeof PageContentSchema>;
export const PageContentSchema = PageSchema.extend({
  markdown: z.string(),
}).meta({ id: 'PageContent' });

/*************************
 *       CONSTANTS       *
 *************************/

export const DEFAULT_PAGE: IPage = getDefaultsForSchema(PageSchema);
