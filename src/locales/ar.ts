import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'هذا الحقل مطلوب!',
  public_forms_validations_mustNumber: 'يرجى إدخال رقم صحيح!',
  public_forms_validations_mustNumberPositive: 'يرجى إدخال رقم موجب!',
  public_forms_validations_mustNumberInteger: 'يرجى إدخال رقم صحيح!',
  public_forms_validations_email: 'يرجى إدخال بريد إلكتروني صحيح!',
  public_forms_validations_sameAs: 'كلمتا المرور غير متطابقتين!',
  public_forms_validations_phoneNumber: 'يرجى إدخال رقم هاتف صحيح!',
  public_forms_validations_cardNumber: 'يرجى إدخال رقم بطاقة صحيح!',
  public_forms_validations_url: 'يرجى إدخال رابط URL صحيح!',
  public_forms_validations_minLength: (min: number) => `الحد الأدنى !${min} أحرف`,
  public_forms_validations_maxLength: (max: number) => `الحد الأقصى !${max} أحرف`,
  public_forms_validations_minPriceGreaterThanMax:
    'يجب أن تكون القيمة الدنيا أقل من القيمة القصوى!',
};
