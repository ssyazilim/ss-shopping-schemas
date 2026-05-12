import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'This field is required!',
  public_forms_validations_email: 'Please enter a valid email address!',
  public_forms_validations_sameAs: 'Your passwords do not match!',
  public_forms_validations_phoneNumber: 'Please enter a valid phone number!',
  public_forms_validations_cardNumber: 'Please enter a valid card number!',
  public_forms_validations_url: 'Please enter a valid URL!',
  public_forms_validations_minLength: (min: number) => `Must be at least ${min} characters`,
  public_forms_validations_maxLength: (max: number) => `Must be at most ${max} characters`,
};
