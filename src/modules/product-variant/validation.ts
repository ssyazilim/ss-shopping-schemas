import { z } from 'zod';
import { fields } from '../fields';
import { ILocale } from '../../locales';
import * as locales from '../../locales';
import { PRICE, IMAGES } from '../product/validation';

const messages = { tr: locales.tr, en: locales.en, ru: locales.ru, ar: locales.ar, fa: locales.fa };

export const VARIANTS_TYPE = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z.array(
    z.object({
      name: f.text(),
      variants: z.array(f.text()),
    }),
  );
};
export const VARIANT = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  const m = messages[locale];

  return z
    .object({
      name: f.text(),
      images: IMAGES(),
      price: PRICE(),
      stockQuantity: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
      sku: f.text(),
      gtin: f.text().or(z.literal('')).optional(),
      desi: z
        .number({ message: m.public_forms_validations_mustNumber })
        .int({ message: m.public_forms_validations_mustNumberInteger })
        .nonnegative({ message: m.public_forms_validations_mustNumberPositive }),
    })
    .meta({ id: 'VariantBase' });
};
export const ADD_VARIANT = (locale: ILocale = 'tr') => {
  return z
    .object({
      variantsType: VARIANTS_TYPE(locale),
      variant: VARIANT(locale),
    })
    .meta({ id: 'addVariant' });
};
export const UPDATE_VARIANT = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      variantsType: VARIANTS_TYPE(locale),
      variant: VARIANT(locale).extend({
        _id: f.text(24,24),
      }),
    })
    .meta({ id: 'updateVariant' });
};
export const DELETE_FOR_VARIANT = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      selectedIds: z
        .array(f.text(24,24))
        .meta({ description: 'IDs to delete' }),
      productId: f.text(24,24),
      variantsType: VARIANTS_TYPE(),
    })
    .meta({ id: 'deleteForVariant' });
};
export const ADD_VARIANTS = (locale: ILocale = 'tr') => {
  return z
    .object({
      variantsType: VARIANTS_TYPE(locale),
      variants: z.array(VARIANT(locale)),
    })
    .meta({ id: 'addVariantsMulti' });
};

export const ADD_VARIANT_TYPE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    type: f.text(),
  });
};
export const ADD_VARIANT_VALUE = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z.object({
    value: f.text(),
  });
};
