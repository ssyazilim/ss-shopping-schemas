import { describe, it, expect } from 'vitest';
import { PaginationQuerySchema } from '../schemas';

describe('PaginationQuerySchema', () => {
  it('coerce string numbers', () => {
    const result = PaginationQuerySchema.safeParse({ page: '2', limit: '50' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(2);
      expect(result.data.limit).toBe(50);
    }
  });

  it('apply default values', () => {
    const result = PaginationQuerySchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(1);
      expect(result.data.limit).toBe(20);
    }
  });

  it('reject 100 limit', () => {
    const result = PaginationQuerySchema.safeParse({ limit: 101 });
    expect(result.success).toBe(false);
  });
});
