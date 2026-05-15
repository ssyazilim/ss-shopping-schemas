import { z } from 'zod';
import { TRANSLATION } from '../../schemas/translation/validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from './common';

/*************************
 *       TYPES           *
 *************************/
export type ITranslation = z.infer<typeof TranslationSchema>;
export const TranslationSchema = TRANSLATION()
  .omit({ locale: true })
  .extend({
    code: z.string(),
    language: z.string(),
    file: z.string(),
  })
  .extend(MongoSchema.shape);

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_SYSTEM_LOCALES = [
  { code: 'tr', language: 'tr-TR', name: 'Türkçe' },
  { code: 'en', language: 'en-US', name: 'English' },
  { code: 'ru', language: 'ru-RU', name: 'Русский' },
  { code: 'sa', language: 'ar-SA', name: 'العربية' },
  { code: 'fa', language: 'fa-FA', name: 'فارسی' },
];

export const DEFAULT_TRANSLATION: ITranslation = getDefaultsForSchema(TranslationSchema);
