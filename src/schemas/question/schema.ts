import { registry } from '../registry';
import { QuestionSchema } from '../../types/question';
import { ADD_QUESTION, UPDATE_QUESTION } from './validation';

export const AddQuestionSchema = registry.register('addQuestion', ADD_QUESTION());

export const UpdateQuestionSchema = registry.register('updateQuestion', UPDATE_QUESTION());

export const QuestionModel = registry.register('Question', QuestionSchema);
