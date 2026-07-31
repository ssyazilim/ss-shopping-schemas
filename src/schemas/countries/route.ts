import { z } from 'zod';
import { registry } from '../registry';
import { responses } from '../common';

// GET /public/country
registry.registerPath({
  method: 'get',
  path: '/public/country',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a Countries for the user',
  operationId: 'getCountries',
  responses,
});

// GET /public/country/{countryCode}
registry.registerPath({
  method: 'get',
  path: '/public/country/{countryCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a States or Cities for the user',
  operationId: 'getStates',
  request: { params: z.object({ countryCode: z.string().meta({ examples: ['TR'] }) }) },
  responses,
});

// GET /public/country/{countryCode}/city/{cityCode}
registry.registerPath({
  method: 'get',
  path: '/public/country/{countryCode}/city/{cityCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a Districts for the user',
  operationId: 'getDistricts',
  request: {
    params: z.object({
      countryCode: z.string().meta({ examples: ['TR'] }),
      cityCode: z.string().meta({ examples: ['06'] }),
    }),
  },
  responses,
});

// GET /public/geliver/country/{countryCode}
registry.registerPath({
  method: 'get',
  path: '/public/geliver/country/{countryCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a States or Cities for the user using geliver.io service',
  operationId: 'getGeliverStates',
  request: { params: z.object({ countryCode: z.string().meta({ examples: ['TR'] }) }) },
  responses,
});

// GET /public/geliver/country/{countryCode}/city/{cityCode}
registry.registerPath({
  method: 'get',
  path: '/public/geliver/country/{countryCode}/city/{cityCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a Districts for the user using geliver.io service',
  operationId: 'getGeliverDistricts',
  request: {
    params: z.object({
      countryCode: z.string().meta({ examples: ['TR'] }),
      cityCode: z.string().meta({ examples: ['06'] }),
    }),
  },
  responses,
});
