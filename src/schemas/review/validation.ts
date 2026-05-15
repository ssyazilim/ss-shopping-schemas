import { z } from 'zod';

export const ADD_REVIEW = () =>
  z.object({
    status: z.string().meta({ examples: ['pending'] }),
    rating: z.number().meta({ examples: [5] }),
    content: z.string().meta({ examples: ['Harika bir ürün. Kesinlikle tavsiye ederim.'] }),
  });
