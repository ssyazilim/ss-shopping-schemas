import { z } from 'zod';
import { registry } from '../registry';
import { responses } from '../common';

// GET /public/currencies
registry.registerPath({
  method: 'get',
  path: '/public/currencies',
  tags: ['SERVICE-currency'],
  summary: 'Get all currencies in the system',
  operationId: 'getCurrencies',
  responses,
});

// GET /public/currencies/exchange
registry.registerPath({
  method: 'get',
  path: '/public/currencies/exchange',
  tags: ['SERVICE-currency'],
  summary: 'Converts the sent rate to the desired rate',
  description:
    'TRY = Turkish Lira | USD = American Dollar | EUR = Euro | GBP = British Pound Sterling | CHF = Switzerland Frank | JPY = Japanese Yen | SAR = Saudi Riyal | NOK = Norwegian Krone | DKK = Danish Krone | AUD = Australian Dollar | CAD = Canada Dollar | SEK = Swedish Krone | SRU = Russian Ruble',
  operationId: 'listCurrency',
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
  responses,
});
