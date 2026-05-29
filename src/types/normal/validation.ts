// ─── Public Types ─────────────────────────────────────────────────────────────
export type IPrimitive = string | number | boolean | null | undefined;

export type IField<T = unknown> = {
  value: T;
  error: string;
};

export type INestedForm<T> = T extends IPrimitive
  ? IField<T>
  : T extends Array<unknown>
    ? IField<T>
    : T extends Record<string, unknown>
      ? IField<T> & { [K in keyof T]: INestedForm<T[K]> }
      : never;

export type IFormShape<T extends Record<string, unknown>> = {
  [K in keyof T]: INestedForm<T[K]>;
};

// ─── Internal Types ───────────────────────────────────────────────────────────
export type IAnyField = { value: unknown; error: string };

export interface IAnyTree {
  [key: string]: IAnyField | IAnyTree;
}
