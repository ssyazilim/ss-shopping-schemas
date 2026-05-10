import { z } from 'zod';
import { registry } from '../registry';

export const AddReviewSchema = registry.register(
  'AddReview',
  z.object({
    status: z.string().meta({ examples: ['pending'] }),
    rating: z.number().meta({ examples: [5] }),
    content: z.string().meta({ examples: ['Harika bir ürün. Kesinlikle tavsiye ederim.'] }),
  }),
);
