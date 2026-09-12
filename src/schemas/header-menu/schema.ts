import { z } from 'zod';
import { ADD_HEADER_MENU_ITEM, ADD_HEADER_MENU_SUB_ITEM, UPDATE_HEADER_MENU } from './validation';
import { MongoSchema } from '../../types/common';

export type ILocalizedText = z.infer<typeof LocalizedTextSchema>;
export const LocalizedTextSchema = z.object({
  tr: z.string(),
  en: z.string(),
  ru: z.string(),
  ar: z.string(),
  fa: z.string(),
});

export type IHeaderMenuSubItem = z.infer<typeof HeaderMenuSubItemSchema>;
export const HeaderMenuSubItemSchema = ADD_HEADER_MENU_SUB_ITEM();

export type IHeaderMenuItem = z.infer<typeof HeaderMenuItemSchema>;
export const HeaderMenuItemSchema = ADD_HEADER_MENU_ITEM();

export type IHeaderMenu = z.infer<typeof HeaderMenuSchema>;
export const HeaderMenuSchema = UPDATE_HEADER_MENU()
  .extend(MongoSchema.shape)
  .meta({ id: 'HeaderMenu' });

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_HEADER_MENU: Pick<IHeaderMenu, 'items'> = {
  items: [
    {
      label: {
        tr: 'Kurumsal',
        en: 'Corporate',
        ru: 'Корпоративный',
        ar: 'شركات',
        fa: 'شرکتی',
      },
      type: 'popover',
      href: '',
      order: 0,
      disabled: false,
      showNewsFeed: false,
      subItems: [
        {
          label: {
            tr: 'Hakkımızda',
            en: 'About Us',
            ru: 'О нас',
            ar: 'من نحن',
            fa: 'درباره ما',
          },
          description: {
            tr: 'Şirketimizin misyonunu, vizyonunu, değerlerini, tarihçesini ve kurucuları hakkında bilgiler içerir',
            en: "It contains information about our company's mission, vision, values, history, and founders",
            ru: 'Содержит информацию о миссии, видении, ценностях, истории и основателях нашей компании',
            ar: 'يحتوي على معلومات حول مهمة شركتنا ورؤيتها وقيمها وتاريخها ومؤسسيها',
            fa: 'شامل اطلاعاتی در مورد ماموریت، چشم‌انداز، ارزش‌ها، تاریخچه و بنیان‌گذاران شرکت ماست',
          },
          href: 'public-corporate-about-us',
          order: 0,
          disabled: false,
        },
      ],
    },
    {
      label: {
        tr: 'Ürünler',
        en: 'Products',
        ru: 'Продукты',
        ar: 'المنتجات',
        fa: 'محصولات',
      },
      type: 'link',
      href: 'products',
      order: 1,
      disabled: false,
      showNewsFeed: false,
      subItems: [],
    },
    {
      label: {
        tr: 'İletişim',
        en: 'Contact',
        ru: 'Связаться',
        ar: 'اتصال',
        fa: 'تماس با من',
      },
      type: 'link',
      href: 'public-contact-simple',
      order: 2,
      disabled: false,
      showNewsFeed: false,
      subItems: [],
    },
    {
      label: {
        tr: 'Ekstra',
        en: 'More',
        ru: 'Еще',
        ar: 'المزيد',
        fa: 'بیشتر',
      },
      type: 'popover',
      href: '',
      order: 3,
      disabled: false,
      showNewsFeed: true,
      subItems: [
        {
          label: {
            tr: 'Yardım',
            en: 'Help Center',
            ru: 'Центр помощи',
            ar: 'مركز المساعدة',
            fa: 'مرکز راهنما',
          },
          description: {
            tr: 'İhtiyaç duyabileceğiniz veya merak ettiğiniz soruların cevabını bulabileceğiniz kullanışlı bir sayfa',
            en: 'A useful page where you can find answers to questions you may need or are curious about',
            ru: 'Полезная страница, где можно найти ответы на интересующие вопросы',
            ar: 'صفحة مفيدة حيث يمكنك العثور على إجابات للأسئلة التي قد تحتاجها أو تشعر بالفضول تجاهها',
            fa: 'یک صفحه مفید که در آن می‌توانید پاسخ سوالات مورد نیاز یا کنجکاوی خود را پیدا کنید',
          },
          href: 'public-faq',
          order: 0,
          disabled: false,
        },
        {
          label: {
            tr: 'Güvenlik',
            en: 'Security',
            ru: 'Безопасность',
            ar: 'الأمان',
            fa: 'امنیت',
          },
          description: {
            tr: 'Kullanıcı sözleşme ve güvenlik politikalarını bulabileceğiniz sayfa',
            en: 'The page where you can find user contracts and security policies',
            ru: 'Страница с пользовательскими договорами и политиками безопасности',
            ar: 'الصفحة التي يمكنك من خلالها العثور على عقود المستخدم وسياسات الأمان',
            fa: 'صفحه‌ای که می‌توانید قراردادهای کاربر و سیاست‌های امنیتی را در آن پیدا کنید',
          },
          href: 'public-agreements',
          order: 1,
          disabled: false,
        },
        {
          label: {
            tr: 'Kariyer',
            en: 'Career',
            ru: 'Карьера',
            ar: 'وظائف',
            fa: 'شغل',
          },
          description: {
            tr: 'Şirket bünyesindeki açık pozisyonlara başvuru yaparken kullanacağınız sayfa',
            en: 'The page you will use when applying for open positions within the company',
            ru: 'Страница для подачи заявок на открытые вакансии в компании',
            ar: 'الصفحة التي ستستخدمها عند التقديم للوظائف الشاغرة داخل الشركة',
            fa: 'صفحه‌ای که برای درخواست موقعیت‌های شغلی باز در شرکت استفاده خواهید کرد',
          },
          href: 'public-contact-career',
          order: 2,
          disabled: false,
        },
      ],
    },
  ],
};
