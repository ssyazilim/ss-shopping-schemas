import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';

export type ISearchState = z.infer<typeof SearchStateSchema>;
export const SearchStateSchema = z.object({
  page: z.number(),
  limit: z.number(),
  sort: z.string(),
  criteria: z.enum(['asc', 'desc']),
  text: z.string(),
  type: z.string(),
  category: z.string(),
  minPrice: z.number(),
  maxPrice: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  selectedProduct: z.string(),
});

export type IActiveFilter = z.infer<typeof ActiveFilterSchema>;
export const ActiveFilterSchema = z.object({
  name: z.string(),
  value: z.string(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_SEARCH_STATE: ISearchState = getDefaultsForSchema(SearchStateSchema);
