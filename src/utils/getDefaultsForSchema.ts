import * as z from 'zod';

export function getDefaultsForSchema<T extends z.ZodTypeAny>(schema: T): z.infer<T> {
  return getFieldDefault(schema) as z.infer<T>;
}

function getFieldDefault(schema: z.ZodTypeAny): unknown {
  if (schema instanceof z.ZodDefault) {
    const dv = schema._zod.def.defaultValue;
    return typeof dv === 'function' ? (dv as () => unknown)() : dv;
  }

  if (schema instanceof z.ZodOptional) {
    return undefined;
  }

  if (schema instanceof z.ZodNullable) {
    return null;
  }

  if (schema instanceof z.ZodObject) {
    const result: Record<string, unknown> = {};
    for (const key in schema.shape) {
      result[key] = getFieldDefault(schema.shape[key]);
    }
    return result;
  }

  if (schema instanceof z.ZodArray || schema instanceof z.ZodTuple) {
    return [];
  }

  if (schema instanceof z.ZodEnum) {
    return schema.options[0];
  }

  if (schema instanceof z.ZodUnion) {
    return getFieldDefault((schema as z.ZodUnion<[z.ZodTypeAny, ...z.ZodTypeAny[]]>).options[0]);
  }

  if (schema instanceof z.ZodLazy) {
    return getFieldDefault(schema._zod.def.getter() as z.ZodTypeAny);
  }

  if (schema instanceof z.ZodString) {
    return '';
  }

  const typeName = schema.constructor.name;
  if (typeName === 'ZodEmail' || typeName === 'ZodURL' || typeName === 'ZodE164') {
    return '';
  }

  if (schema instanceof z.ZodNumber) {
    return 0;
  }

  if (schema instanceof z.ZodBoolean) {
    return false;
  }

  if (schema instanceof z.ZodDate) {
    return new Date();
  }

  return undefined;
}
