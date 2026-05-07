import type { ProductCategory } from '../types/index.js';

// Kategori etiketleri — UI'da select/badge için
export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  catheter: 'Kateter',
  gel: 'Jel',
  instillation: 'İnstilasyon',
  implant: 'İmplant',
  irrigation: 'İrigasyon',
};

// Sayfalama varsayılanları
export const PAGINATION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 20,
  MAX_LIMIT: 100,
} as const;
