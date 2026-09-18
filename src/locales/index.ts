import type { ILocale, INotifications } from './types';
import { notifications as tr } from './tr';
import { notifications as en } from './en';
import { notifications as ru } from './ru';
import { notifications as ar } from './ar';
import { notifications as fa } from './fa';

export type { ILocale, INotifications } from './types';
export { tr, en, ru, ar, fa };

export const messages: Record<ILocale, INotifications> = { tr, en, ru, ar, fa };
