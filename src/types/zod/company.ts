import { z } from 'zod';
import { getDefaultsForSchema } from 'zod-defaults';
import {
  ADD_COMPANY,
  COMPANY_ADDRESS,
  COMPANY_COMMUNICATION_OPTIONS,
  COMPANY_MAIL_OPTIONS,
  COMPANY_PAYMENT,
  COMPANY_PROPERTIES,
  COMPANY_PROPERTIES_HOME_PAGE,
  COMPANY_PROPERTIES_ORDER_SETTINGS,
  COMPANY_PROPERTIES_PAYMENT_SETTINGS,
  COMPANY_PROPERTIES_PRODUCT_SETTINGS,
  COMPANY_SHIPPING_OPTIONS,
  COMPANY_SOCIAL_MEDIA,
} from '../../schemas';
import { MongoSchema } from './common';

/*************************
 *       TYPES           *
 *************************/
export type ICompanyAddress = z.infer<typeof CompanyAddressSchema>;
export const CompanyAddressSchema = COMPANY_ADDRESS();

export type ISocialMedia = z.infer<typeof SocialMediaSchema>;
export const SocialMediaSchema = COMPANY_SOCIAL_MEDIA();

export type IPaymentMethods = z.infer<typeof PaymentMethodsSchema>;
export const PaymentMethodsSchema = COMPANY_PAYMENT().extend(MongoSchema.shape);

export type IHomePage = z.infer<typeof HomePageSchema>;
export const HomePageSchema = COMPANY_PROPERTIES_HOME_PAGE;

export type IPaymentSettings = z.infer<typeof PaymentSettingsSchema>;
export const PaymentSettingsSchema = COMPANY_PROPERTIES_PAYMENT_SETTINGS;

export type IProductSettings = z.infer<typeof ProductSettingsSchema>;
export const ProductSettingsSchema = COMPANY_PROPERTIES_PRODUCT_SETTINGS;

export type IOrderSettings = z.infer<typeof OrderSettingsSchema>;
export const OrderSettingsSchema = COMPANY_PROPERTIES_ORDER_SETTINGS;

export type IProperties = z.infer<typeof PropertiesSchema>;
export const PropertiesSchema = COMPANY_PROPERTIES;

export type IMailOptions = z.infer<typeof MailOptionsSchema>;
export const MailOptionsSchema = COMPANY_MAIL_OPTIONS;

export type ICommunicationOptions = z.infer<typeof CommunicationOptionsSchema>;
export const CommunicationOptionsSchema = COMPANY_COMMUNICATION_OPTIONS;

export type IShippingOptions = z.infer<typeof ShippingOptionsSchema>;
export const ShippingOptionsSchema = COMPANY_SHIPPING_OPTIONS;

export type ICompany = z.infer<typeof CompanySchema>;
export const CompanySchema = ADD_COMPANY().extend(MongoSchema.shape);

export type ISiteData = z.infer<typeof SiteDataSchema>;
export const SiteDataSchema = z.object({
  name: z.string(),
  url: z.string(),
  favicon: z.string(),
  logo: z.string(),
  description: z.string(),
});

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_COMPANY: ICompany = getDefaultsForSchema(CompanySchema);
