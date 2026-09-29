# @ssyazilim/ss-shopping-schemas

Shared Zod schemas, TypeScript types and the OpenAPI specification for the SS Yazılım e-commerce platform. Consumed by `node-backend`, `node-service` and `nuxt-web-admin-app` so that request/response shapes are defined exactly once.

[![CI](https://github.com/ssyazilim/ss-shopping-schemas/actions/workflows/ci.yml/badge.svg)](https://github.com/ssyazilim/ss-shopping-schemas/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@ssyazilim/ss-shopping-schemas)](https://www.npmjs.com/package/@ssyazilim/ss-shopping-schemas)

**API Docs:** https://ssyazilim.github.io/ss-shopping-schemas

---

## Installation

```bash
npm install @ssyazilim/ss-shopping-schemas
```

`zod` and `@asteasolutions/zod-to-openapi` are marked as external in the bundle, so the consuming project resolves its own copies.

## Entry Point

The package exposes a **single** entry point, built by `tsup` in both ESM and CJS with type declarations:

```ts
import { LoginUserSchema } from '@ssyazilim/ss-shopping-schemas';
import type { User } from '@ssyazilim/ss-shopping-schemas';
```

| Field     | Path              |
| --------- | ----------------- |
| `import`  | `dist/index.js`   |
| `require` | `dist/index.cjs`  |
| `types`   | `dist/index.d.ts` |

---

## Usage

### Validation schemas

```ts
import {
  LoginUserSchema,
  AddUserSchema,
  ListQuerySchema,
  DeleteModelSchema,
  ApiErrorSchema,
} from '@ssyazilim/ss-shopping-schemas';

const result = LoginUserSchema.safeParse({
  email: 'test@example.com',
  password: '123456',
});
```

### Inferred types

```ts
import type {
  User,
  UserRole,
  AuthResponse,
  AuthTokenPayload,
  ILocale,
} from '@ssyazilim/ss-shopping-schemas';
```

### Locale constants

```ts
import { DEFAULT_LOCALES_WEB, DEFAULT_LOCALES_ADMIN } from '@ssyazilim/ss-shopping-schemas';
```

`DEFAULT_LOCALES_ADMIN` is what the admin panel feeds into `@nuxtjs/i18n` as its `locales` list.

---

## Package Layout

```
src/
├── index.ts          # Entry point — re-exports modules/ and types/
├── modules/          # One folder per domain: schema.ts, validation.ts, route.ts
├── types/            # Shared type declarations (common, menu, search, props, yandex)
├── utils/            # registry, tags, common schemas, field and validation helpers
├── locales/          # Notification message catalogs (tr, en, ru, ar, fa)
├── openapi/          # generate.ts — emits openapi.json
└── __tests__/        # Vitest suites
```

Each module folder follows the same three-file convention:

- **`schema.ts`** — Zod object definitions and inferred types; registers components with the OpenAPI registry.
- **`validation.ts`** — request validation schemas used by backend middleware and frontend forms.
- **`route.ts`** — OpenAPI path registrations (side-effect imports only, for spec generation).

---

## Schemas Reference

Full interactive documentation: **https://ssyazilim.github.io/ss-shopping-schemas**

### Common

| Schema                 | Shape                           |
| ---------------------- | ------------------------------- |
| `ListQuerySchema`      | `page`, `limit`, `sort`, `text` |
| `DateRangeQuerySchema` | Date-bounded queries            |
| `DeleteModelSchema`    | `selectedIds: string[]`         |
| `ApiErrorSchema`       | `{ error: { message } }`        |
| `DeleteResultSchema`   | MongoDB delete result           |
| `UpdateResultSchema`   | MongoDB update result           |
| `InsertResultSchema`   | MongoDB insert result           |

### Modules

| Module               | Schemas                                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Auth**             | `LoginUserSchema`, `AddUserSchema`, `ActivateUserSchema`, `PasswordResetUserSchema`, `PasswordResetCompleteUserSchema` |
| **Address**          | `AddAddressSchema`, `UpdateAddressSchema`                                                                              |
| **Agreement**        | `AgreementSchema`, `AddAgreementsSchema`, `UpdateAgreementSchema`                                                      |
| **Brand**            | `BrandSchema`, `AddBrandsSchema`, `UpdateBrandSchema`                                                                  |
| **Cart**             | `AddToCartSchema`, `SetQuantitySchema`                                                                                 |
| **Category**         | `CategorySchema`, `AddCategorySchema`, `UpdateCategorySchema`                                                          |
| **Company**          | `AddCompanySchema`, `UpdateCompanySchema`                                                                              |
| **Contact**          | `ContactMeSchema`, `ContactMeErrorSchema`, `ContactMeResumeSchema`, `CheckSMTPSchema`                                  |
| **Country**          | Country / city / district lookup shapes                                                                                |
| **Currency**         | Exchange rate and conversion shapes                                                                                    |
| **Geliver**          | `AddShippingAddressSchema`, `AddShippingShipmentSchema`, `ShippingTemplateSchema`, `ShippingProviderSchema`            |
| **Google**           | `GeminiPromptSchema`, `TranslateSchema`                                                                                |
| **GSM**              | `SendSmsSchema`                                                                                                        |
| **Header Menu**      | Storefront navigation shapes                                                                                           |
| **Locale**           | `LOCALES_WEB`, `LOCALES_ADMIN`, `DEFAULT_LOCALES_WEB`, `DEFAULT_LOCALES_ADMIN`, `ILocale`                              |
| **Minio**            | `AddBucketConfigSchema`, `AddBucketVersionSchema`, `AddObjectSchema`, `CopyObjectSchema`, `PresignedUrlSchema`         |
| **Module**           | Third-party integration config shapes                                                                                  |
| **Order**            | Order creation and status shapes                                                                                       |
| **Page**             | Static page shapes                                                                                                     |
| **Payment (iyzico)** | `AddPaymentSchema`, `SavePaymentSchema`, `CancelPaymentSchema`, `CheckInstallmentSchema`                               |
| **Post**             | `PostSchema`, `AddPostsSchema`, `LikePostSchema`, `CommentPostSchema`                                                  |
| **Product**          | `ProductSchema`, `AddProductsSchema`, `EditProductSchema`, `PriceSchema`, `ImagesSchema`                               |
| **Product Variant**  | `VariantSchema`, `AddVariantSchema`, `AddVariantsMultiSchema`, `UpdateVariantSchema`                                   |
| **Question**         | `AddQuestionSchema`, `UpdateQuestionSchema`                                                                            |
| **Review**           | `AddReviewSchema`                                                                                                      |
| **Traffic**          | `AnalyzeTrafficSchema`                                                                                                 |
| **Translation**      | `TranslationSchema`, `AddTranslationsSchema`, `UpdateTranslationSchema`                                                |
| **User**             | `CustomerSchema`, `AddCustomersSchema`, `EditUserSchema`, `UpdateCustomerSchema`                                       |

---

## OpenAPI

Route definitions live in each module's `route.ts` and are collected by the shared registry in `src/utils/registry.ts`. Tags are type-constrained via `src/utils/tags.ts`, so a misspelled tag fails the build instead of silently passing.

```bash
npm run generate:openapi   # writes openapi.json at the repo root
npm run swagger            # regenerate, copy to docs/, and serve on port 1000
```

---

## Development

```bash
npm run build          # Bundle to dist/ (tsup, ESM + CJS + d.ts)
npm run build:watch    # Rebuild on change
npm run typecheck      # tsc --noEmit
npm run test           # Vitest (single run)
npm run test:watch     # Vitest watch mode
npm run lint           # ESLint
npm run lint:fix       # ESLint with --fix
npm run format         # Prettier write
npm run format:check   # Prettier check
```

### CI & Publishing

`.github/workflows/ci.yml` runs lint, format check, typecheck, tests and build on every push and pull request to `main`.

On a push to `main`, the publish job builds the package and checks whether the current `package.json` version already exists on npm. It publishes only when the version is new — so **bump the version** in `package.json` as part of any change you want released.

---

## License

MIT
