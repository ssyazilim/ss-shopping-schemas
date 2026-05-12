import { z } from 'zod';
import { registry } from '../registry';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

registry.registerPath({
  method: 'get',
  path: '/public/country',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a Countries for the user',
  operationId: 'getCountries',
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/country/{countryCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a States or Cities for the user',
  operationId: 'getStates',
  request: { params: z.object({ countryCode: z.string().meta({ examples: ['TR'] }) }) },
  responses,
});

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

registry.registerPath({
  method: 'get',
  path: '/public/geliver/country/{countryCode}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a States or Cities for the user using geliver.io service',
  operationId: 'getGeliverStates',
  request: { params: z.object({ countryCode: z.string().meta({ examples: ['TR'] }) }) },
  responses,
});

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
