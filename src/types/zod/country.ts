import { z } from 'zod';

/*************************
 *       TYPES           *
 *************************/
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
