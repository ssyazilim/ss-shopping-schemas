import { z } from 'zod';

import { registerRoute } from '../../utils/registry';
import { API_TAGS } from '../../utils/tags';
import { ADD_POST, UPDATE_POST, LIKE_POST, COMMENT_POST } from './validation';
import { PostSchema, PostCountsSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  InsertResultSchema,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../../utils/common';

// GET /public/posts/total
registerRoute({
  method: 'get',
  path: '/public/posts/total',
  tags: [API_TAGS.post.name],
  summary: 'Get all posts total count in the system',
  responses: jsonResponse(PostCountsSchema),
});

// GET /public/posts
registerRoute({
  method: 'get',
  path: '/public/posts',
  tags: [API_TAGS.post.name],
  summary: 'Get all posts in the system',
  request: {
    query: ListQuerySchema.extend({
      type: z
        .string()
        .optional()
        .meta({ examples: ['blog'] }),
      include: z
        .string()
        .optional()
        .meta({ examples: ['name,type'] }),
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['comments'] }),
    }),
  },
  responses: listResponse(PostSchema),
});

// GET /public/post/{postId}
registerRoute({
  method: 'get',
  path: '/public/post/{postId}',
  tags: [API_TAGS.post.name],
  summary: 'Get a post from the system',
  request: {
    params: z.object({ postId: z.string() }),
    query: z.object({
      locale: z
        .string()
        .optional()
        .meta({ examples: ['tr'] }),
    }),
  },
  responses: jsonResponse(PostSchema),
});

// POST /public/post/{postId}/like
registerRoute({
  method: 'post',
  path: '/public/post/{postId}/like',
  tags: [API_TAGS.post.name],
  summary: 'Add a like or dislike to post in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(LIKE_POST()),
  },
  responses: jsonResponse(z.boolean().meta({ description: 'The vote that was applied' })),
});

// POST /public/post/{postId}/comment
registerRoute({
  method: 'post',
  path: '/public/post/{postId}/comment',
  tags: [API_TAGS.post.name],
  summary: 'Add a comment to post in the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(COMMENT_POST()),
  },
  responses: jsonResponse(PostSchema),
});

// POST /admin/post
registerRoute({
  method: 'post',
  path: '/admin/post',
  tags: [API_TAGS.post.name],
  summary: 'Add a new post to system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_POST()) },
  responses: jsonResponse(InsertResultSchema),
});

// DELETE /admin/post
registerRoute({
  method: 'delete',
  path: '/admin/post',
  tags: [API_TAGS.post.name],
  summary: 'Delete a post or posts in the system',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/post/{postId}
registerRoute({
  method: 'patch',
  path: '/admin/post/{postId}',
  tags: [API_TAGS.post.name],
  summary: 'Update a post from the system',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(UPDATE_POST()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
