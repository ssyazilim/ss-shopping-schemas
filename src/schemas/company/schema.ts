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
} from './validation';

export const CompanyAddressSchema = registry.register('CompanyAddress', ADD_COMPANY_ADDRESS());
export const CompanySocialMediaSchema = registry.register(
  'CompanySocialMedia',
  ADD_COMPANY_SOCIAL_MEDIA(),
);
export const CompanyPaymentSchema = registry.register('CompanyPayment', ADD_COMPANY_PAYMENT());
const CompanyPropertiesHomePageSchema = registry.register(
  'CompanyPropertiesHomePage',
  ADD_COMPANY_PROPERTIES_HOME_PAGE(),
);
const CompanyPropertiesPaymentSettingsSchema = registry.register(
  'CompanyPropertiesPaymentSettings',
  ADD_COMPANY_PROPERTIES_PAYMENT_SETTINGS(),
);
const CompanyPropertiesProductSettingsSchema = registry.register(
  'CompanyPropertiesProductSettings',
  ADD_COMPANY_PROPERTIES_PRODUCT_SETTINGS(),
);
const CompanyPropertiesOrderSettingsSchema = registry.register(
  'CompanyPropertiesOrderSettings',
  ADD_COMPANY_PROPERTIES_ORDER_SETTINGS(),
);
const CompanyPropertiesSchema = registry.register('CompanyProperties', ADD_COMPANY_PROPERTIES());
const CompanyMailOptionsSchema = registry.register(
  'CompanyMailOptions',
  ADD_COMPANY_MAIL_OPTIONS(),
);
const CompanyShippingOptionsSchema = registry.register(
  'CompanyShippingOptions',
  ADD_COMPANY_SHIPPING_OPTIONS(),
);

export const AddCompanySchema = registry.register('AddCompany', ADD_COMPANY());
export const UpdateCompanySchema = registry.register('UpdateCompany', UPDATE_COMPANY());

void CompanyAddressSchema;
void CompanySocialMediaSchema;
void CompanyPropertiesHomePageSchema;
void CompanyPropertiesPaymentSettingsSchema;
void CompanyPropertiesProductSettingsSchema;
void CompanyPropertiesOrderSettingsSchema;
void CompanyPropertiesSchema;
void CompanyMailOptionsSchema;
void CompanyShippingOptionsSchema;
