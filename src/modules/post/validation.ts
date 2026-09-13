import { z } from 'zod';
import { fields } from '../fields';
import type { ILocale } from '../../locales';

export const ADD_POST = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      type: f.text(),
      date: z.array(f.text()),
      timeZone: f.text(),
      name: f.text(),
      content: f.text(0, 65535),
    })
    .meta({ id: 'AddPost' });
};

export const UPDATE_POST = (locale: ILocale = 'tr') =>
  ADD_POST(locale).partial().meta({ id: 'UpdatePost' });

export const ADD_POSTS = () => z.array(ADD_POST());

export const LIKE_POST = () =>
  z
    .object({
      vote: z.boolean(),
    })
    .meta({ id: 'likePost' });

export const COMMENT_POST = (locale: ILocale = 'tr') => {
  const f = fields(locale);
  return z
    .object({
      name: f.text(),
      text: f.text(),
    })
    .meta({ id: 'commentPost' });
};
