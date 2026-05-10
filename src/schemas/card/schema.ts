import { z } from 'zod';
import { registry } from '../registry';

export const AddCardSchema = registry.register(
  'AddCard',
  z.object({
    email: z.email().meta({ examples: ['alisarisariabali@gmail.com'] }),
    card: z.object({
      cardAlias: z.string().meta({ examples: ['ALISARI'] }),
      cardHolderName: z.string().meta({ examples: ['ALI SARI'] }),
      cardNumber: z.string().meta({ examples: ['5170410000000004'] }),
      expireMonth: z.string().meta({ examples: ['10'] }),
      expireYear: z.string().meta({ examples: ['2030'] }),
    }),
  }),
);
