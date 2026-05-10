import { z } from 'zod';
import { registry } from '../registry';
import { AddReviewSchema } from './schema';
import { ApiSuccessSchema, ApiErrorSchema, ListQuerySchema, DeleteModelSchema } from '../common';

const responses = {
  200: { description: 'OK', content: { 'application/json': { schema: ApiSuccessSchema } } },
  400: { description: 'BAD_REQUEST', content: { 'application/json': { schema: ApiErrorSchema } } },
};

function buildRequestBody(schema: z.ZodTypeAny) {
  return {
    content: {
      'application/json': { schema },
      'application/xml': { schema },
      'application/x-www-form-urlencoded': { schema },
    },
  };
}

const ReviewListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

registry.registerPath({
  method: 'get',
  path: '/public/reviews/{productId}',
  tags: ['Review'],
  summary: 'Get all reviews for a product',
  operationId: 'getReviewsForProduct',
  request: {
    params: z.object({ productId: z.string() }),
    query: ListQuerySchema,
  },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/reviews',
  tags: ['Review'],
  summary: 'Get user reviews in the system',
  operationId: 'getReviews',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/public/review/{productId}',
  tags: ['Review'],
  summary: 'Add a new review for a product',
  operationId: 'addReview',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/public/review/{reviewId}',
  tags: ['Review'],
  summary: 'Update a review',
  operationId: 'updateReview',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/public/review/{reviewId}',
  tags: ['Review'],
  summary: 'Delete a review',
  operationId: 'deleteReview',
  security: [{ JWT: [] }],
  request: { params: z.object({ reviewId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/admin/reviews',
  tags: ['Review'],
  summary: 'Get all reviews in the system',
  operationId: 'getReviewsAdmin',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/review/{userId}/{productId}',
  tags: ['Review'],
  summary: 'Add an admin review for a product',
  operationId: 'addReviewAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/review/{reviewId}',
  tags: ['Review'],
  summary: 'Update a review as admin',
  operationId: 'updateReviewAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/review',
  tags: ['Review'],
  summary: 'Delete reviews from the system',
  operationId: 'deleteReviewsAdmin',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
