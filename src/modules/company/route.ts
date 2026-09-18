import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import {
  ADD_COMPANY,
  UPDATE_COMPANY,
  ADD_COMPANY_PAYMENT,
  UPDATE_COMPANY_PAYMENT,
} from './validation';
import { CompanySchema, PaymentMethodsSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

const companyIdParam = z.object({ companyId: z.string() });

// GET /public/company
registerRoute({
  method: 'get',
  path: '/public/company',
  tags: [API_TAGS.company.name],
  summary: 'Get a company information in the system',
  responses: jsonResponse(CompanySchema),
});

// POST /admin/company
registerRoute({
  method: 'post',
  path: '/admin/company',
  tags: [API_TAGS.company.name],
  summary: 'Add a company information for the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_COMPANY()) },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /admin/company/{companyId}
registerRoute({
  method: 'patch',
  path: '/admin/company/{companyId}',
  tags: [API_TAGS.company.name],
  summary: 'Update a company to the system',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(UPDATE_COMPANY()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// POST /admin/company/payment/{companyId}
registerRoute({
  method: 'post',
  path: '/admin/company/payment/{companyId}',
  tags: [API_TAGS.company.name],
  summary: 'Add a company payment for the system',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(ADD_COMPANY_PAYMENT()),
  },
  responses: listResponse(PaymentMethodsSchema),
});

// PATCH /admin/company/payment/{companyId}
registerRoute({
  method: 'patch',
  path: '/admin/company/payment/{companyId}',
  tags: [API_TAGS.company.name],
  summary: 'Update a company payment for the system',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(UPDATE_COMPANY_PAYMENT()),
  },
  responses: listResponse(PaymentMethodsSchema),
});

// DELETE /admin/company/payment/{companyId}
registerRoute({
  method: 'delete',
  path: '/admin/company/payment/{companyId}',
  tags: [API_TAGS.company.name],
  summary: 'Delete a company payment in the system',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(DeleteModelSchema),
  },
  responses: listResponse(PaymentMethodsSchema),
});
