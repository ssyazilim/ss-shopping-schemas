import { z } from 'zod';
import { registry } from '../registry';

export const TranslationSchema = registry.register(
  'Translation',
  z.object({
    locale: z.string().meta({ examples: ['en'] }),
    name: z.string().meta({ examples: ['Test'] }),
    translations: z
      .record(z.string(), z.string())
      .meta({ description: 'Key-value translation pairs' }),
  }),
);

export const AddTranslationsSchema = registry.register(
  'AddTranslations',
  z.array(TranslationSchema),
);

export const UpdateTranslationSchema = registry.register(
  'UpdateTranslation',
  z.object({
    name: z
      .string()
      .optional()
      .meta({ examples: ['web'] }),
  }),
);
