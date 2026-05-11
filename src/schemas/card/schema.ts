import { registry } from '../registry';
import { ADD_CARD } from './validation';

export const AddCardSchema = registry.register('AddCard', ADD_CARD());
