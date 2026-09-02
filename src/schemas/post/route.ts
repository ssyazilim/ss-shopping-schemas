import { z } from 'zod';

import { registry } from '../registry';
import { PostSchema, LikePostSchema, CommentPostSchema } from './schema';
import { responses, buildRequestBody, DeleteModelSchema, ListQuerySchema } from '../common';

// GET /public/posts/total
registry.registerPath({
  method: 'get',
  path: '/public/posts/total',
  tags: ['API-post'],
  summary: 'Get all posts total count in the system',
  operationId: 'getPostTotal',
  responses,
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
      exclude: z
        .string()
        .optional()
        .meta({ examples: ['comments'] }),
    }),
  },
  responses,
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
  responses,
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
    body: buildRequestBody(LikePostSchema),
  },
  responses,
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
    body: buildRequestBody(CommentPostSchema),
  },
  responses,
});

// POST /admin/post
registry.registerPath({
  method: 'post',
  path: '/admin/post',
  tags: ['API-post'],
  summary: 'Add a new post to system',
  operationId: 'addPost',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(PostSchema) },
  responses,
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
  responses,
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
    body: buildRequestBody(PostSchema),
  },
  responses,
});
