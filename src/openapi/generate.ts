import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { registry } from '../schemas/index.js';

// Tüm schema dosyaları import edildiğinde registry'ye register ederler
// Bu script onları toplar ve openapi.json üretir

const generator = new OpenApiGeneratorV31(registry.definitions);

const document = generator.generateDocument({
  openapi: '3.1.0',
  info: {
    title: 'Istem Medikal API',
    version: '1.0.0',
    description: 'Istem Medikal A.Ş. — Ortak API şema tanımları',
    contact: {
      name: 'Istem Medikal ArGe',
      email: 'istemmedikalai@gmail.com',
    },
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Geliştirme ortamı' },
    { url: 'https://api.istemmedikal.com', description: 'Üretim ortamı' },
  ],
});

writeFileSync(
  new URL('../../openapi.json', import.meta.url),
  JSON.stringify(document, null, 2),
  'utf-8',
);

console.log('✓ openapi.json oluşturuldu');
