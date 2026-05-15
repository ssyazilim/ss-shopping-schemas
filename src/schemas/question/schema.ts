import { registry } from '../registry';
import { ADD_QUESTION, UPDATE_QUESTION } from './validation';

export const AddQuestionSchema = registry.register('addQuestion', ADD_QUESTION());

export const UpdateQuestionSchema = registry.register('updateQuestion', UPDATE_QUESTION());
