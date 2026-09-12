import { z } from 'zod';
import { registry } from '../registry';
import { CountrySchema, CitySchema, DistrictSchema } from './schema';
import { GeliverCitySchema, GeliverDistrictSchema } from '../../types/geliver';
import { listResponse } from '../common';

const countryCodeParam = z.string().meta({ examples: ['TR'] });
const cityCodeParam = z.string().meta({ examples: ['06'] });

// GET /public/countries
registry.registerPath({
  method: 'get',
  path: '/public/countries',
  tags: ['SERVICE-countries-cities-districts'],
  summary: 'Get a Countries for the user',
  operationId: 'getCountries',
  responses: listResponse(CountrySchema),
});

// GET /public/countries/{countryCode}/cities
registry.registerPath({
  method: 'get',
  path: '/public/countries/{countryCode}/cities',
  tags: ['SERVICE-countries-cities-districts'],
  summary: 'Get a States or Cities for the user',
  operationId: 'getStates',
  request: { params: z.object({ countryCode: countryCodeParam }) },
  responses: listResponse(CitySchema),
});

// GET /public/countries/{countryCode}/cities/{cityCode}/districts
registry.registerPath({
  method: 'get',
  path: '/public/countries/{countryCode}/cities/{cityCode}/districts',
  tags: ['SERVICE-countries-cities-districts'],
  summary: 'Get a Districts for the user',
  operationId: 'getDistricts',
  request: {
    params: z.object({ countryCode: countryCodeParam, cityCode: cityCodeParam }),
  },
  responses: listResponse(DistrictSchema),
});

// GET /public/geliver/countries/{countryCode}/cities
registry.registerPath({
  method: 'get',
  path: '/public/geliver/countries/{countryCode}/cities',
  tags: ['SERVICE-countries-cities-districts'],
  summary: 'Get a States or Cities for the user using geliver.io service',
  operationId: 'getGeliverStates',
  request: { params: z.object({ countryCode: countryCodeParam }) },
  responses: listResponse(GeliverCitySchema),
});

// GET /public/geliver/countries/{countryCode}/cities/{cityCode}/districts
registry.registerPath({
  method: 'get',
  path: '/public/geliver/countries/{countryCode}/cities/{cityCode}/districts',
  tags: ['SERVICE-countries-cities-districts'],
  summary: 'Get a Districts for the user using geliver.io service',
  operationId: 'getGeliverDistricts',
  request: {
    params: z.object({ countryCode: countryCodeParam, cityCode: cityCodeParam }),
  },
  responses: listResponse(GeliverDistrictSchema),
});
