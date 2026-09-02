import { z } from 'zod';
import { registry } from '../registry';
import { AddQuestionSchema, UpdateQuestionSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

const QuestionListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

// GET /public/questions/{productId}
registry.registerPath({
  method: 'get',
  path: '/public/questions/{productId}',
  tags: ['API-question'],
  summary: 'Get all questions for a product',
  operationId: 'getQuestionsForProduct',
  request: {
    params: z.object({ productId: z.string() }),
    query: QuestionListQuerySchema,
  },
  responses,
});

// GET /public/questions
registry.registerPath({
  method: 'get',
  path: '/public/questions',
  tags: ['API-question'],
  summary: 'Get user questions in the system',
  operationId: 'getQuestions',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses,
});

// POST /public/question/{productId}
registry.registerPath({
  method: 'post',
  path: '/public/question/{productId}',
  tags: ['API-question'],
  summary: 'Add a new question for a product',
  operationId: 'addQuestion',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(AddQuestionSchema),
  },
  responses,
});

// PATCH /public/question/{questionId}
registry.registerPath({
  method: 'patch',
  path: '/public/question/{questionId}',
  tags: ['API-question'],
  summary: 'Update a question',
  operationId: 'updateQuestion',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(AddQuestionSchema),
  },
  responses,
});

// DELETE /public/question/{questionId}
registry.registerPath({
  method: 'delete',
  path: '/public/question/{questionId}',
  tags: ['API-question'],
  summary: 'Delete a question',
  operationId: 'deleteQuestion',
  security: [{ JWT: [] }],
  request: { params: z.object({ questionId: z.string() }) },
  responses,
});

// GET /admin/questions
registry.registerPath({
  method: 'get',
  path: '/admin/questions',
  tags: ['API-question'],
  summary: 'Get all questions in the system',
  operationId: 'getQuestionsAdmin',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses,
});

// POST /admin/question/{userId}/{productId}
registry.registerPath({
  method: 'post',
  path: '/admin/question/{userId}/{productId}',
  tags: ['API-question'],
  summary: 'Add an admin question for a product',
  operationId: 'addQuestionAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(UpdateQuestionSchema),
  },
  responses,
});

// PATCH /admin/question/{questionId}
registry.registerPath({
  method: 'patch',
  path: '/admin/question/{questionId}',
  tags: ['API-question'],
  summary: 'Update a question as admin',
  operationId: 'updateQuestionAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(UpdateQuestionSchema),
  },
  responses,
});

// DELETE /admin/question
registry.registerPath({
  method: 'delete',
  path: '/admin/question',
  tags: ['API-question'],
  summary: 'Delete questions from the system',
  operationId: 'deleteQuestionsAdmin',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
