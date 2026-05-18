import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'Это поле обязательно!',
  public_forms_validations_mustNumber: 'Введите корректное число!',
  public_forms_validations_mustNumberPositive: 'Введите положительное число!',
  public_forms_validations_mustNumberInteger: 'Ввежите целое число!',
  public_forms_validations_email: 'Введите корректный адрес электронной почты!',
  public_forms_validations_sameAs: 'Пароли не совпадают!',
  public_forms_validations_phoneNumber: 'Введите корректный номер телефона!',
  public_forms_validations_cardNumber: 'Введите корректный номер карты!',
  public_forms_validations_url: 'Введите корректный URL!',
  public_forms_validations_minLength: (min: number) => `Минимум ${min} символов`,
  public_forms_validations_maxLength: (max: number) => `Максимум ${max} символов`,
};
