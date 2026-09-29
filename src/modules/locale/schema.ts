import { z } from 'zod';

/*************************
 *       TYPES           *
 *************************/

export type ILocales = z.infer<typeof LocalesSchema>;
export const LocalesSchema = z.object({
  _id: z.string(),
  code: z.string(),
  language: z.string(),
  name: z.string(),
  file: z.string(),
});

export type ILocale = (typeof LOCALES_WEB)[number]['code'];
const LOCALES_WEB = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
  { _id: '2', code: 'ru', language: 'ru-RU', name: 'Русский', file: 'index.ts', dir: 'ltr' },
  { _id: '3', code: 'ar', language: 'ar-SA', name: 'العربية', file: 'index.ts', dir: 'rtl' },
  { _id: '4', code: 'fa', language: 'fa-FA', name: 'فارسی', file: 'index.ts', dir: 'rtl' },
] as const;

const LOCALES_ADMIN = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
] as const;

export type ILC = (typeof LOCALES_WEB)[number]['code'];
export type ILL = (typeof LOCALES_WEB)[number]['language'];
export type ILN = (typeof LOCALES_WEB)[number]['name'];

/*************************
 *       CONSTANTS       *
 *************************/

export const LOCALE_CODES = LOCALES_WEB.map((locale) => locale.code) as [ILC, ...ILC[]];
export const LOCALE_LANGUAGES = LOCALES_WEB.map((locale) => locale.language) as [ILL, ...ILN[]];
export const LOCALE_NAMES = LOCALES_WEB.map((locale) => locale.name) as [ILL, ...ILN[]];

export const DEFAULT_LOCALES_WEB = [...LOCALES_WEB];
export const DEFAULT_LOCALES_ADMIN = [...LOCALES_ADMIN];
