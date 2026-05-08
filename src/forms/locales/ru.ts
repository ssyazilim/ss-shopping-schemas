export const validations = {
  public_forms_validations_required: 'Это поле обязательно!',
  public_forms_validations_email: 'Введите корректный адрес электронной почты!',
  public_forms_validations_sameAs: 'Ваши пароли не совпадают!',
};

export const minlength = (min: number) => `Минимум ${min} символов`;
export const maxlength = (max: number) => `Максимум ${max} символов`;
