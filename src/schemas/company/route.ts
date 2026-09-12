import { z } from 'zod';
import { registry } from '../registry';
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
  UpdateResultSchema,
} from '../common';

const companyIdParam = z.object({ companyId: z.string() });

// GET /public/company
registry.registerPath({
  method: 'get',
  path: '/public/company',
  tags: ['API-company'],
  summary: 'Get a company information in the system',
  operationId: 'getCompany',
  responses: jsonResponse(CompanySchema),
});

// POST /admin/company
registry.registerPath({
  method: 'post',
  path: '/admin/company',
  tags: ['API-company'],
  summary: 'Add a company information for the system',
  operationId: 'addCompany',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_COMPANY()) },
  responses: jsonResponse(CompanySchema),
});

// PATCH /admin/company/{companyId}
registry.registerPath({
  method: 'patch',
  path: '/admin/company/{companyId}',
  tags: ['API-company'],
  summary: 'Update a company to the system',
  operationId: 'updateCompany',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(UPDATE_COMPANY()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// POST /admin/company/payment/{companyId}
registry.registerPath({
  method: 'post',
  path: '/admin/company/payment/{companyId}',
  tags: ['API-company'],
  summary: 'Add a company payment for the system',
  operationId: 'addCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(ADD_COMPANY_PAYMENT()),
  },
  responses: listResponse(PaymentMethodsSchema),
});

// PATCH /admin/company/payment/{companyId}
registry.registerPath({
  method: 'patch',
  path: '/admin/company/payment/{companyId}',
  tags: ['API-company'],
  summary: 'Update a company payment for the system',
  operationId: 'updateCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(UPDATE_COMPANY_PAYMENT()),
  },
  responses: listResponse(PaymentMethodsSchema),
});

// DELETE /admin/company/payment/{companyId}
registry.registerPath({
  method: 'delete',
  path: '/admin/company/payment/{companyId}',
  tags: ['API-company'],
  summary: 'Delete a company payment in the system',
  operationId: 'deleteCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: companyIdParam,
    body: buildRequestBody(DeleteModelSchema),
  },
  responses: listResponse(PaymentMethodsSchema),
});
