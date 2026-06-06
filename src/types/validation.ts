import { z } from 'zod';

export type IPrimitive = z.infer<typeof PrimitiveSchema>;
export const PrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.undefined(),
]);

// Generic conditional type — Zod'da karşılığı yok, TypeScript tipi olarak kalır
export type IField<T = unknown> = {
  value: T;
  error: string;
};

// Recursive conditional mapped type — Zod'da karşılığı yok, TypeScript tipi olarak kalır
export type INestedForm<T> = T extends IPrimitive
  ? IField<T>
  : T extends Array<unknown>
    ? IField<T>
    : T extends Record<string, unknown>
      ? IField<T> & { [K in keyof T]: INestedForm<T[K]> }
      : never;

// Generic mapped type — Zod'da karşılığı yok, TypeScript tipi olarak kalır
export type IFormShape<T extends Record<string, unknown>> = {
  [K in keyof T]: INestedForm<T[K]>;
};

export type IAnyField = z.infer<typeof AnyFieldSchema>;
export const AnyFieldSchema = z.object({
  value: z.unknown(),
  error: z.string(),
});

export type IAnyTree = z.infer<typeof AnyTreeSchema>;
export const AnyTreeSchema: z.ZodType<{ [key: string]: IAnyField | IAnyTree }> = z.lazy(() =>
  z.record(z.string(), z.union([AnyFieldSchema, AnyTreeSchema])),
);
