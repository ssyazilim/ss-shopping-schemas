import type { AuthMessages } from './types.js';

export const auth: AuthMessages = {
  emailRequired: 'البريد الإلكتروني مطلوب',
  emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
  passwordRequired: 'كلمة المرور مطلوبة',
  passwordMin: 'يجب أن تكون كلمة المرور 8 أحرف على الأقل',
  passwordMax: 'يجب أن تكون كلمة المرور 64 حرفاً على الأكثر',
  passwordUppercase: 'يجب أن تحتوي على حرف كبير واحد على الأقل',
  passwordNumber: 'يجب أن تحتوي على رقم واحد على الأقل',
  passwordConfirmRequired: 'تأكيد كلمة المرور مطلوب',
  passwordConfirmMismatch: 'كلمتا المرور غير متطابقتين',
};
