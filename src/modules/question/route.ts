import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_QUESTION, UPDATE_QUESTION } from './validation';
import { QuestionSchema } from './schema';
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

const QuestionListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

// GET /public/questions/{productId}
registerRoute({
  method: 'get',
  path: '/public/questions/{productId}',
  tags: [API_TAGS.question.name],
  summary: 'Get all questions for a product',
  request: {
    params: z.object({ productId: z.string() }),
    query: ListQuerySchema,
  },
  responses: listResponse(QuestionSchema),
});

// GET /public/questions
registerRoute({
  method: 'get',
  path: '/public/questions',
  tags: [API_TAGS.question.name],
  summary: 'Get user questions in the system',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses: listResponse(QuestionSchema),
});

// POST /public/question/{productId}
registerRoute({
  method: 'post',
  path: '/public/question/{productId}',
  tags: [API_TAGS.question.name],
  summary: 'Add a new question for a product',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ADD_QUESTION()),
  },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /public/question/{questionId}
registerRoute({
  method: 'patch',
  path: '/public/question/{questionId}',
  tags: [API_TAGS.question.name],
  summary: 'Update a question',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(ADD_QUESTION()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/question/{questionId}
registerRoute({
  method: 'delete',
  path: '/public/question/{questionId}',
  tags: [API_TAGS.question.name],
  summary: 'Delete a question',
  security: [{ JWT: [] }],
  request: { params: z.object({ questionId: z.string() }) },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/questions
registerRoute({
  method: 'get',
  path: '/admin/questions',
  tags: [API_TAGS.question.name],
  summary: 'Get all questions in the system',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses: listResponse(QuestionSchema),
});

// POST /admin/question/{userId}/{productId}
registerRoute({
  method: 'post',
  path: '/admin/question/{userId}/{productId}',
  tags: [API_TAGS.question.name],
  summary: 'Add an admin question for a product',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(UPDATE_QUESTION()),
  },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /admin/question/{questionId}
registerRoute({
  method: 'patch',
  path: '/admin/question/{questionId}',
  tags: [API_TAGS.question.name],
  summary: 'Update a question as admin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(UPDATE_QUESTION()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /admin/question
registerRoute({
  method: 'delete',
  path: '/admin/question',
  tags: [API_TAGS.question.name],
  summary: 'Delete questions from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
