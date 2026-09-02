import { z } from 'zod';
import { registry } from '../registry';
import { AddReviewSchema } from './schema';
import { responses, buildRequestBody, ListQuerySchema, DeleteModelSchema } from '../common';

const ReviewListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

// GET /public/reviews/{productId}
registry.registerPath({
  method: 'get',
  path: '/public/reviews/{productId}',
  tags: ['API-review'],
  summary: 'Get all reviews for a product',
  operationId: 'getReviewsForProduct',
  request: {
    params: z.object({ productId: z.string() }),
    query: ListQuerySchema,
  },
  responses,
});

// GET /public/reviews
registry.registerPath({
  method: 'get',
  path: '/public/reviews',
  tags: ['API-review'],
  summary: 'Get user reviews in the system',
  operationId: 'getReviews',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses,
});

// POST /public/review/{productId}
registry.registerPath({
  method: 'post',
  path: '/public/review/{productId}',
  tags: ['API-review'],
  summary: 'Add a new review for a product',
  operationId: 'addReview',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

// PATCH /public/review/{reviewId}
registry.registerPath({
  method: 'patch',
  path: '/public/review/{reviewId}',
  tags: ['API-review'],
  summary: 'Update a review',
  operationId: 'updateReview',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

// DELETE /public/review/{reviewId}
registry.registerPath({
  method: 'delete',
  path: '/public/review/{reviewId}',
  tags: ['API-review'],
  summary: 'Delete a review',
  operationId: 'deleteReview',
  security: [{ JWT: [] }],
  request: { params: z.object({ reviewId: z.string() }) },
  responses,
});

// GET /admin/reviews
registry.registerPath({
  method: 'get',
  path: '/admin/reviews',
  tags: ['API-review'],
  summary: 'Get all reviews in the system',
  operationId: 'getReviewsAdmin',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses,
});

// POST /admin/review/{userId}/{productId}
registry.registerPath({
  method: 'post',
  path: '/admin/review/{userId}/{productId}',
  tags: ['API-review'],
  summary: 'Add an admin review for a product',
  operationId: 'addReviewAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

// PATCH /admin/review/{reviewId}
registry.registerPath({
  method: 'patch',
  path: '/admin/review/{reviewId}',
  tags: ['API-review'],
  summary: 'Update a review as admin',
  operationId: 'updateReviewAdmin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(AddReviewSchema),
  },
  responses,
});

// DELETE /admin/review
registry.registerPath({
  method: 'delete',
  path: '/admin/review',
  tags: ['API-review'],
  summary: 'Delete reviews from the system',
  operationId: 'deleteReviewsAdmin',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});
