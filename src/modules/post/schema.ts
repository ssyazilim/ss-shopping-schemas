import { z } from 'zod';
import { ADD_POST, COMMENT_POST } from './validation';
import { getDefaultsForSchema } from '../../utils/getDefaultsForSchema';
import { MongoSchema } from '../../types/common';
import { UserSchema } from '../user/schema';
import type { IUser } from '../user/schema';

export type IComment = z.infer<typeof CommentSchema>;
export const CommentSchema = COMMENT_POST()
  .extend({
    name: z.string(),
    text: z.string(),
    geographic: z
      .object({
        ip: z.string(),
        isp: z.string(),
        country: z.string(),
        city: z.string(),
      })
      .optional(),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Comment' });

export type IPost = Omit<z.infer<typeof PostSchema>, 'userId'> & {
  userId: string | IUser;
};
export const PostSchema = ADD_POST()
  .extend({
    userId: z.union([z.string(), UserSchema]),
    viewCount: z.number(),
    images: z.array(z.string()).optional(),
    like: z.number(),
    totalComments: z.number(),
    comments: z.array(CommentSchema),
  })
  .extend(MongoSchema.shape)
  .meta({ id: 'Post' });

export type IPostCounts = z.infer<typeof PostCountsSchema>;
export const PostCountsSchema = z
  .object({
    article: z.number(),
    blog: z.number(),
    event: z.number(),
    news: z.number(),
  })
  .meta({ id: 'PostCounts' });

export type IPostType = z.infer<typeof PostTypeSchema>;
export const PostTypeSchema = z.object({
  index: z.number(),
  name: z.string(),
  value: z.number(),
  translation: z.string(),
});

export const DEFAULT_POST: IPost = getDefaultsForSchema(PostSchema) as IPost;
export const DEFAULT_POST_COUNTS: IPostCounts = getDefaultsForSchema(PostCountsSchema);
