import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'This field is required!',
  public_forms_validations_mustNumber: 'Please enter a valid number!',
  public_forms_validations_mustNumberPositive: 'Please enter a positive number!',
  public_forms_validations_mustNumberInteger: 'Please enter an integer!',
  public_forms_validations_email: 'Please enter a valid email address!',
  public_forms_validations_sameAs: 'Passwords do not match!',
  public_forms_validations_phoneNumber: 'Please enter a valid phone number!',
  public_forms_validations_cardNumber: 'Please enter a valid card number!',
  public_forms_validations_url: 'Please enter a valid URL!',
  public_forms_validations_noSpace: 'Spaces are not allowed!',
  public_forms_validations_routeKey:
    'Use lowercase letters (a-z) and digits, separated by single hyphens (e.g. about-us)!',
  public_forms_validations_translationKey:
    'Start with a lowercase letter (a-z), then use only letters (a-z, A-Z), digits or underscores (e.g. page_about_title)!',
  public_forms_validations_pagePath:
    'Use only letters (a-z, A-Z), digits, dots, underscores, hyphens or forward slashes, and end with .md (e.g. pages/about-us.md)!',
  public_forms_validations_minLength: (min: number) => `Must be at least ${min} characters!`,
  public_forms_validations_maxLength: (max: number) => `Must be at most ${max} characters!`,
  public_forms_validations_minItems: (min: number) => `Must have at least ${min} items!`,
  public_forms_validations_maxItems: (max: number) => `Must have at most ${max} items!`,
  public_forms_validations_minPriceGreaterThanMax:
    'The minimum value must be less than the maximum value!',
  public_forms_validations_localeMismatch:
    'The language code, locale and display name do not match each other!',
};
