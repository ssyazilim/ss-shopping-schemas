import { z } from 'zod';
import { registry } from '../registry';
import { AddCompanySchema, UpdateCompanySchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

registry.registerPath({
  method: 'get',
  path: '/admin/company',
  tags: ['Company'],
  summary: 'Get company information',
  operationId: 'getCompany',
  security: [{ JWT: [] }],
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/company',
  tags: ['Company'],
  summary: 'Add company information',
  operationId: 'addCompany',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCompanySchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/company',
  tags: ['Company'],
  summary: 'Update company information',
  operationId: 'updateCompany',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(UpdateCompanySchema) },
  responses,
});
