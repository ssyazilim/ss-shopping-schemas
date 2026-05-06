import type { AuthMessages } from './types.js';

export const auth: AuthMessages = {
  emailRequired: 'Email is required',
  emailInvalid: 'Please enter a valid email address',
  passwordRequired: 'Password is required',
  passwordMin: 'Password must be at least 8 characters',
  passwordMax: 'Password must be at most 64 characters',
  passwordUppercase: 'Must contain at least one uppercase letter',
  passwordNumber: 'Must contain at least one number',
  passwordConfirmRequired: 'Password confirmation is required',
  passwordConfirmMismatch: 'Passwords do not match',
};
