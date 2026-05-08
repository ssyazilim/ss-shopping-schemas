import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'Это поле обязательно!',
  public_forms_validations_email: 'Пожалуйста, введите корректный email адрес!',
  public_forms_validations_sameAs: 'Ваши пароли не совпадают!',
  public_forms_validations_minLength: (min: number) => `Должно быть не менее ${min} символов`,
  public_forms_validations_maxLength: (max: number) => `Должно быть не более ${max} символов`,
};
