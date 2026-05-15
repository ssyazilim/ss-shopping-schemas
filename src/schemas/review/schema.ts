import { registry } from '../registry';
import { ADD_REVIEW } from './validation';

export const AddReviewSchema = registry.register('addReview', ADD_REVIEW());
