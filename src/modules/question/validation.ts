import { z } from 'zod';
import { fields } from '../fields';
import type { ILocale } from '../../locales';

export const ADD_QUESTION = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      status: f.text(),
      question: f.text(),
    })
    .meta({ id: 'addQuestion' });
};

export const UPDATE_QUESTION = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return ADD_QUESTION(locale)
    .extend({
      answer: f.text(),
    })
    .meta({ id: 'updateQuestion' });
};
