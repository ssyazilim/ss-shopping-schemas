import { registry } from '../registry';
import {
  ADD_COMPANY,
  COMPANY_ADDRESS,
  COMPANY_SOCIAL_MEDIA,
  COMPANY_PAYMENT,
  COMPANY_PROPERTIES_HOME_PAGE,
  COMPANY_PROPERTIES_PAYMENT_SETTINGS,
  COMPANY_PROPERTIES_PRODUCT_SETTINGS,
  COMPANY_PROPERTIES_ORDER_SETTINGS,
  COMPANY_PROPERTIES,
  COMPANY_MAIL_OPTIONS,
  COMPANY_SHIPPING_OPTIONS,
} from './validation';

export const CompanyAddressSchema = registry.register('CompanyAddress', COMPANY_ADDRESS());
export const CompanySocialMediaSchema = registry.register('CompanySocialMedia', COMPANY_SOCIAL_MEDIA());
export const CompanyPaymentSchema = registry.register('CompanyPayment', COMPANY_PAYMENT());
const CompanyPropertiesHomePageSchema = registry.register(
  'CompanyPropertiesHomePage',
  COMPANY_PROPERTIES_HOME_PAGE,
);
const CompanyPropertiesPaymentSettingsSchema = registry.register(
  'CompanyPropertiesPaymentSettings',
  COMPANY_PROPERTIES_PAYMENT_SETTINGS,
);
const CompanyPropertiesProductSettingsSchema = registry.register(
  'CompanyPropertiesProductSettings',
  COMPANY_PROPERTIES_PRODUCT_SETTINGS,
);
const CompanyPropertiesOrderSettingsSchema = registry.register(
  'CompanyPropertiesOrderSettings',
  COMPANY_PROPERTIES_ORDER_SETTINGS,
);
const CompanyPropertiesSchema = registry.register('CompanyProperties', COMPANY_PROPERTIES);
const CompanyMailOptionsSchema = registry.register('CompanyMailOptions', COMPANY_MAIL_OPTIONS);
const CompanyShippingOptionsSchema = registry.register(
  'CompanyShippingOptions',
  COMPANY_SHIPPING_OPTIONS,
);

export const AddCompanySchema = registry.register('AddCompany', ADD_COMPANY());
export const UpdateCompanySchema = registry.register('UpdateCompany', AddCompanySchema.partial());

void CompanyAddressSchema;
void CompanySocialMediaSchema;
void CompanyPropertiesHomePageSchema;
void CompanyPropertiesPaymentSettingsSchema;
void CompanyPropertiesProductSettingsSchema;
void CompanyPropertiesOrderSettingsSchema;
void CompanyPropertiesSchema;
void CompanyMailOptionsSchema;
void CompanyShippingOptionsSchema;
