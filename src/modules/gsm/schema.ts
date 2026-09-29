import { z } from 'zod';

/*************************
 *       TYPES           *
 *************************/

export type IGsm = z.infer<typeof GsmSchema>;
export const GsmSchema = z.object({
  msgheader: z.string(),
  encoding: z.string(),
  messages: z.array(
    z.object({
      msg: z.string(),
      no: z.string(),
    }),
  ),
});

export type IGsmReport = z.infer<typeof GsmReportSchema>;
export const GsmReportSchema = z
  .object({
    code: z.string().optional(),
    description: z.string().optional(),
    jobs: z
      .array(
        z.object({
          jobid: z.string(),
          number: z.string(),
          status: z.number(),
          operator: z.number(),
          msglen: z.number(),
          deliveredDate: z.string().optional(),
          errorCode: z.number().optional(),
          referansID: z.string().optional(),
        }),
      )
      .optional(),
  })
  .meta({ id: 'GsmReport' });

export type IGsmHeaders = z.infer<typeof GsmHeadersSchema>;
export const GsmHeadersSchema = z
  .object({
    code: z.string().optional(),
    description: z.string().optional(),
    msgheader: z.array(z.string()).optional(),
    msgheaders: z.array(z.string()).optional(),
  })
  .meta({ id: 'GsmHeaders' });

export type IGsmBalance = z.infer<typeof GsmBalanceSchema>;
export const GsmBalanceSchema = z
  .object({
    code: z.string().optional(),
    balance: z
      .union([z.string(), z.array(z.object({ amount: z.number(), balance_name: z.string() }))])
      .optional(),
  })
  .meta({ id: 'GsmBalance' });
