import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'Bu alan gereklidir!',
  public_forms_validations_email: 'Geçerli bir e-posta adresi giriniz!',
  public_forms_validations_sameAs: 'Şifreleriniz birbiri ile eşleşmiyor!',
  public_forms_validations_phoneNumber: 'Geçerli bir telefon numarası giriniz!',
  public_forms_validations_minLength: (min: number) => `En az ${min} karakter olmalıdır`,
  public_forms_validations_maxLength: (max: number) => `En fazla ${max} karakter olabilir`,
};
