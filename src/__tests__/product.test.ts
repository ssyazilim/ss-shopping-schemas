import { describe, it, expect } from 'vitest';
import { ProductSchema, CreateProductSchema, UpdateProductSchema } from '../schemas/product.js';

describe('ProductSchema', () => {
  const validProduct = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: 'LUBRAGEL',
    category: 'gel' as const,
    catalogCode: 'LUB-006',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
  };

  it('geçerli ürün verisini kabul eder', () => {
    const result = ProductSchema.safeParse(validProduct);
    expect(result.success).toBe(true);
  });

  it('geçersiz UUID reddeder', () => {
    const result = ProductSchema.safeParse({ ...validProduct, id: 'not-a-uuid' });
    expect(result.success).toBe(false);
  });

  it('geçersiz kategori reddeder', () => {
    const result = ProductSchema.safeParse({ ...validProduct, category: 'unknown' });
    expect(result.success).toBe(false);
  });

  it('catalogCode küçük harf içerirse reddeder', () => {
    const result = ProductSchema.safeParse({ ...validProduct, catalogCode: 'lub-006' });
    expect(result.success).toBe(false);
  });
});

describe('CreateProductSchema', () => {
  it('id ve createdAt olmadan çalışır', () => {
    const result = CreateProductSchema.safeParse({
      name: 'HYACYST',
      category: 'instillation',
      catalogCode: 'HYA-080',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.isActive).toBe(true); // default değer
    }
  });
});

describe('UpdateProductSchema', () => {
  it('tüm alanlar opsiyonel olur', () => {
    const result = UpdateProductSchema.safeParse({ name: 'HYACYST Updated' });
    expect(result.success).toBe(true);
  });

  it('boş obje de geçerlidir', () => {
    const result = UpdateProductSchema.safeParse({});
    expect(result.success).toBe(true);
  });
});
