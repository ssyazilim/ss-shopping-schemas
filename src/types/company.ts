import { z } from 'zod';
import { getDefaultsForSchema } from '../utils/getDefaultsForSchema';
import {
  ADD_COMPANY,
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_COMMUNICATION_OPTIONS,
  ADD_COMPANY_MAIL_OPTIONS,
  ADD_COMPANY_PAYMENT,
  ADD_COMPANY_PROPERTIES,
  ADD_COMPANY_PROPERTIES_HOME_PAGE,
  ADD_COMPANY_PROPERTIES_ORDER_SETTINGS,
  ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS,
  ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS,
  ADD_COMPANY_SHIPPING_OPTIONS,
  ADD_COMPANY_SOCIAL_MEDIA,
} from '../schemas';
import { MongoSchema } from './common';

export type ICompanyAddress = z.infer<typeof CompanyAddressSchema>;
export const CompanyAddressSchema = ADD_COMPANY_ADDRESS();

export type ISocialMedia = z.infer<typeof SocialMediaSchema>;
export const SocialMediaSchema = ADD_COMPANY_SOCIAL_MEDIA();

export type IPaymentMethods = z.infer<typeof PaymentMethodsSchema>;
export const PaymentMethodsSchema = ADD_COMPANY_PAYMENT().extend(MongoSchema.shape);

export type IHomePage = z.infer<typeof HomePageSchema>;
export const HomePageSchema = ADD_COMPANY_PROPERTIES_HOME_PAGE();

export type IPaymentSettings = z.infer<typeof PaymentSettingsSchema>;
export const PaymentSettingsSchema = ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS();

export type IProductSettings = z.infer<typeof ProductSettingsSchema>;
export const ProductSettingsSchema = ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS();

export type IOrderSettings = z.infer<typeof OrderSettingsSchema>;
export const OrderSettingsSchema = ADD_COMPANY_PROPERTIES_ORDER_SETTINGS();

export type IProperties = z.infer<typeof PropertiesSchema>;
export const PropertiesSchema = ADD_COMPANY_PROPERTIES();

export type IMailOptions = z.infer<typeof MailOptionsSchema>;
export const MailOptionsSchema = ADD_COMPANY_MAIL_OPTIONS();

export type ICommunicationOptions = z.infer<typeof CommunicationOptionsSchema>;
export const CommunicationOptionsSchema = ADD_COMPANY_COMMUNICATION_OPTIONS();

export type IShippingOptions = z.infer<typeof ShippingOptionsSchema>;
export const ShippingOptionsSchema = ADD_COMPANY_SHIPPING_OPTIONS();

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
