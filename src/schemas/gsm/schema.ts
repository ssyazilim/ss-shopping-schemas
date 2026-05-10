import { z } from 'zod';
import { registry } from '../registry';

const MessagesSchema = registry.register(
  'GsmMessages',
  z.object({
    msg: z.string().meta({ examples: ['Hi there. This is just a test message!'] }),
    no: z.string().meta({ examples: ['5365056943'] }),
  }),
);

export const SendSmsSchema = registry.register(
  'SendSms',
  z.object({
    msgheader: z.string().meta({ examples: ['ERBIL.GUR'] }),
    encoding: z.string().meta({ examples: ['TR'] }),
    messages: z.array(MessagesSchema),
  }),
);
