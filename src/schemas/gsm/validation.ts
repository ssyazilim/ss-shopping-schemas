import { z } from 'zod';

export const GSM_MESSAGES = z.object({
  msg: z.string().meta({ examples: ['Hi there. This is just a test message!'] }),
  no: z.string().meta({ examples: ['5365056943'] }),
});

export const SEND_SMS = z.object({
  msgheader: z.string().meta({ examples: ['ERBIL.GUR'] }),
  encoding: z.enum(['TR', 'ASCII']),
  startdate: z.string().length(12).optional(),
  messages: z.array(GSM_MESSAGES),
});
