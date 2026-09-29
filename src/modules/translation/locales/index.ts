import type { ILocale, IDefaultTranslations } from './types';
import { translations as tr } from './tr';
import { translations as en } from './en';
import { translations as ru } from './ru';
import { translations as ar } from './ar';
import { translations as fa } from './fa';

export type { IDefaultTranslations } from './types';

export const defaultTranslations: Record<ILocale, IDefaultTranslations> = { tr, en, ru, ar, fa };
