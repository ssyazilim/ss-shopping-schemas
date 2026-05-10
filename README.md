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

| Import | İçerik |
|--------|--------|
| `@ssyazilim/ss-shopping-schemas` | Zod schemas, TypeScript types |
| `@ssyazilim/ss-shopping-schemas/forms` | Form schemas, locale types |

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
import type { User, UserRole, AuthResponse, AuthTokenPayload } from '@ssyazilim/ss-shopping-schemas';
```

### Forms

```ts
import type { ILocale } from '@ssyazilim/ss-shopping-schemas/forms';
import { tr, en } from '@ssyazilim/ss-shopping-schemas/forms';
```

---

## Schemas Reference

### Auth

| Schema | Alanlar |
|--------|---------|
| `LoginUserSchema` | `email`, `password` |
| `AddUserSchema` | `name`, `surname?`, `email`, `phoneNumber`, `password` |
| `CheckKeySchema` | `key` |
| `ActivateUserSchema` | `key`, `code` |
| `PasswordResetUserSchema` | `email` |
| `PasswordResetCompleteUserSchema` | `email`, `key`, `newPassword` |

### Common

| Schema | Açıklama |
|--------|----------|
| `UuidSchema` | UUID v4 string |
| `PaginationQuerySchema` | `page` (default: 1), `limit` (default: 20, max: 100) |
| `ApiSuccessSchema` | `{ success: { message } }` |
| `ApiErrorSchema` | `{ error: { message } }` |

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
