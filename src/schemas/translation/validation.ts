import { z } from 'zod';

export const TRANSLATION = () =>
  z.object({
    locale: z.string().meta({ examples: ['en'] }),
    name: z.string().meta({ examples: ['Test'] }),
    translations: z
      .record(z.string(), z.string())
      .meta({ examples: [{ public_settings_currency: 'TRY' }] }),
  });

export const ADD_TRANSLATIONS = () => z.array(TRANSLATION());

export const UPDATE_TRANSLATION = () => TRANSLATION().partial();
