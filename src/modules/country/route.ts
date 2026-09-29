import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { SERVICE_TAGS } from '../../utils/tags';
import { CountrySchema, CitySchema, DistrictSchema } from './schema';
import { GeliverCitySchema, GeliverDistrictSchema } from '../geliver/schema';
import { listResponse } from '../../utils/common';

const countryCodeParam = z.string();
const cityCodeParam = z.string();

// GET /public/countries
registerRoute({
  method: 'get',
  path: '/public/countries',
  tags: [SERVICE_TAGS.countriesCitiesDistricts.name],
  summary: 'Get a Countries for the user',
  responses: listResponse(CountrySchema),
});

// GET /public/countries/{countryCode}/cities
registerRoute({
  method: 'get',
  path: '/public/country/{countryCode}/cities',
  tags: [SERVICE_TAGS.countriesCitiesDistricts.name],
  summary: 'Get a States or Cities for the user',
  request: { params: z.object({ countryCode: countryCodeParam }) },
  responses: listResponse(CitySchema),
});

// GET /public/countries/{countryCode}/cities/{cityCode}/districts
registerRoute({
  method: 'get',
  path: '/public/country/{countryCode}/city/{cityCode}/districts',
  tags: [SERVICE_TAGS.countriesCitiesDistricts.name],
  summary: 'Get a Districts for the user',
  request: {
    params: z.object({ countryCode: countryCodeParam, cityCode: cityCodeParam }),
  },
  responses: listResponse(DistrictSchema),
});

// GET /public/geliver/countries/{countryCode}/cities
registerRoute({
  method: 'get',
  path: '/public/geliver/country/{countryCode}/cities',
  tags: [SERVICE_TAGS.countriesCitiesDistricts.name],
  summary: 'Get a States or Cities for the user using geliver.io service',
  request: { params: z.object({ countryCode: countryCodeParam }) },
  responses: listResponse(GeliverCitySchema),
});

// GET /public/geliver/countries/{countryCode}/cities/{cityCode}/districts
registerRoute({
  method: 'get',
  path: '/public/geliver/country/{countryCode}/city/{cityCode}/districts',
  tags: [SERVICE_TAGS.countriesCitiesDistricts.name],
  summary: 'Get a Districts for the user using geliver.io service',
  request: {
    params: z.object({ countryCode: countryCodeParam, cityCode: cityCodeParam }),
  },
  responses: listResponse(GeliverDistrictSchema),
});
