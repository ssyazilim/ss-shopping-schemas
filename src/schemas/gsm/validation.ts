import { z } from 'zod';

export const GSM_MESSAGES = z.object({
  msg: z.string().default('Hi there. This is just a test message!'),
  no: z.string().default('5365056943'),
});

export const SEND_SMS = z.object({
  msgheader: z.string().default('ERBIL.GUR'),
  encoding: z.enum(['TR', 'ASCII']).default('TR'),
  startdate: z.string().length(12).optional().default('010620261530'),
  messages: z.array(GSM_MESSAGES),
});
