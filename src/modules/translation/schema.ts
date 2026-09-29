import { z } from 'zod';
import { ADD_TRANSLATION } from './validation';
import { MongoSchema, IMongoSchema } from '../../types/common';
import { DEFAULT_LOCALES_WEB } from '../locale/schema';
import { defaultTranslations } from './locales';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';

/*************************
 *       TYPES           *
 *************************/

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

/*************************
 *       CONSTANTS       *
 *************************/

export const DEFAULT_TRANSLATION = getDefaultsForSchema(TranslationSchema);
export const DEFAULT_TRANSLATIONS: Omit<ITranslation, keyof IMongoSchema>[] =
  DEFAULT_LOCALES_WEB.map(({ code, language, name, file }) => ({
    code,
    language,
    name,
    file,
    translations: { ...defaultTranslations[code] },
  }));
