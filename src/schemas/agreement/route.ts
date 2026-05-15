import { z } from 'zod';
import { registry } from '../registry';
import { AddAgreementSchema, AddAgreementsSchema, UpdateAgreementSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodType) {
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
  path: '/public/agreements',
  tags: ['Agreement'],
  summary: 'Get all agreements in the system',
  operationId: 'getAgreements',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/agreement/{locale}/{name}',
  tags: ['Agreement'],
  summary: 'Get an agreement from the system',
  operationId: 'getAgreement',
  request: {
    params: z.object({
      locale: z.string().default('tr'),
      name: z.string().default('Gizlilik politikası'),
    }),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/agreement',
  tags: ['Agreement'],
  summary: 'Add new agreement to the system',
  operationId: 'addAgreement',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddAgreementSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/agreements',
  tags: ['Agreement'],
  summary: 'Add new agreements to the system',
  operationId: 'addAgreements',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddAgreementsSchema) },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/agreement',
  tags: ['Agreement'],
  summary: 'Delete agreements from the system',
  operationId: 'deleteAgreements',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/agreement/{agreementId}',
  tags: ['Agreement'],
  summary: 'Update an agreement from the system',
  operationId: 'updateAgreement',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ agreementId: z.string() }),
    body: buildRequestBody(UpdateAgreementSchema),
  },
  responses,
});
