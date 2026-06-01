import { z } from 'zod';
import { ILocale } from '../../locales';
import * as locales from '../../locales';
import { PRICE, IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const VARIANTS_TYPE = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.array(
    z.object({
      name: z
        .string()
        .min(1, { message: m.public_forms_validations_minLength(1) })
        .max(254, { message: m.public_forms_validations_maxLength(254) })
        .meta({ examples: ['Renk'] }),
      variants: z
        .array(
          z
            .string()
            .min(1, { message: m.public_forms_validations_minLength(2) })
            .max(254, { message: m.public_forms_validations_maxLength(254) }),
        )
        .meta({ examples: [['Siyah', 'Beyaz']] }),
    }),
  );
};
export const VARIANT = (locale: ILocale = 'tr') => {
  const m = messages[locale];

  return z.object({
    name: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Siyah'] }),
    images: IMAGES(),
    price: PRICE(),
    stockQuantity: z
      .number({ message: m.public_forms_validations_mustNumber })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [100] }),
    sku: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['4SN106C'] }),
    gtin: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .or(z.literal(''))
      .optional()
      .meta({ examples: ['0123456789012'] }),
    desi: z
      .number({ message: m.public_forms_validations_mustNumber })
      .min(0, { message: m.public_forms_validations_minLength(0) })
      .max(1000, { message: m.public_forms_validations_maxLength(1000) })
      .int({ message: m.public_forms_validations_mustNumberInteger })
      .nonnegative({ message: m.public_forms_validations_mustNumberPositive })
      .meta({ examples: [1] }),
  });
};
export const ADD_VARIANT = (locale: ILocale = 'tr') => {
  return z.object({
    variantsType: VARIANTS_TYPE(locale),
    variant: VARIANT(locale),
  });
};
export const ADD_VARIANTS_MULTI = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.array(
    VARIANT().extend({
      productId: z
        .string()
        .min(24, { message: m.public_forms_validations_minLength(24) })
        .max(24, { message: m.public_forms_validations_maxLength(24) })
        .meta({ examples: ['66f29aefff9245b28d05482f'] }),
      _id: z
        .string()
        .optional()
        .meta({ examples: ['66f29aefff9245b28d05482e'] }),
    }),
  );
};
export const UPDATE_VARIANT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    variantsType: VARIANTS_TYPE(),
    _id: z
      .string()
      .optional()
      .meta({ examples: ['66f27bdc8a01cf36d27cbe1c'] }),
    name: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) })
      .meta({ examples: ['Siyah'] }),
  });
};
export const DELETE_FOR_VARIANT = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    selectedIds: z
      .array(
        z
          .string()
          .min(24, { message: m.public_forms_validations_minLength(24) })
          .max(24, { message: m.public_forms_validations_maxLength(24) }),
      )
      .meta({ description: 'IDs to delete' }),
    productId: z
      .string()
      .min(24, { message: m.public_forms_validations_minLength(24) })
      .max(24, { message: m.public_forms_validations_maxLength(24) }),
    variantsType: VARIANTS_TYPE(),
  });
};

export const ADD_VARIANT_TYPE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    type: z
      .string()
      .min(2, { message: m.public_forms_validations_minLength(2) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
export const ADD_VARIANT_VALUE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  return z.object({
    value: z
      .string()
      .min(1, { message: m.public_forms_validations_minLength(1) })
      .max(254, { message: m.public_forms_validations_maxLength(254) }),
  });
};
