import { z } from 'zod';
import { registry } from '../registry';

export const AddAddressSchema = registry.register(
  'addAddress',
  z.object({
    title: z.string().meta({ examples: ['EV BOGAZKENT'] }),
    name: z.string().meta({ examples: ['Fatma'] }),
    surname: z.string().meta({ examples: ['Gür'] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    district: z.string().meta({ examples: ['Serik'] }),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07500'] }),
    line: z
      .string()
      .meta({ examples: ['Boğazkent mahallesi İstiklal caddesi D Kümeevleri No:13'] }),
  }),
);

export const UpdateAddressSchema = registry.register('updateAddress', AddAddressSchema.partial());
