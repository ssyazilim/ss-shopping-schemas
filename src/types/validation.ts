import { z } from 'zod';

export type IPrimitive = z.infer<typeof PrimitiveSchema>;
export const PrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.undefined(),
]);

export type IField<T = unknown> = {
  value: T;
  error: string;
};

export type INestedForm<T> = T extends IPrimitive
  ? IField<T>
  : T extends ReadonlyArray<infer U>
    ? U extends IPrimitive
      ? IField<T>
      : IFormList<U>
    : T extends Record<string, unknown>
      ? IField<T> & { [K in keyof T]: INestedForm<T[K]> }
      : never;

// Obje dizileri (ör. HeaderMenuItem['subItems']) hem dizi seviyesinde hata taşır
// hem de her eleman için alt form üretir.
export type IFormList<U> = IField<U[]> & Array<INestedForm<U>>;

export type IFormShape<T extends Record<string, unknown>> = {
  [K in keyof T]: INestedForm<T[K]>;
};

export type IAnyField = z.infer<typeof AnyFieldSchema>;
export const AnyFieldSchema = z.object({
  value: z.unknown(),
  error: z.string(),
});

export type IAnyNode = IAnyField | IAnyTree | IAnyList;

export type IAnyTree = { [key: string]: IAnyNode };
export const AnyTreeSchema: z.ZodType<IAnyTree> = z.lazy(() =>
  z.record(z.string(), z.union([AnyFieldSchema, AnyTreeSchema, AnyListSchema])),
);

export type IAnyList = IAnyNode[];
export const AnyListSchema: z.ZodType<IAnyList> = z.lazy(() =>
  z.array(z.union([AnyFieldSchema, AnyTreeSchema, AnyListSchema])),
);

export const AnyNodeSchema: z.ZodType<IAnyNode> = z.lazy(() =>
  z.union([AnyFieldSchema, AnyTreeSchema, AnyListSchema]),
);
