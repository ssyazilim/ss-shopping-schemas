export const validations = {
  public_forms_validations_required: 'Bu alan gereklidir!',
  public_forms_validations_email: 'Geçerli bir e-posta adresi giriniz!',
  public_forms_validations_sameAs: 'Şifreleriniz birbiri ile eşleşmiyor!',
};

export const minlength = (min: number) => `En az ${min} karakter olmalıdır`;
export const maxlength = (max: number) => `En fazla ${max} karakter olabilir`;