import { z } from 'zod';
import { registry } from '../registry';

export const GeminiPromptSchema = registry.register(
  'GeminiPrompt',
  z.object({
    prompt: z.string().meta({ examples: ['Write a 25-word poem.'] }),
  }),
);

export const TranslateSchema = registry.register(
  'Translate',
  z.object({
    to: z.string().meta({ examples: ['tr'] }),
    prompt: z.string().meta({ examples: ['Hello. How are you today?'] }),
  }),
);
