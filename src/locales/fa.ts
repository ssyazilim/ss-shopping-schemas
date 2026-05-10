import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'این فیلد الزامی است!',
  public_forms_validations_email: 'لطفاً یک ایمیل معتبر وارد کنید!',
  public_forms_validations_sameAs: 'رمزهای عبور شما مطابقت ندارند!',
  public_forms_validations_minLength: (min: number) => `باید حداقل ${min} کاراکتر باشد`,
  public_forms_validations_maxLength: (max: number) => `باید حداکثر ${max} کاراکتر باشد`,
};
