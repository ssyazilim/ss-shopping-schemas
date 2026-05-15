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
