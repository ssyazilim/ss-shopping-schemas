import { z } from 'zod';
import { registry } from '../registry';
import { ADD_AGREEMENT, UPDATE_AGREEMENT } from './validation';
import { AgreementSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/agreements
registry.registerPath({
  method: 'get',
  path: '/public/agreements',
  tags: ['API-agreement'],
  summary: 'Get all agreements in the system',
  operationId: 'getAgreements',
  request: {
    query: ListQuerySchema.extend({
      include: z
        .string()
        .optional()
        .meta({ examples: ['name,locale'] }),
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['content'] }),
    }),
  },
  responses: listResponse(AgreementSchema),
});

// GET /public/agreement/{locale}/{name}
registry.registerPath({
  method: 'get',
  path: '/public/agreement/{locale}/{name}',
  tags: ['API-agreement'],
  summary: 'Get an agreement from the system',
  operationId: 'getAgreement',
  request: {
    params: z.object({
      locale: z.string().meta({ examples: ['tr'] }),
      name: z.string().meta({ examples: ['Gizlilik politikası'] }),
    }),
  },
  responses: jsonResponse(AgreementSchema),
});

// POST /admin/agreement
registry.registerPath({
  method: 'post',
  path: '/admin/agreement',
  tags: ['API-agreement'],
  summary: 'Add new agreement to the system',
  operationId: 'addAgreement',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_AGREEMENT()) },
  responses: jsonResponse(AgreementSchema),
});

// DELETE /admin/agreement
registry.registerPath({
  method: 'delete',
  path: '/admin/agreement',
  tags: ['API-agreement'],
  summary: 'Delete agreements from the system',
  operationId: 'deleteAgreements',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/agreement/{agreementId}
registry.registerPath({
  method: 'patch',
  path: '/admin/agreement/{agreementId}',
  tags: ['API-agreement'],
  summary: 'Update an agreement from the system',
  operationId: 'updateAgreement',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ agreementId: z.string() }),
    body: buildRequestBody(UPDATE_AGREEMENT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
