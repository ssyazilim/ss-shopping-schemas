import { z } from 'zod';
import { registry } from '../registry';
import {
  AddPostsSchema,
  PostSchema,
  LikePostSchema,
  CommentPostSchema,
  PostImageSchema,
} from './schema';
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

registry.registerPath({
  method: 'get',
  path: '/public/posts',
  tags: ['Post'],
  summary: 'Get all posts in the system',
  operationId: 'getPosts',
  request: { query: ListQuerySchema },
  responses,
});

registry.registerPath({
  method: 'get',
  path: '/public/post/{postId}',
  tags: ['Post'],
  summary: 'Get a post from the system',
  operationId: 'getPost',
  request: { params: z.object({ postId: z.string() }) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/posts',
  tags: ['Post'],
  summary: 'Add new posts to the system',
  operationId: 'addPosts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(AddPostsSchema) },
  responses,
});

registry.registerPath({
  method: 'patch',
  path: '/admin/post/{postId}',
  tags: ['Post'],
  summary: 'Update a post in the system',
  operationId: 'updatePost',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(PostSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/post',
  tags: ['Post'],
  summary: 'Delete posts from the system',
  operationId: 'deletePosts',
  security: [{ JWT: [] }],
  request: { body: buildRequestBody(DeleteModelSchema) },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/post/image/{postId}',
  tags: ['Post'],
  summary: 'Add image to a post',
  operationId: 'addPostImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(PostImageSchema),
  },
  responses,
});

registry.registerPath({
  method: 'delete',
  path: '/admin/post/image/{postId}',
  tags: ['Post'],
  summary: 'Delete image from a post',
  operationId: 'deletePostImage',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(PostImageSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/post/like/{postId}',
  tags: ['Post'],
  summary: 'Like or dislike a post',
  operationId: 'likePost',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(LikePostSchema),
  },
  responses,
});

registry.registerPath({
  method: 'post',
  path: '/admin/post/comment/{postId}',
  tags: ['Post'],
  summary: 'Comment on a post',
  operationId: 'commentPost',
  security: [{ JWT: [] }],
  request: {
    params: z.object({ postId: z.string() }),
    body: buildRequestBody(CommentPostSchema),
  },
  responses,
});
