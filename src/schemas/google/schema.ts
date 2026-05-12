import { registry } from '../registry';
import { GEMINI_PROMPT, TRANSLATE } from './validation';

export const GeminiPromptSchema = registry.register('GeminiPrompt', GEMINI_PROMPT);

export const TranslateSchema = registry.register('Translate', TRANSLATE);
