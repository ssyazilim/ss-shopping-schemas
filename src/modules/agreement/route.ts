import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_AGREEMENT, UPDATE_AGREEMENT } from './validation';
import { AgreementSchema } from './schema';
import {
  buildRequestBody,
  ListQuerySchema,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/agreements
registerRoute({
  method: 'get',
  path: '/public/agreements',
  tags: [API_TAGS.agreement.name],
  summary: 'Get all agreements in the system',
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
registerRoute({
  method: 'get',
  path: '/public/agreement/{locale}/{name}',
  tags: [API_TAGS.agreement.name],
  summary: 'Get an agreement from the system',
  request: {
    params: z.object({
      locale: z.string().meta({ examples: ['tr'] }),
      name: z.string().meta({ examples: ['Gizlilik politikası'] }),
    }),
  },
  responses: jsonResponse(AgreementSchema),
});

// POST /admin/agreement
registerRoute({
  method: 'post',
  path: '/admin/agreement',
  tags: [API_TAGS.agreement.name],
  summary: 'Add new agreement to the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_AGREEMENT()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/agreement
registerRoute({
  method: 'delete',
  path: '/admin/agreement',
  tags: [API_TAGS.agreement.name],
  summary: 'Delete agreements from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/agreement/{agreementId}
registerRoute({
  method: 'patch',
  path: '/admin/agreement/{agreementId}',
  tags: [API_TAGS.agreement.name],
  summary: 'Update an agreement from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ agreementId: z.string() }),
    body: buildRequestBody(UPDATE_AGREEMENT()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
