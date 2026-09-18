import { z } from 'zod';
import { ADD_TRANSLATION } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';

export type ITranslation = z.infer<typeof TranslationSchema>;
export const TranslationSchema = ADD_TRANSLATION()
  .extend(MongoSchema.shape)
  .meta({ id: 'Translation' });

export type ITranslationKey = z.infer<typeof TranslationKeySchema>;
export const TranslationKeySchema = z
  .object({
    _id: z.string(),
    translations: z.object({ value: z.string().optional() }),
  })
  .meta({ id: 'TranslationKey' });

export const DEFAULT_TRANSLATION: ITranslation = getDefaultsForSchema(TranslationSchema);
