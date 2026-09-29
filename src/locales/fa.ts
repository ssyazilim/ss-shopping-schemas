import type { INotifications } from './types';

export const notifications: INotifications = {
  public_forms_validations_required: 'این فیلد الزامی است!',
  public_forms_validations_mustNumber: 'لطفاً یک عدد معتبر وارد کنید!',
  public_forms_validations_mustNumberPositive: 'لطفاً یک عدد مثبت وارد کنید!',
  public_forms_validations_mustNumberInteger: 'لطفاً یک عدد صحیح وارد کنید!',
  public_forms_validations_email: 'لطفاً یک ایمیل معتبر وارد کنید!',
  public_forms_validations_sameAs: 'رمزهای عبور با هم مطابقت ندارند!',
  public_forms_validations_phoneNumber: 'لطفاً یک شماره تلفن معتبر وارد کنید!',
  public_forms_validations_cardNumber: 'لطفاً یک شماره کارت معتبر وارد کنید!',
  public_forms_validations_url: 'لطفاً یک آدرس URL معتبر وارد کنید!',
  public_forms_validations_noSpace: 'وارد کردن فاصله مجاز نیست!',
  public_forms_validations_routeKey:
    'از حروف کوچک انگلیسی (a-z) و اعداد استفاده کنید و بخش‌ها را با یک خط تیره جدا کنید (مانند about-us)!',
  public_forms_validations_translationKey:
    'با یک حرف کوچک انگلیسی (a-z) شروع کنید، سپس فقط از حروف انگلیسی (a-z, A-Z)، اعداد یا زیرخط استفاده کنید (مانند page_about_title)!',
  public_forms_validations_pagePath:
    'فقط از حروف انگلیسی (a-z, A-Z)، اعداد، نقطه، زیرخط، خط تیره یا ممیز (/) استفاده کنید و مسیر را با .md پایان دهید (مانند pages/about-us.md)!',
  public_forms_validations_minLength: (min: number) => `حداقل! ${min} کاراکتر`,
  public_forms_validations_maxLength: (max: number) => `حداکثر! ${max} کاراکتر`,
  public_forms_validations_minItems: (min: number) => `حداقل! ${min} مورد`,
  public_forms_validations_maxItems: (max: number) => `حداکثر! ${max} مورد`,
  public_forms_validations_minPriceGreaterThanMax: 'مقدار حداقل باید کمتر از مقدار حداکثر باشد!',
  public_forms_validations_localeMismatch: 'کد زبان، محلی و نام نمایشی با یکدیگر مطابقت ندارند!',
};
