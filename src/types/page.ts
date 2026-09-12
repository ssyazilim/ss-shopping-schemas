import { z } from 'zod';
import { ADD_PAGE, PageLocaleSchema } from '../schemas/page/validation';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';

export type IPageLocale = z.infer<typeof PageLocaleSchema>;

export type IPage = z.infer<typeof PageSchema>;
export const PageSchema = ADD_PAGE().extend({ companyId: z.string() }).extend(MongoSchema.shape);

export type IPageListItem = z.infer<typeof PageListItemSchema>;
export const PageListItemSchema = PageSchema.omit({ markdown: true });

/*************************
 *       CONSTANTS       *
 *************************/
export const PAGE_LOCALES = PageLocaleSchema.options;

export const DEFAULT_PAGE: IPage = getDefaultsForSchema(PageSchema);
