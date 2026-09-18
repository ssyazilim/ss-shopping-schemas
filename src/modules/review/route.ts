import { z } from 'zod';
import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_REVIEW } from './validation';
import { ReviewSchema } from './schema';
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

const ReviewListQuerySchema = ListQuerySchema.extend({
  status: z.enum(['pending', 'approved', 'rejected']).optional().default('pending'),
});

// GET /public/reviews/{productId}
registerRoute({
  method: 'get',
  path: '/public/reviews/{productId}',
  tags: [API_TAGS.review.name],
  summary: 'Get all reviews for a product',
  request: {
    params: z.object({ productId: z.string() }),
    query: ListQuerySchema,
  },
  responses: listResponse(ReviewSchema),
});

// GET /public/reviews
registerRoute({
  method: 'get',
  path: '/public/reviews',
  tags: [API_TAGS.review.name],
  summary: 'Get user reviews in the system',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses: listResponse(ReviewSchema),
});

// POST /public/review/{productId}
registerRoute({
  method: 'post',
  path: '/public/review/{productId}',
  tags: [API_TAGS.review.name],
  summary: 'Add a new review for a product',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ productId: z.string() }),
    body: buildRequestBody(ADD_REVIEW()),
  },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /public/review/{reviewId}
registerRoute({
  method: 'patch',
  path: '/public/review/{reviewId}',
  tags: [API_TAGS.review.name],
  summary: 'Update a review',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(ADD_REVIEW()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /public/review/{reviewId}
registerRoute({
  method: 'delete',
  path: '/public/review/{reviewId}',
  tags: [API_TAGS.review.name],
  summary: 'Delete a review',
  security: [{ JWT: [] }],
  request: { params: z.object({ reviewId: z.string() }) },
  responses: jsonResponse(DeleteResultSchema),
});

// GET /admin/reviews
registerRoute({
  method: 'get',
  path: '/admin/reviews',
  tags: [API_TAGS.review.name],
  summary: 'Get all reviews in the system',
  security: [{ JWT: [] }],
  request: { query: ReviewListQuerySchema },
  responses: listResponse(ReviewSchema),
});

// POST /admin/review/{userId}/{productId}
registerRoute({
  method: 'post',
  path: '/admin/review/{userId}/{productId}',
  tags: [API_TAGS.review.name],
  summary: 'Add an admin review for a product',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ userId: z.string(), productId: z.string() }),
    body: buildRequestBody(ADD_REVIEW()),
  },
  responses: jsonResponse(InsertResultSchema),
});

// PATCH /admin/review/{reviewId}
registerRoute({
  method: 'patch',
  path: '/admin/review/{reviewId}',
  tags: [API_TAGS.review.name],
  summary: 'Update a review as admin',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ reviewId: z.string() }),
    body: buildRequestBody(ADD_REVIEW()),
  },
  responses: jsonResponse(UpdateResultSchema),
});

// DELETE /admin/review
registerRoute({
  method: 'delete',
  path: '/admin/review',
  tags: [API_TAGS.review.name],
  summary: 'Delete reviews from the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});
