import { z } from 'zod';
import { registry } from '../registry';
import { AddQuestionSchema, UpdateQuestionSchema } from './schema';
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

const QuestionListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

registry.registerPath({
  method: 'get',
  path: '/public/questions/{productId}',
  tags: ['Question'],
  summary: 'Get all questions for a product',
  operationId: 'getQuestionsForProduct',
  request: {
    params: z.object({ productId: z.string() }),
    query: QuestionListQuerySchema,
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/questions',
  tags: ['Question'],
  summary: 'Get user questions in the system',
  operationId: 'getQuestions',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/question/{productId}',
  tags: ['Question'],
  summary: 'Add a new question for a product',
  operationId: 'addQuestion',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(AddQuestionSchema),
  },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/public/question/{questionId}',
  tags: ['Question'],
  summary: 'Update a question',
  operationId: 'updateQuestion',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(AddQuestionSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/public/question/{questionId}',
  tags: ['Question'],
  summary: 'Delete a question',
  operationId: 'deleteQuestion',
  security: [{ JWT: [] }],
  request: { params: z.object({ questionId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/questions',
  tags: ['Question'],
  summary: 'Get all questions in the system',
  operationId: 'getQuestionsAdmin',
  security: [{ JWT: [] }],
  request: { query: QuestionListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/question/{userId}/{productId}',
  tags: ['Question'],
  summary: 'Add an admin question for a product',
  operationId: 'addQuestionAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(UpdateQuestionSchema),
  },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/question/{questionId}',
  tags: ['Question'],
  summary: 'Update a question as admin',
  operationId: 'updateQuestionAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ questionId: z.string() }),
    body: buildRequestBody(UpdateQuestionSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/question',
  tags: ['Question'],
  summary: 'Delete questions from the system',
  operationId: 'deleteQuestionsAdmin',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
