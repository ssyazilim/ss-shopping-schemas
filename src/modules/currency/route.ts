import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import { jsonResponse, listResponse } from '../../utils/common';
import { CurrencySchema } from './schema';

// GET /public/currencies
registerRoute({
  method: 'get',
  path: '/public/currencies',
  tags: [SERVICE_TAGS.currency.name],
  summary: 'Get all currencies in the system',
  responses: listResponse(CurrencySchema),
});

// GET /public/currencies/exchange
registerRoute({
  method: 'get',
  path: '/public/currencies/exchange',
  tags: [SERVICE_TAGS.currency.name],
  summary: 'Converts the sent rate to the desired rate',
  description:
    'TRY = Turkish Lira | USD = American Dollar | EUR = Euro | GBP = British Pound Sterling | CHF = Switzerland Frank | JPY = Japanese Yen | SAR = Saudi Riyal | NOK = Norwegian Krone | DKK = Danish Krone | AUD = Australian Dollar | CAD = Canada Dollar | SEK = Swedish Krone | SRU = Russian Ruble',
  security: [{ JWT: [] }],
  request: {
    query: z.object({
      from: z
        .string()
        .meta({ description: 'TRY, USD, EUR, GBP, CHF, JPY, SAR, NOK, DKK, AUD, CAD, SEK, SRU' }),
      quantity: z.string().meta({ description: 'You can define a number for currency amount' }),
      to: z
        .string()
        .meta({ description: 'TRY, USD, EUR, GBP, CHF, JPY, SAR, NOK, DKK, AUD, CAD, SEK, SRU' }),
    }),
  },
  responses: jsonResponse(z.number().meta({ examples: [42.75] })),
});
