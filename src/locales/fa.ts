import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'این فیلد الزامی است!',
  public_forms_validations_mustNumber: 'لطفاً یک عدد معتبر وارد کنید!',
  public_forms_validations_mustNumberPositive: 'لطفاً یک عدد مثبت وارد کنید!',
  public_forms_validations_mustNumberInteger: 'لطفاً یک عدد صحیح وارد کنید!',
  public_forms_validations_email: 'لطفاً یک ایمیل معتبر وارد کنید!',
  public_forms_validations_sameAs: 'رمزهای عبور با هم مطابقت ندارند!',
  public_forms_validations_phoneNumber: 'لطفاً یک شماره تلفن معتبر وارد کنید!',
  public_forms_validations_cardNumber: 'لطفاً یک شماره کارت معتبر وارد کنید!',
  public_forms_validations_url: 'لطفاً یک آدرس URL معتبر وارد کنید!',
  public_forms_validations_minLength: (min: number) => `حداقل ${min} کاراکتر`,
  public_forms_validations_maxLength: (max: number) => `حداکثر ${max} کاراکتر`,
};
