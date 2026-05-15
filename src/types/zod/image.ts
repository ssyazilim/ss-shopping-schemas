import { z } from 'zod';

/*************************
 *       TYPES           *
 *************************/
export type IStaticImage = z.infer<typeof StaticImageSchema>;
export const StaticImageSchema = z.array(
  z.object({
    name: z.string(),
    image: z.string(),
  }),
);

export type IDynamicImage = z.infer<typeof DynamicImageSchema>;
export const DynamicImageSchema = z.array(z.string());

export type IImage = z.infer<typeof ImageSchema>;
export const ImageSchema = z.object({
  staticImages: StaticImageSchema,
  dynamicImages: DynamicImageSchema,
});
