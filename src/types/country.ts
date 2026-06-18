import { z } from 'zod';

export type ICountry = z.infer<typeof CountrySchema>;
export const CountrySchema = z.object({
  id: z.number(),
  name: z.string(),
  capital: z.string(),
  currency: z.string(),
  phonecode: z.string(),
  emoji: z.string(),
  iso2: z.string(),
  iso3: z.string(),
  native: z.string(),
});

export type ICity = z.infer<typeof CitySchema>;
export const CitySchema = z.object({
  id: z.number(),
  name: z.string(),
  iso2: z.string(),
});

export type IDistrict = z.infer<typeof DistrictSchema>;
export const DistrictSchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});

export type IPhoneCode = z.infer<typeof PhoneCodeSchema>;
export const PhoneCodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  emoji: z.string(),
  code: z.string(),
  dialCode: z.string(),
});

export type ILocales = z.infer<typeof LocalesSchema>;
export const LocalesSchema = z.object({
  _id: z.string(),
  code: z.string(),
  language: z.string(),
  name: z.string(),
  file: z.string(),
});

export type IUpdatedData = z.infer<typeof UpdatedDataSchema>;
export const UpdatedDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const i18nLocalesForWeb = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
  { _id: '2', code: 'ru', language: 'ru-RU', name: 'Русский', file: 'index.ts', dir: 'ltr' },
  { _id: '3', code: 'sa', language: 'ar-SA', name: 'العربية', file: 'index.ts', dir: 'rtl' },
  { _id: '4', code: 'fa', language: 'fa-FA', name: 'فارسی', file: 'index.ts', dir: 'rtl' },
] as const;

export const i18nLocalesForAdmin = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
] as const;
