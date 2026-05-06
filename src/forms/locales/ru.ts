import type { AuthMessages } from './types.js';

export const auth: AuthMessages = {
  emailRequired: 'Электронная почта обязательна',
  emailInvalid: 'Введите действительный адрес электронной почты',
  passwordRequired: 'Пароль обязателен',
  passwordMin: 'Пароль должен содержать не менее 8 символов',
  passwordMax: 'Пароль должен содержать не более 64 символов',
  passwordUppercase: 'Должна быть хотя бы одна заглавная буква',
  passwordNumber: 'Должна быть хотя бы одна цифра',
  passwordConfirmRequired: 'Подтверждение пароля обязательно',
  passwordConfirmMismatch: 'Пароли не совпадают',
};
