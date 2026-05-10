import { z } from 'zod';
import { registry } from '../registry';

export const PostSchema = registry.register(
  'Post',
  z.object({
    type: z.string().meta({ examples: ['blog'] }),
    date: z.array(z.string()).meta({ examples: [['2025-12-04T06:00:00.000Z']] }),
    timeZone: z.string().meta({ examples: ['Cankaya/Ankara/Turkey'] }),
    name: z.string().meta({ examples: ['Ticaret ve E-ticaret Kavramları'] }),
    content: z.string().meta({ examples: ['<p><b>Merhaba</b> bu bir test yazisidir.</p>'] }),
  }),
);

export const AddPostsSchema = registry.register('AddPosts', z.array(PostSchema));

export const LikePostSchema = registry.register(
  'LikePost',
  z.object({
    vote: z.boolean(),
  }),
);

export const CommentPostSchema = registry.register(
  'CommentPost',
  z.object({
    name: z.string().optional(),
    text: z.string().optional(),
  }),
);

export const PostImageSchema = registry.register(
  'PostImage',
  z.object({
    image: z.object({
      name: z.string(),
      image: z.string(),
    }),
  }),
);
