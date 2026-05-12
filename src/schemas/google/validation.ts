import { z } from 'zod';

export const GEMINI_PROMPT = z.object({
  prompt: z.string().meta({ examples: ['Write a 25-word poem.'] }),
});

export const TRANSLATE = z.object({
  to: z.string().meta({ examples: ['tr'] }),
  prompt: z.string().meta({ examples: ['Hello. How are you today?'] }),
});
