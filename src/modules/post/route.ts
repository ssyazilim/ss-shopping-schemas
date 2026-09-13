import { z } from 'zod';

import { registry } from '../registry';
import { ADD_POST, UPDATE_POST, LIKE_POST, COMMENT_POST } from './validation';
import { PostSchema, PostCountsSchema } from './schema';
import {
  buildRequestBody,
  DeleteModelSchema,
  ListQuerySchema,
  jsonResponse,
  listResponse,
  DeleteResultSchema,
  UpdateResultSchema,
} from '../common';

// GET /public/posts/total
registry.registerPath({
  method: 'get',
  path: '/public/posts/total',
  tags: ['API-post'],
  summary: 'Get all posts total count in the system',
  operationId: 'getPostTotal',
  responses: jsonResponse(PostCountsSchema),
});

// GET /public/posts
registry.registerPath({
  method: 'get',
  path: '/public/posts',
  tags: ['API-post'],
  summary: 'Get all posts in the system',
  operationId: 'getPosts',
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
registry.registerPath({
  method: 'get',
  path: '/public/post/{postId}',
  tags: ['API-post'],
  summary: 'Get a post from the system',
  operationId: 'getPost',
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
registry.registerPath({
  method: 'post',
  path: '/public/post/{postId}/like',
  tags: ['API-post'],
  summary: 'Add a like or dislike to post in the system',
  operationId: 'likePosts',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(LIKE_POST()),
  },
  responses: jsonResponse(z.boolean().meta({ description: 'The vote that was applied' })),
});

// POST /public/post/{postId}/comment
registry.registerPath({
  method: 'post',
  path: '/public/post/{postId}/comment',
  tags: ['API-post'],
  summary: 'Add a comment to post in the system',
  operationId: 'commentBlogs',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(COMMENT_POST()),
  },
  responses: jsonResponse(PostSchema),
});

// POST /admin/post
registry.registerPath({
  method: 'post',
  path: '/admin/post',
  tags: ['API-post'],
  summary: 'Add a new post to system',
  operationId: 'addPost',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(ADD_POST()) },
  responses: jsonResponse(PostSchema),
});

// DELETE /admin/post
registry.registerPath({
  method: 'delete',
  path: '/admin/post',
  tags: ['API-post'],
  summary: 'Delete a post or posts in the system',
  operationId: 'deletePosts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses: jsonResponse(DeleteResultSchema),
});

// PATCH /admin/post/{postId}
registry.registerPath({
  method: 'patch',
  path: '/admin/post/{postId}',
  tags: ['API-post'],
  summary: 'Update a post from the system',
  operationId: 'updatePost',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(UPDATE_POST()),
  },
  responses: jsonResponse(UpdateResultSchema),
});
