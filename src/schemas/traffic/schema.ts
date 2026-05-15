import { registry } from '../registry';
import { ANALYZE } from './validation';

export const AnalyzeSchema = registry.register('analyze', ANALYZE());
