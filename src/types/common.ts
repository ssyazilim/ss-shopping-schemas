import { z } from 'zod';

/*************************
 *       TYPES           *
 *************************/
export type IMongoSchema = z.infer<typeof MongoSchema>;
export const MongoSchema = z.object({
  _id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
