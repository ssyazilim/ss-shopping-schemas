import { z } from 'zod';
import { registry } from '../registry';
import { AddAgreementSchema, UpdateAgreementSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

// GET /public/agreements
registry.registerPath({
  method: 'get',
  path: '/public/agreements',
  tags: ['Agreement'],
  summary: 'Get all agreements in the system',
  operationId: 'getAgreements',
  request: { query: ListQuerySchema },
  responses,
});

// GET /public/agreement/{locale}/{name}
registry.registerPath({
  method: 'get',
  path: '/public/agreement/{locale}/{name}',
  tags: ['Agreement'],
  summary: 'Get an agreement from the system',
  operationId: 'getAgreement',
  request: {
    params: z.object({
      locale: z.string().meta({ examples: ['tr'] }),
      name: z.string().meta({ examples: ['Gizlilik politikası'] }),
    }),
  },
  responses,
});

// POST /admin/agreement
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

// DELETE /admin/agreement
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

// PATCH /admin/agreement/{agreementId}
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
