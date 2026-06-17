import { z } from 'zod';
import { ADD_TRANSLATION } from '../schemas/translation/validation';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import { MongoSchema } from './common';

export type ITranslation = z.infer<typeof TranslationSchema>;
export const TranslationSchema = ADD_TRANSLATION().extend(MongoSchema.shape);

export const DEFAULT_SYSTEM_LOCALES = [
  { code: 'tr', language: 'tr-TR', name: 'Türkçe' },
  { code: 'en', language: 'en-US', name: 'English' },
  { code: 'ru', language: 'ru-RU', name: 'Русский' },
  { code: 'sa', language: 'ar-SA', name: 'العربية' },
  { code: 'fa', language: 'fa-FA', name: 'فارسی' },
];
export const DEFAULT_TRANSLATION: ITranslation = getDefaultsForSchema(TranslationSchema);
