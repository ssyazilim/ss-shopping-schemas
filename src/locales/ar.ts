import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'هذا الحقل مطلوب!',
  public_forms_validations_email: 'يرجى إدخال بريد إلكتروني صالح!',
  public_forms_validations_sameAs: 'كلمات المرور غير متطابقة!',
  public_forms_validations_phoneNumber: 'يرجى إدخال رقم هاتف صالح!',
  public_forms_validations_minLength: (min: number) => `يجب أن يحتوي على ${min} أحرف على الأقل`,
  public_forms_validations_maxLength: (max: number) => `يجب ألا يزيد عن ${max} أحرف`,
};
