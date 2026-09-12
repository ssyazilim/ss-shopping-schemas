import { registry } from '../registry';
import { ReviewSchema } from '../../types/review';
import { ADD_REVIEW } from './validation';

export const AddReviewSchema = registry.register('addReview', ADD_REVIEW());

export const ReviewModel = registry.register('Review', ReviewSchema);
