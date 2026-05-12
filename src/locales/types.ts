export type ILocale = 'tr' | 'en' | 'ru' | 'ar' | 'fa';

export type INotifications = {
  public_forms_validations_required: string;
  public_forms_validations_email: string;
  public_forms_validations_sameAs: string;
  public_forms_validations_phoneNumber: string;
  public_forms_validations_cardNumber: string;
  public_forms_validations_url: string;
  public_forms_validations_minLength: (min: number) => string;
  public_forms_validations_maxLength: (max: number) => string;
};
