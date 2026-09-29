/**
 * Single source of truth for OpenAPI tags.
 *
 * Route files reference these instead of writing the tag name inline, and
 * `openapi/generate.ts` builds its tag list from the same objects — so a tag
 * can never be used without also being described, and a typo in the key is a
 * compile error. Key order here is the group order shown in Swagger UI.
 */

export const API_TAGS = {
  authentication: {
    name: 'API-authentication',
    description: 'API authentications process for users',
  },
  address: { name: 'API-address', description: 'Addresses' },
  agreement: { name: 'API-agreement', description: 'User agreements' },
  brand: { name: 'API-brand', description: 'Brands' },
  cart: { name: 'API-cart', description: 'Carts' },
  category: { name: 'API-category', description: 'Categories' },
  company: { name: 'API-company', description: 'Company information' },
  contact: { name: 'API-contact', description: 'Contact forms for users' },
  module: { name: 'API-module', description: 'Modules' },
  headerMenu: { name: 'API-header-menu', description: 'Header menu of the storefront' },
  order: { name: 'API-order', description: 'User order information' },
  page: { name: 'API-page', description: 'Markdown pages for the storefront' },
  post: { name: 'API-post', description: 'Posts' },
  product: { name: 'API-product', description: 'Products' },
  productVariant: { name: 'API-product-variant', description: 'Variants' },
  question: { name: 'API-question', description: 'Questions' },
  review: { name: 'API-review', description: 'Reviews' },
  traffic: { name: 'API-traffic', description: 'Web site analysis' },
  translation: { name: 'API-translation', description: 'Translations' },
  user: { name: 'API-user', description: 'User process' },
} as const;

export const SERVICE_TAGS = {
  content: { name: 'SERVICE-content', description: 'Tenant content files from GitLab' },
  countriesCitiesDistricts: {
    name: 'SERVICE-countries-cities-districts',
    description: 'Country State City API',
  },
  currency: { name: 'SERVICE-currency', description: 'Currencies' },
  google: { name: 'SERVICE-google', description: 'Google operations' },
  minioBucket: {
    name: 'SERVICE-minio-bucket-S3',
    description: 'Simple Storage Service for the bucket operations',
  },
  minioObject: {
    name: 'SERVICE-minio-object-S3',
    description: 'Simple Storage Service for the object operations',
  },
  messageNetgsm: {
    name: 'SERVICE-message-netgsm',
    description: 'GSM service operations for the system',
  },
  paymentIyzico: { name: 'SERVICE-payment-iyzico', description: 'Iyzico payment operations' },
  shippingGeliver: {
    name: 'SERVICE-shipping-geliver',
    description: 'Shipping operations for the system',
  },
} as const;

export type IApiTag = (typeof API_TAGS)[keyof typeof API_TAGS]['name'];
export type IServiceTag = (typeof SERVICE_TAGS)[keyof typeof SERVICE_TAGS]['name'];
export type ITag = IApiTag | IServiceTag;

/** Tag list handed to the OpenAPI document, in Swagger UI display order. */
export const OPENAPI_TAGS = [...Object.values(API_TAGS), ...Object.values(SERVICE_TAGS)];
