import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { registry } from '../schemas';

registry.registerComponent('securitySchemes', 'JWT', {
  type: 'http',
  scheme: 'Bearer',
  bearerFormat: 'JWT',
  description: 'Provide your JWT token in the Authorization header as a Bearer token',
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
  tags: [
    { name: 'API-authentication', description: 'API authentications process for users' },
    { name: 'API-address', description: 'Addresses for the system' },
    { name: 'API-agreement', description: 'User agreements for the system' },
    { name: 'API-brand', description: 'Brands for the system' },
    { name: 'API-card', description: 'User card information' },
    { name: 'API-cart', description: 'Carts for the system' },
    { name: 'API-category', description: 'Categories for the system' },
    { name: 'API-company', description: 'Company information for the User' },
    { name: 'API-module', description: 'Modules for the system' },
    { name: 'API-form', description: 'Form process for users' },
    { name: 'API-order', description: 'User order information' },
    { name: 'API-post', description: 'Posts for the system' },
    { name: 'API-product', description: 'Products for the system' },
    { name: 'API-product-variant', description: 'Variants for the products' },
    { name: 'API-question', description: 'Questions for the product' },
    { name: 'API-review', description: 'Reviews for the product' },
    { name: 'API-traffic', description: 'Web site analysis for users' },
    { name: 'API-translation', description: 'Translations for the system' },
    { name: 'API-user', description: 'User process for users' },
    { name: 'SERVICE-countries-cities-districts', description: 'Country State City for the User' },
    { name: 'SERVICE-currency', description: 'Currencies for the system' },
    { name: 'SERVICE-google', description: 'Google operations for the system' },
    {
      name: 'SERVICE-minio-bucket-S3',
      description: 'Simple Storage Service for the bucket operations',
    },
    {
      name: 'SERVICE-minio-object-S3',
      description: 'Simple Storage Service for the object operations',
    },
    { name: 'SERVICE-message-netgsm', description: 'GSM service operations for the system' },
    { name: 'SERVICE-payment-iyzico', description: 'Iyzico payment operations' },
    { name: 'SERVICE-shipping-geliver', description: 'Shipping calculations for the system' },
  ],
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
