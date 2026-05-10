import { z } from 'zod';
import { registry } from '../registry';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

registry.registerPath({
  method: 'get',
  path: '/public/countries',
  tags: ['Countries Cities & Districts'],
  summary: 'Get all countries in the system',
  operationId: 'getCountries',
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/country/{countryId}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a country from the system',
  operationId: 'getCountry',
  request: { params: z.object({ countryId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/cities/{countryId}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get all cities for a country',
  operationId: 'getCities',
  request: { params: z.object({ countryId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/city/{cityId}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a city from the system',
  operationId: 'getCity',
  request: { params: z.object({ cityId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/districts/{cityId}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get all districts for a city',
  operationId: 'getDistricts',
  request: { params: z.object({ cityId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/district/{districtId}',
  tags: ['Countries Cities & Districts'],
  summary: 'Get a district from the system',
  operationId: 'getDistrict',
  request: { params: z.object({ districtId: z.string() }) },
  responses,
});
