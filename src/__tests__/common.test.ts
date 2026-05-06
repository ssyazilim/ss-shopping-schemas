import { describe, it, expect } from 'vitest';
import { PaginationQuerySchema } from '../schemas/common.js';

describe('PaginationQuerySchema', () => {
  it('string sayıları coerce eder', () => {
    const result = PaginationQuerySchema.safeParse({ page: '2', limit: '50' });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(2);
      expect(result.data.limit).toBe(50);
    }
  });

  it('default değerleri uygular', () => {
    const result = PaginationQuerySchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.page).toBe(1);
      expect(result.data.limit).toBe(20);
    }
  });

  it('limit 100 üzerini reddeder', () => {
    const result = PaginationQuerySchema.safeParse({ limit: 101 });
    expect(result.success).toBe(false);
  });
});
