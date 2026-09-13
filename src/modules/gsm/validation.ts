import { z } from 'zod';

export const GSM_MESSAGES = z
  .object({
    msg: z.string(),
    no: z.string(),
  })
  .meta({ id: 'GsmMessages' });

export const SEND_SMS = z
  .object({
    msgheader: z.string().default('ERBIL.GUR'),
    encoding: z.enum(['TR', 'ASCII']).default('TR'),
    startdate: z.string().optional().default('010620261530'),
    messages: z.array(GSM_MESSAGES),
  })
  .meta({ id: 'SendSms' });
