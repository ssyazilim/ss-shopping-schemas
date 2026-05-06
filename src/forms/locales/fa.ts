import type { AuthMessages } from './types.js';

export const auth: AuthMessages = {
  emailRequired: 'ایمیل الزامی است',
  emailInvalid: 'لطفاً یک آدرس ایمیل معتبر وارد کنید',
  passwordRequired: 'رمز عبور الزامی است',
  passwordMin: 'رمز عبور باید حداقل ۸ کاراکتر باشد',
  passwordMax: 'رمز عبور باید حداکثر ۶۴ کاراکتر باشد',
  passwordUppercase: 'باید حداقل یک حرف بزرگ داشته باشد',
  passwordNumber: 'باید حداقل یک عدد داشته باشد',
  passwordConfirmRequired: 'تأیید رمز عبور الزامی است',
  passwordConfirmMismatch: 'رمزهای عبور مطابقت ندارند',
};
