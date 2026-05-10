import { z } from 'zod';
import { registry } from '../registry';

export const ContactMeSchema = registry.register(
  'ContactMe',
  z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    company: z.string().optional(),
    email: z.email(),
    phoneNumber: z.string(),
    message: z.string(),
    agreed: z.boolean(),
  }),
);

export const ContactMeErrorSchema = registry.register(
  'ContactMeError',
  z.object({
    email: z.email().optional(),
    title: z.string(),
    message: z.string(),
  }),
);

export const ContactMeResumeSchema = registry.register(
  'ContactMeResume',
  z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    phoneNumber: z.string(),
    fileName: z.string(),
  }),
);
