import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'Bu alan gerekli!',
  public_forms_validations_mustNumber: 'Düzgün sayı gir!',
  public_forms_validations_mustNumberPositive: 'Pozitif sayı gir!',
  public_forms_validations_mustNumberInteger: 'Tamsayı gir!',
  public_forms_validations_email: 'Geçerli bir e-posta adresi gir!',
  public_forms_validations_sameAs: 'Şifrelerin birbiri ile eşleşmiyor!',
  public_forms_validations_phoneNumber: 'Geçerli bir telefon numarası gir!',
  public_forms_validations_cardNumber: 'Geçerli bir kart numarası gir!',
  public_forms_validations_url: 'Geçerli bir URL gir!',
  public_forms_validations_minLength: (min: number) => `En az ${min} karakter`,
  public_forms_validations_maxLength: (max: number) => `En fazla ${max} karakter`,
};
