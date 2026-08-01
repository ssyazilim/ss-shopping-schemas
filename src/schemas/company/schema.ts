import { registry } from '../registry';
import {
  ADD_COMPANY,
  UPDATE_COMPANY,
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_SOCIAL_MEDIA,
  ADD_COMPANY_PAYMENT,
  ADD_COMPANY_PROPERTIES_HOME_PAGE,
  ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS,
  ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS,
  ADD_COMPANY_PROPERTIES_ORDER_SETTINGS,
  ADD_COMPANY_PROPERTIES,
  ADD_COMPANY_MAIL_OPTIONS,
  ADD_COMPANY_SHIPPING_OPTIONS,
  UPDATE_TAX,
} from './validation';

export const CompanyAddressSchema = registry.register('CompanyAddress', ADD_COMPANY_ADDRESS());
export const CompanySocialMediaSchema = registry.register(
  'CompanySocialMedia',
  ADD_COMPANY_SOCIAL_MEDIA(),
);
export const CompanyPaymentSchema = registry.register('CompanyPayment', ADD_COMPANY_PAYMENT());
export const CompanyPropertiesHomePageSchema = registry.register(
  'CompanyPropertiesHomePage',
  ADD_COMPANY_PROPERTIES_HOME_PAGE(),
);
export const CompanyPropertiesPaymentSettingsSchema = registry.register(
  'CompanyPropertiesPaymentSettings',
  ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS(),
);
export const CompanyPropertiesProductSettingsSchema = registry.register(
  'CompanyPropertiesProductSettings',
  ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS(),
);
export const CompanyPropertiesOrderSettingsSchema = registry.register(
  'CompanyPropertiesOrderSettings',
  ADD_COMPANY_PROPERTIES_ORDER_SETTINGS(),
);
export const CompanyPropertiesSchema = registry.register('CompanyProperties', ADD_COMPANY_PROPERTIES());
export const CompanyMailOptionsSchema = registry.register(
  'CompanyMailOptions',
  ADD_COMPANY_MAIL_OPTIONS(),
);
export const CompanyShippingOptionsSchema = registry.register(
  'CompanyShippingOptions',
  ADD_COMPANY_SHIPPING_OPTIONS(),
);

export const UpdateTaxSchema = registry.register('UpdateTax', UPDATE_TAX());

export const AddCompanySchema = registry.register('AddCompany', ADD_COMPANY());
export const UpdateCompanySchema = registry.register('UpdateCompany', UPDATE_COMPANY());
