export const validations = {
  public_forms_validations_required: 'هذا الحقل مطلوب!',
  public_forms_validations_email: 'يرجى إدخال بريد إلكتروني صالح!',
  public_forms_validations_sameAs: 'كلمات المرور غير متطابقة!',
};

export const minlength = (min: number) => `يجب أن يحتوي على ${min} أحرف على الأقل`;
export const maxlength = (max: number) => `يجب ألا يزيد عن ${max} أحرف`;
