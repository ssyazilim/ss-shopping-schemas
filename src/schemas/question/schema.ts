import { z } from 'zod';
import { registry } from '../registry';

export const AddQuestionSchema = registry.register(
  'AddQuestion',
  z.object({
    status: z.string().meta({ examples: ['pending'] }),
    question: z.string().meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
  }),
);

export const UpdateQuestionSchema = registry.register(
  'UpdateQuestion',
  z.object({
    status: z.string().meta({ examples: ['approved'] }),
    question: z.string().meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
    answer: z.string().meta({ examples: ['Pamuk, yün ve akrilik kullandık.'] }),
  }),
);
