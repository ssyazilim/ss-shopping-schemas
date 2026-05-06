import { z } from 'zod';

// FE i18n key sözleşmesi — schema ve bileşen aynı kaynaktan okur
export const AuthValidationKeys = {
  email: {
    required: 'validation.auth.email.required',
    invalid: 'validation.auth.email.invalid',
  },
  password: {
    required: 'validation.auth.password.required',
    min: 'validation.auth.password.min',
    max: 'validation.auth.password.max',
    uppercase: 'validation.auth.password.uppercase',
    number: 'validation.auth.password.number',
  },
  passwordConfirm: {
    required: 'validation.auth.passwordConfirm.required',
    mismatch: 'validation.auth.passwordConfirm.mismatch',
  },
} as const;

const emailField = z
  .string({ message: AuthValidationKeys.email.required })
  .min(1, AuthValidationKeys.email.required)
  .email(AuthValidationKeys.email.invalid);

const passwordField = z
  .string({ message: AuthValidationKeys.password.required })
  .min(8, AuthValidationKeys.password.min)
  .max(64, AuthValidationKeys.password.max);

export const LoginFormSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const RegisterFormSchema = z
  .object({
    email: emailField,
    password: passwordField
      .regex(/[A-Z]/, AuthValidationKeys.password.uppercase)
      .regex(/[0-9]/, AuthValidationKeys.password.number),
    passwordConfirm: z
      .string({ message: AuthValidationKeys.passwordConfirm.required })
      .min(1, AuthValidationKeys.passwordConfirm.required),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: AuthValidationKeys.passwordConfirm.mismatch,
    path: ['passwordConfirm'],
  });
