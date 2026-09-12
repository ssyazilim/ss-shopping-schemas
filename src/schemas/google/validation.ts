import { z } from 'zod';

export const GEMINI_PROMPT = z
  .object({
    prompt: z.string(),
  })
  .meta({ id: 'GeminiPrompt' });

export const TRANSLATE = z
  .object({
    to: z.string(),
    prompt: z.string(),
  })
  .meta({ id: 'Translate' });

export const SUBSCRIBE_MAIL = z
  .object({
    email: z.email(),
  })
  .meta({ id: 'SubscribeMail' });
