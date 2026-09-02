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

/*************************
 *       CONSTANTS       *
 *************************/
export const TR_CURRENCY = {
  name: 'TRY',
  locale: 'tr-TR',
  buy: '1,00',
  sell: '1,00',
};
export const LOCALE_CURRENCY_MAP = {
  'AUSTRALIAN DOLLAR': { name: 'AUD', locale: 'en-AU' },
  'AZERBAIJANI NEW MANAT': { name: 'AZN', locale: 'az-AZ' },
  'BULGARIAN LEV': { name: 'BGN', locale: 'bg-BG' },
  'CANADIAN DOLLAR': { name: 'CAD', locale: 'en-CA' },
  'CHINESE RENMINBI': { name: 'CNY', locale: 'zh-CN' },
  'DANISH KRONE': { name: 'DKK', locale: 'da-DK' },
  EURO: { name: 'EUR', locale: 'fr-FR' },
  'JAPENESE YEN': { name: 'JPY', locale: 'ja-JP' },
  'KUWAITI DINAR': { name: 'KWD', locale: 'ar-KW' },
  'NEW LEU': { name: 'RON', locale: 'ro-RO' },
  'NORWEGIAN KRONE': { name: 'NOK', locale: 'nb-NO' },
  'PAKISTANI RUPEE': { name: 'PKR', locale: 'ur-PK' },
  'POUND STERLING': { name: 'GBP', locale: 'en-GB' },
  'QATARI RIYAL': { name: 'QAR', locale: 'ar-QA' },
  'RUSSIAN ROUBLE': { name: 'RUB', locale: 'ru-RU' },
  'SAUDI RIYAL': { name: 'SAR', locale: 'ar-SA' },
  'SOUTH KOREAN WON': { name: 'KRW', locale: 'ko-KR' },
  'SWEDISH KRONA': { name: 'SEK', locale: 'sv-SE' },
  'SWISS FRANK': { name: 'CHF', locale: 'de-CH' },
  'UNITED ARAB EMIRATES DIRHAM': { name: 'AED', locale: 'ar-AE' },
  'US DOLLAR': { name: 'USD', locale: 'en-US' },
};
