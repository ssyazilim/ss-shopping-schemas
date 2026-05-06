import type { AuthMessages } from './types.js';

export const auth: AuthMessages = {
  emailRequired: 'E-posta zorunludur',
  emailInvalid: 'Geçerli bir e-posta adresi giriniz',
  passwordRequired: 'Şifre zorunludur',
  passwordMin: 'Şifre en az 8 karakter olmalıdır',
  passwordMax: 'Şifre en fazla 64 karakter olabilir',
  passwordUppercase: 'En az bir büyük harf içermelidir',
  passwordNumber: 'En az bir rakam içermelidir',
  passwordConfirmRequired: 'Şifre tekrarı zorunludur',
  passwordConfirmMismatch: 'Şifreler eşleşmiyor',
};
