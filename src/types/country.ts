import { z } from 'zod';

export type ITimeZone = z.infer<typeof timeZoneSchema>;
export const timeZoneSchema = z.object({
  abbreviation: z.string(),
  gmtOffset: z.number(),
  gmtOffsetName: z.string(),
  tzName: z.string(),
  zoneName: z.string(),
});

export type ICountry = z.infer<typeof CountrySchema>;
export const CountrySchema = z.object({
  id: z.number(),
  capital: z.string(),
  currency: z.string(),
  emoji: z.string(),
  iso2: z.string(),
  iso3: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  name: z.string(),
  native: z.string(),
  phonecode: z.string(),
  region: z.string(),
  region_id: z.string(),
  subregion: z.string(),
  subregion_id: z.string(),
  timezones: z.array(timeZoneSchema),
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
export const DEFAULT_LOCALES_WEB = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
  { _id: '2', code: 'ru', language: 'ru-RU', name: 'Русский', file: 'index.ts', dir: 'ltr' },
  { _id: '3', code: 'ar', language: 'ar-SA', name: 'العربية', file: 'index.ts', dir: 'rtl' },
  { _id: '4', code: 'fa', language: 'fa-FA', name: 'فارسی', file: 'index.ts', dir: 'rtl' },
];

export const DEFAULT_LOCALES_ADMIN = [
  { _id: '0', code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'index.ts', dir: 'ltr' },
  { _id: '1', code: 'en', language: 'en-US', name: 'English', file: 'index.ts', dir: 'ltr' },
];

export const DEFAULT_COUNTRY: ICountry = {
  id: 225,
  name: 'Turkey',
  iso2: 'TR',
  iso3: 'TUR',
  phonecode: '90',
  capital: 'Ankara',
  currency: 'TRY',
  native: 'Türkiye',
  emoji: '🇹🇷',
  region: 'Asia',
  region_id: '3',
  subregion: 'Western Asia',
  subregion_id: '11',
  timezones: [
    {
      zoneName: 'Europe/Istanbul',
      gmtOffset: 10800,
      gmtOffsetName: 'UTC+03:00',
      abbreviation: 'EET',
      tzName: 'Eastern European Time',
    },
  ],
  latitude: 39,
  longitude: 35,
};
