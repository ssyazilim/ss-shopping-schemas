import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { registry } from '../modules';
import { OPENAPI_TAGS } from '../utils/tags';

registry.registerComponent('securitySchemes', 'JWT', {
  type: 'http',
  scheme: 'Bearer',
  bearerFormat: 'JWT',
  description: 'Provide your JWT token in the Authorization header as a Bearer token',
});

registry.registerComponent('securitySchemes', 'X-API-KEY', {
  type: 'apiKey',
  in: 'header',
  name: 'x-api-key',
  description: 'Service API key required by the checkKey middleware',
});

const generator = new OpenApiGeneratorV31(registry.definitions);

const document = generator.generateDocument({
  openapi: '3.1.0',
  info: {
    title: 'SS-Ecommerce - API - OpenAPI 3.0',
    description:
      'The SS-Ecommerce API, built on the OpenAPI 3.0 specification, provides a standardized, language-agnostic interface for interacting with an e-commerce platform.',
    termsOfService: 'https://swagger.io/terms/',
    contact: { name: 'SS Yazılım', email: 'admin@ssyazilim.com' },
    license: { name: 'MIT', url: 'https://opensource.org/licenses/MIT' },
    version: '1.0.11',
  },
  tags: OPENAPI_TAGS,
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'https://swagger.io',
  },
  servers: [{ url: 'http://localhost:5001/api' }, { url: 'http://localhost:5002/service' }],
});

writeFileSync(
  new URL('../../openapi.json', import.meta.url),
  JSON.stringify(document, null, 2),
  'utf-8',
);

console.log('✓ openapi.json created');
