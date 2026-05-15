import { z } from 'zod';

export const ADD_POST = () =>
  z.object({
    type: z.string().meta({ examples: ['blog'] }),
    date: z
      .array(z.string())
      .meta({ examples: [['2025-12-04T06:00:00.000Z', '2025-12-11T09:00:00.000Z']] }),
    timeZone: z.string().meta({ examples: ['Cankaya/Ankara/Turkey'] }),
    name: z.string().meta({ examples: ['Ticaret ve E-ticaret Kavramları'] }),
    content: z.string().meta({ examples: ['<p><b>Merhaba</b> bu bir test yazisidir.</p>'] }),
  });

export const ADD_POSTS = () => z.array(ADD_POST());

export const LIKE_POST = () =>
  z.object({
    vote: z.boolean(),
  });

export const COMMENT_POST = () =>
  z.object({
    name: z.string().optional(),
    text: z.string().optional(),
  });
