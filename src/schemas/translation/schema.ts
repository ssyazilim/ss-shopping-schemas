import { registry } from '../registry';
import { TranslationSchema as TranslationEntitySchema } from '../../types/translation';
import { ADD_TRANSLATION, ADD_TRANSLATIONS, UPDATE_TRANSLATION } from './validation';

export const AddTranslationSchema = registry.register('AddTranslation', ADD_TRANSLATION());

export const AddTranslationsSchema = registry.register('addTranslations', ADD_TRANSLATIONS());

export const UpdateTranslationSchema = registry.register('updateTranslation', UPDATE_TRANSLATION());

export const TranslationModel = registry.register('Translation', TranslationEntitySchema);
