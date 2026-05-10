import { z } from 'zod';
import { registry } from './registry';

export const UuidSchema = registry.register(
  'Uuid',
  z
    .string()
    .uuid()
    .meta({
      description: 'UUID v4 formatında benzersiz kimlik',
      examples: ['123e4567-e89b-12d3-a456-426614174000'],
    }),
);

export const PaginationQuerySchema = registry.register(
  'PaginationQuery',
  z.object({
    page: z.coerce.number().int().min(1).default(1).meta({ description: 'Sayfa numarası' }),
    limit: z.coerce
      .number()
      .int()
      .min(1)
      .max(100)
      .default(20)
      .meta({ description: 'Sayfa başına kayıt sayısı' }),
  }),
);

export const ApiSuccessSchema = registry.register(
  'ApiSuccess',
  z.object({
    success: z.object({
      message: z.string().meta({ description: 'Başarı mesajı' }),
    }),
  }),
);

export const ApiErrorSchema = registry.register(
  'ApiError',
  z.object({
    error: z.object({
      message: z.string().meta({ description: 'Hata mesajı' }),
    }),
  }),
);
