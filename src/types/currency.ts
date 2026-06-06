import { z } from 'zod';

export type ICurrency = z.infer<typeof CurrencySchema>;
export const CurrencySchema = z.object({
  name: z.string(),
  locale: z.string(),
  buy: z.string(),
  sell: z.string(),
  changeRate: z.string(),
  updateTime: z.string(),
});

export type ICurrencyTCMB = z.infer<typeof CurrencyTCMBSchema>;
export const CurrencyTCMBSchema = z.object({
  Unit: z.string(),
  Isim: z.string(),
  CurrencyName: z.string(),
  ForexBuying: z.string(),
  ForexSelling: z.string(),
  BanknoteBuying: z.string(),
  BanknoteSelling: z.string(),
  CrossRateUSD: z.string(),
  CrossRateOther: z.string(),
});
