import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { registry } from '../schemas';

// When all schema files are imported, they are registered in the registry.
// This script collects them and produces openapi.json

registry.registerComponent('securitySchemes', 'JWT', {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: "Provide your token key in the 'Bearer <YOUR_TOKEN>' header",
});

registry.registerComponent('securitySchemes', 'X-API-KEY', {
  type: 'apiKey',
  name: 'x-api-key',
  in: 'header',
  description: "Provide your api key in the 'x-api-key' header",
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
    { name: 'Authentication', description: 'API authentications process for users' },
    { name: 'Address', description: 'Addresses for the system' },
    { name: 'Agreement', description: 'User agreements for the system' },
    { name: 'Brand', description: 'Brands for the system' },
    { name: 'Card', description: 'User card information' },
    { name: 'Cart', description: 'Carts for the system' },
    { name: 'Category', description: 'Categories for the system' },
    { name: 'Company', description: 'Company information for the User' },
    { name: 'Countries Cities & Districts', description: 'Country State City for the User' },
    { name: 'Currency', description: 'Currencies for the system' },
    { name: 'External', description: 'External Services for the system' },
    { name: 'Form', description: 'Form process for users' },
    { name: 'Google', description: 'Google operations for the system' },
    { name: 'Gsm', description: 'GSM service operations for the system' },
    { name: 'Minio Bucket S3', description: 'Simple Storage Service for the bucket operations' },
    { name: 'Minio Object S3', description: 'Simple Storage Service for the object operations' },
    { name: 'Payment', description: 'User payment information' },
    { name: 'Post', description: 'Posts for the system' },
    { name: 'Product', description: 'Products for the system' },
    { name: 'Product Variant', description: 'Variants for the products' },
    { name: 'Question', description: 'Questions for the product' },
    { name: 'Review', description: 'Reviews for the product' },
    { name: 'Shipping', description: 'Shipping calculations for the system' },
    { name: 'Traffic', description: 'Web site analysis for users' },
    { name: 'Translation', description: 'Translations for the system' },
    { name: 'User', description: 'User process for users' },
  ],
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'https://swagger.io',
  },
  servers: [
    { url: 'http://localhost:5000/api' },
    { url: 'https://api.bastakshop.com/api' },
    { url: 'https://api.kimyakent.com/api' },
    { url: 'https://api.ulusanelektrik.com/api' },
  ],
});

writeFileSync(
  new URL('../../openapi.json', import.meta.url),
  JSON.stringify(document, null, 2),
  'utf-8',
);

console.log('✓ openapi.json created');
