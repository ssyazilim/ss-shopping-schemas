import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'هذا الحقل مطلوب!',
  public_forms_validations_mustNumber: 'يرجى إدخال رقم صحيح!',
  public_forms_validations_mustNumberPositive: 'يرجى إدخال رقم موجب!',
  public_forms_validations_mustNumberInteger: 'يرجى إدخال رقم صحيح!',
  public_forms_validations_email: 'يرجى إدخال بريد إلكتروني صحيح!',
  public_forms_validations_sameAs: 'كلمتا المرور غير متطابقتين!',
  public_forms_validations_phoneNumber: 'يرجى إدخال رقم هاتف صحيح!',
  public_forms_validations_cardNumber: 'يرجى إدخال رقم بطاقة صحيح!',
  public_forms_validations_url: 'يرجى إدخال رابط URL صحيح!',
  public_forms_validations_noSpace: 'لا يُسمح بإدخال مسافات!',
  public_forms_validations_routeKey:
    'استخدم الأحرف الإنجليزية الصغيرة (a-z) والأرقام، وافصل الأجزاء بشرطة واحدة (مثل about-us)!',
  public_forms_validations_translationKey:
    'ابدأ بحرف إنجليزي صغير (a-z)، ثم استخدم الأحرف الإنجليزية (a-z, A-Z) أو الأرقام أو الشرطات السفلية فقط (مثل page_about_title)!',
  public_forms_validations_pagePath:
    'استخدم فقط الأحرف الإنجليزية (a-z, A-Z) أو الأرقام أو النقاط أو الشرطات السفلية أو الشرطات أو الشرطات المائلة (/)، وأنهِ المسار بـ .md (مثل pages/about-us.md)!',
  public_forms_validations_minLength: (min: number) => `الحد الأدنى !${min} أحرف`,
  public_forms_validations_maxLength: (max: number) => `الحد الأقصى !${max} أحرف`,
  public_forms_validations_minItems: (min: number) => `الحد الأدنى !${min} عناصر`,
  public_forms_validations_maxItems: (max: number) => `الحد الأقصى !${max} عناصر`,
  public_forms_validations_minPriceGreaterThanMax:
    'يجب أن تكون القيمة الدنيا أقل من القيمة القصوى!',
  public_forms_validations_localeMismatch: 'رمز اللغة والمحلية والاسم المعروض غير متطابقة!',
};
