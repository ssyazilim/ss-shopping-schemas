import { z } from 'zod';
import { registry } from '../registry';
import { AddCompanySchema, UpdateCompanySchema, CompanyPaymentSchema } from './schema';
import { responses, buildRequestBody, DeleteModelSchema } from '../common';

// GET /public/company
registry.registerPath({
  method: 'get',
  path: '/public/company',
  tags: ['Company'],
  summary: 'Get a company information in the system',
  operationId: 'getCompany',
  responses,
});

// POST /admin/company
registry.registerPath({
  method: 'post',
  path: '/admin/company',
  tags: ['Company'],
  summary: 'Add a company information for the system',
  operationId: 'addCompany',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddCompanySchema) },
  responses,
});

// PATCH /admin/company/{companyId}
registry.registerPath({
  method: 'patch',
  path: '/admin/company/{companyId}',
  tags: ['Company'],
  summary: 'Update a company to the system',
  operationId: 'updateCompany',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ companyId: z.string() }),
    body: buildRequestBody(UpdateCompanySchema),
  },
  responses,
});

// POST /admin/company/payment/{companyId}
registry.registerPath({
  method: 'post',
  path: '/admin/company/payment/{companyId}',
  tags: ['Company'],
  summary: 'Add a company payment for the system',
  operationId: 'addCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ companyId: z.string() }),
    body: buildRequestBody(CompanyPaymentSchema),
  },
  responses,
});

// PATCH /admin/company/payment/{companyId}
registry.registerPath({
  method: 'patch',
  path: '/admin/company/payment/{companyId}',
  tags: ['Company'],
  summary: 'Update a company payment for the system',
  operationId: 'updateCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ companyId: z.string() }),
    body: buildRequestBody(CompanyPaymentSchema),
  },
  responses,
});

// DELETE /admin/company/payment/{companyId}
registry.registerPath({
  method: 'delete',
  path: '/admin/company/payment/{companyId}',
  tags: ['Company'],
  summary: 'Delete a company payment in the system',
  operationId: 'deleteCompanyPayments',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ companyId: z.string() }),
    body: buildRequestBody(DeleteModelSchema),
  },
  responses,
});
