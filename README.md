# @ssyazilim/ss-shopping-schemas

Shared Zod schemas, TypeScript types and OpenAPI spec for SS Yazılım projects.

[![CI](https://github.com/ssyazilim/ss-shopping-schemas/actions/workflows/ci.yml/badge.svg)](https://github.com/ssyazilim/ss-shopping-schemas/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@ssyazilim/ss-shopping-schemas)](https://www.npmjs.com/package/@ssyazilim/ss-shopping-schemas)

**API Docs:** https://ssyazilim.github.io/ss-shopping-schemas

---

## Installation

```bash
npm install @ssyazilim/ss-shopping-schemas
```

## Exports

The package has two entry points:

| Import                                 | İçerik                        |
| -------------------------------------- | ----------------------------- |
| `@ssyazilim/ss-shopping-schemas`       | Zod schemas, TypeScript types |
| `@ssyazilim/ss-shopping-schemas/forms` | Form schemas, locale types    |

---

## Usage

### Schemas

```ts
import {
  LoginUserSchema,
  AddUserSchema,
  PaginationQuerySchema,
  ApiSuccessSchema,
  ApiErrorSchema,
} from '@ssyazilim/ss-shopping-schemas';

// Validation
const result = LoginUserSchema.safeParse({ email: 'test@example.com', password: '123' });
```

### Types

```ts
import type {
  User,
  UserRole,
  AuthResponse,
  AuthTokenPayload,
} from '@ssyazilim/ss-shopping-schemas';
```

### Forms

```ts
import type { ILocale } from '@ssyazilim/ss-shopping-schemas/forms';
import { tr, en } from '@ssyazilim/ss-shopping-schemas/forms';
```

---

## Schemas Reference

Full interactive documentation: **https://ssyazilim.github.io/ss-shopping-schemas**

### Common

| Schema                  | Açıklama                        |
| ----------------------- | ------------------------------- |
| `PaginationQuerySchema` | `page`, `limit`                 |
| `ListQuerySchema`       | `page`, `limit`, `sort`, `text` |
| `DeleteModelSchema`     | `selectedIds: string[]`         |
| `ApiSuccessSchema`      | `{ success: { message } }`      |
| `ApiErrorSchema`        | `{ error: { message } }`        |

### Modüller

| Modül               | Schemas                                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Auth**            | `LoginUserSchema`, `AddUserSchema`, `ActivateUserSchema`, `PasswordResetUserSchema`, `PasswordResetCompleteUserSchema` |
| **Address**         | `AddAddressSchema`, `UpdateAddressSchema`                                                                              |
| **Agreement**       | `AgreementSchema`, `AddAgreementsSchema`, `UpdateAgreementSchema`                                                      |
| **Brand**           | `BrandSchema`, `AddBrandsSchema`, `UpdateBrandSchema`                                                                  |
| **Card**            | `AddCardSchema`                                                                                                        |
| **Cart**            | `AddToCartSchema`, `SetQuantitySchema`                                                                                 |
| **Category**        | `CategorySchema`, `AddCategorySchema`, `UpdateCategorySchema`                                                          |
| **Company**         | `AddCompanySchema`, `UpdateCompanySchema`                                                                              |
| **External**        | `AddExternalSchema`, `UpdateExternalSchema`, `CheckSMTPSchema`                                                         |
| **Form**            | `ContactMeSchema`, `ContactMeErrorSchema`, `ContactMeResumeSchema`                                                     |
| **Google**          | `GeminiPromptSchema`, `TranslateSchema`                                                                                |
| **GSM**             | `SendSmsSchema`                                                                                                        |
| **Minio Bucket**    | `AddBucketConfigSchema`, `AddBucketVersionSchema`                                                                      |
| **Minio Object**    | `AddObjectSchema`, `DeleteObjectSchema`, `CopyObjectSchema`, `PresignedUrlSchema`                                      |
| **Payment**         | `AddPaymentSchema`, `SavePaymentSchema`, `CancelPaymentSchema`, `CheckInstallmentSchema`                               |
| **Post**            | `PostSchema`, `AddPostsSchema`, `LikePostSchema`, `CommentPostSchema`                                                  |
| **Product**         | `ProductSchema`, `AddProductsSchema`, `EditProductSchema`, `PriceSchema`, `ImagesSchema`                               |
| **Product Variant** | `VariantSchema`, `AddVariantSchema`, `AddVariantsMultiSchema`, `UpdateVariantSchema`                                   |
| **Question**        | `AddQuestionSchema`, `UpdateQuestionSchema`                                                                            |
| **Review**          | `AddReviewSchema`                                                                                                      |
| **Shipping**        | `AddShippingAddressSchema`, `AddShippingShipmentSchema`, `ShippingTemplateSchema`, `ShippingProviderSchema`            |
| **Traffic**         | `AnalyzeTrafficSchema`                                                                                                 |
| **Translation**     | `TranslationSchema`, `AddTranslationsSchema`, `UpdateTranslationSchema`                                                |
| **User**            | `CustomerSchema`, `AddCustomersSchema`, `EditUserSchema`, `UpdateCustomerSchema`                                       |

---

## API Response Format

```json
// Success
{ "success": { "message": "...", "data": { ... } } }

// Error
{ "error": { "message": "..." } }
```

---

## Development

```bash
npm run build          # dist/ üret
npm run typecheck      # TypeScript kontrol
npm run test           # Testleri çalıştır
npm run generate:openapi  # openapi.json üret
npm run lint           # ESLint
npm run format         # Prettier
```

Versiyon güncellenince CI otomatik olarak npm'e publish eder ve Swagger docs'u günceller.
