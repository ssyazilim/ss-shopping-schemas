import { z } from 'zod';
import { deepPartial } from '../../utils/common';
import { fields } from '../../utils/fields';
import { messages } from '../../locales';
import type { ILocale } from '../../locales';
import {
  PAGE_ROUTE_PATTERN,
  PAGE_PATH_PATTERN,
  TRANSLATION_KEY_PATTERN,
} from '../../utils/validations';

export const ADD_PAGE = (locale: ILocale = 'tr') => {
  const m = messages[locale];
  const f = fields(locale);

  return z
    .object({
      path: f
        .text()
        .regex(PAGE_ROUTE_PATTERN, { message: m.public_forms_validations_routeKey }),
      filePath: f
        .text()
        .regex(PAGE_PATH_PATTERN, { message: m.public_forms_validations_pagePath }),
      title: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey }),
      description: f
        .text()
        .regex(TRANSLATION_KEY_PATTERN, { message: m.public_forms_validations_translationKey })
        .optional(),
      draft: z.boolean().default(false),
      sha: f.text(40, 64),
    })
    .meta({ id: 'AddPage' });
};

export const ADD_PAGES = (locale: ILocale = 'tr') => z.array(ADD_PAGE(locale));

export const UPDATE_PAGE = (locale: ILocale = 'tr') =>
  deepPartial(ADD_PAGE(locale)).meta({ id: 'UpdatePage' });
