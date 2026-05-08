export const validations = {
  public_forms_validations_required: 'This field is required!',
  public_forms_validations_email: 'Please enter a valid email address!',
  public_forms_validations_sameAs: 'Your passwords do not match!',
};

export const minlength = (min: number) => `Must be at least ${min} characters`;
export const maxlength = (max: number) => `Must be at most ${max} characters`;
