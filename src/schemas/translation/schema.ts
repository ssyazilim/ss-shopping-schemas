import { registry } from '../registry';
import { TRANSLATION, ADD_TRANSLATIONS, UPDATE_TRANSLATION } from './validation';

export const TranslationSchema = registry.register('translation', TRANSLATION());

export const AddTranslationsSchema = registry.register('addTranslations', ADD_TRANSLATIONS());

export const UpdateTranslationSchema = registry.register('updateTranslation', UPDATE_TRANSLATION());
