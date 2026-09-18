import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import type { ILocale } from '../../locales';

export const ADD_AGREEMENT = (locale: ILocale = 'tr') => {
  const f = fields(locale);

  return z
    .object({
      locale: f.text(),
      name: f.text(),
      content: f.text(1, 65535),
    })
    .meta({ id: 'AddAgreement' });
};

export const UPDATE_AGREEMENT = (locale: ILocale = 'tr') =>
  deepPartial(ADD_AGREEMENT(locale)).meta({ id: 'UpdateAgreement' });

export const ADD_AGREEMENTS = (locale: ILocale = 'tr') => z.array(ADD_AGREEMENT(locale));
