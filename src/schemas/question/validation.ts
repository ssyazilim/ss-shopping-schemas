import { z } from 'zod';

export const ADD_QUESTION = () =>
  z.object({
    status: z.string().meta({ examples: ['pending'] }),
    question: z.string().meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
  });

export const UPDATE_QUESTION = () =>
  z.object({
    status: z.string().meta({ examples: ['approved'] }),
    question: z.string().meta({ examples: ['Çoraplarınızda kullanılan kumaş türleri nelerdir?'] }),
    answer: z.string().meta({ examples: ['Pamuk, yün ve akrilik kullandık.'] }),
  });
