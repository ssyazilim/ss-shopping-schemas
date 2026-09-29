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
  public_forms_validations_noSpace: 'Boşluk karakteri girilemez!',
  public_forms_validations_routeKey:
    'Küçük harfler (a-z) ve rakamlar kullanın; bölümleri tek tire ile ayırın (ör. about-us)!',
  public_forms_validations_translationKey:
    'Küçük harfle (a-z) başlayın; ardından yalnızca harf (a-z, A-Z), rakam veya alt çizgi kullanın (ör. page_about_title)!',
  public_forms_validations_pagePath:
    'Yalnızca harf (a-z, A-Z), rakam, nokta, alt çizgi, tire veya eğik çizgi (/) kullanın ve .md ile bitirin (ör. pages/about-us.md)!',
  public_forms_validations_minLength: (min: number) => `En az ${min} karakter!`,
  public_forms_validations_maxLength: (max: number) => `En fazla ${max} karakter!`,
  public_forms_validations_minItems: (min: number) => `En az ${min} kayıt!`,
  public_forms_validations_maxItems: (max: number) => `En fazla ${max} kayıt!`,
  public_forms_validations_minPriceGreaterThanMax: 'Minimum değer maksimum değerden küçük olmalı!',
  public_forms_validations_localeMismatch:
    'Dil kodu, yerel adı ve görünen adı birbiriyle uyumlu değil!',
};
