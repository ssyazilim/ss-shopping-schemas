import { z } from 'zod';

export type IDefault = z.infer<typeof DefaultSchema>;
export const DefaultSchema = z.object({
  mainBrand: z.string(),
  mainUrl: z.string(),
  contactMail: z.string(),
  mainAddress: z.string(),
});

export type IContactBody = z.infer<typeof ContactBodySchema>;
export const ContactBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  message: z.string(),
});

export type ICvBody = z.infer<typeof CvBodySchema>;
export const CvBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  fileName: z.string(),
});

export type IErrorBody = z.infer<typeof ErrorBodySchema>;
export const ErrorBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  title: z.string(),
  message: z.string(),
});

export type IResume = z.infer<typeof ResumeSchema>;
export const ResumeSchema = CvBodySchema;

export type ISendResume = z.infer<typeof SendResumeSchema>;
export const SendResumeSchema = DefaultSchema.extend({
  form: ResumeSchema,
});

export type ISendMessage = z.infer<typeof SendMessageSchema>;
export const SendMessageSchema = DefaultSchema.extend({
  form: ContactBodySchema,
});

export type ISendError = z.infer<typeof SendErrorSchema>;
export const SendErrorSchema = DefaultSchema.extend({
  form: ErrorBodySchema,
});
