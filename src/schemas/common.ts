import { z } from 'zod';
import { registry } from './registry';

export const isValidCard = (card: string) => {
  const digits = card.replace(/\s/g, '');

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]!);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

export const PaginationQuerySchema = registry.register(
  'PaginationQuery',
  z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(25).optional(),
  }),
);

export const ListQuerySchema = registry.register(
  'ListQuery',
  z.object({
    page: z.coerce.number().int().min(1).default(1).optional(),
    limit: z.coerce.number().int().min(1).max(100).default(25).optional(),
    sort: z.string().default('updatedAt,desc'),
    text: z.string().default('').optional(),
  }),
);

export const DateRangeQuerySchema = registry.register(
  'DateRangeQuery',
  z.object({
    startDate: z.string().optional().meta({ examples: ['2024-12-15T00:00:00.000Z'] }),
    endDate: z.string().optional().meta({ examples: ['2024-12-15T23:59:59.999Z'] }),
  }),
);

export const ApiSuccessSchema = registry.register(
  'ApiSuccess',
  z.object({
    success: z.object({
      message: z.string().meta({ description: 'Success message' }),
    }),
  }),
);

export const ApiErrorSchema = registry.register(
  'ApiError',
  z.object({
    error: z.object({
      message: z.string().meta({ description: 'Error message' }),
    }),
  }),
);

export const DeleteModelSchema = registry.register(
  'DeleteModel',
  z.object({
    selectedIds: z.array(z.string()).meta({ description: 'IDs to delete' }),
  }),
);
