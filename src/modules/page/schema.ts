import { z } from 'zod';
import { ADD_PAGE, PageLocaleSchema } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';

export type IPageLocale = z.infer<typeof PageLocaleSchema>;

export type IPage = z.infer<typeof PageSchema>;
export const PageSchema = ADD_PAGE()
  .extend({ companyId: z.string() })
  .extend(MongoSchema.shape)
  .meta({ id: 'Page' });

export type IPageListItem = z.infer<typeof PageListItemSchema>;
export const PageListItemSchema = PageSchema.omit({ markdown: true }).meta({ id: 'PageListItem' });

export const PAGE_LOCALES = PageLocaleSchema.options;

export const DEFAULT_PAGE: IPage = getDefaultsForSchema(PageSchema);
