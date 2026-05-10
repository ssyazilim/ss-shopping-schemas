import { z } from 'zod';
import { registry } from '../registry';

const CompanyAddressSchema = registry.register(
  'CompanyAddress',
  z.object({
    isCompany: z.boolean().meta({ examples: [false] }),
    companyName: z
      .string()
      .optional()
      .meta({ examples: ['Varyant Restaurant'] }),
    name: z
      .string()
      .optional()
      .meta({ examples: ['Halil'] }),
    surname: z
      .string()
      .optional()
      .meta({ examples: ['Gür'] }),
    taxOffice: z.string().optional(),
    taxNumber: z.string().optional(),
    identityNumber: z.string().optional(),
    phoneNumber: z.string().meta({ examples: ['+905446627836'] }),
    email: z.email().meta({ examples: ['varyantrestaurant@hotmail.com'] }),
    country: z.string().meta({ examples: ['Turkey'] }),
    city: z.string().meta({ examples: ['Antalya'] }),
    district: z.string().meta({ examples: ['Muratpasa'] }),
    zipCode: z
      .string()
      .optional()
      .meta({ examples: ['07030'] }),
    line: z.string().meta({ examples: ['Bahçelievler Mahallesi Atatürk Parkı 25/21'] }),
  }),
);

const CompanySocialMediaSchema = registry.register(
  'CompanySocialMedia',
  z.object({
    name: z.string().meta({ examples: ['Facebook'] }),
    link: z.string().meta({ examples: ['https://www.facebook.com'] }),
    icon: z.string(),
  }),
);

const CompanyPaymentSchema = registry.register(
  'CompanyPayment',
  z.object({
    status: z.string(),
    content: z.string(),
  }),
);

const CompanyPropertiesHomePageSchema = registry.register(
  'CompanyPropertiesHomePage',
  z.object({
    category: z.boolean(),
    categoryPreview: z.boolean(),
    cta: z.boolean(),
    feature: z.boolean(),
    hero: z.boolean(),
    logoCloud: z.boolean(),
    newsLetter: z.boolean(),
    slider: z.boolean(),
    stat: z.boolean(),
    teamSection: z.boolean(),
    testimonial: z.boolean().optional(),
  }),
);

const CompanyPropertiesPaymentSettingsSchema = registry.register(
  'CompanyPropertiesPaymentSettings',
  z.object({
    cashDiscount: z.string().meta({ examples: ['0'] }),
    doorToDoor: z.object({
      isEnabled: z.boolean(),
      minValue: z.number(),
      maxValue: z.number(),
    }),
  }),
);

const CompanyPropertiesProductSettingsSchema = registry.register(
  'CompanyPropertiesProductSettings',
  z.object({
    callMe: z.boolean(),
    addFavorites: z.boolean(),
    notifyWhenPriceDrops: z.boolean(),
    notifyWhenProductBackInStock: z.boolean(),
    hideNoStockProducts: z.boolean(),
    hideReturnPeriod: z.boolean(),
    selectedProductListing: z.string(),
    taxAmount: z.number().meta({ examples: [20] }),
    showTaxAmount: z.boolean(),
  }),
);

const CompanyPropertiesOrderSettingsSchema = registry.register(
  'CompanyPropertiesOrderSettings',
  z.object({
    orderPrefix: z.boolean(),
    orderCanDelete: z.boolean(),
  }),
);

const CompanyPropertiesSchema = registry.register(
  'CompanyProperties',
  z.object({
    paymentMethod: z.string().meta({ examples: ['cash'] }),
    liveChatMethod: z.string().meta({ examples: ['none'] }),
    homePage: CompanyPropertiesHomePageSchema,
    paymentSettings: CompanyPropertiesPaymentSettingsSchema,
    productSettings: CompanyPropertiesProductSettingsSchema.optional(),
    orderSettings: CompanyPropertiesOrderSettingsSchema.optional(),
  }),
);

const CompanyMailOptionsSchema = registry.register(
  'CompanyMailOptions',
  z.object({
    user: z.string().meta({ examples: ['no-reply@example.com'] }),
    password: z.string(),
    host: z.string().meta({ examples: ['smtp.gmail.com'] }),
    port: z.number().meta({ examples: [465] }),
    mainMail: z.string().meta({ examples: ['iletisim@example.com'] }),
    secondMail: z.string().meta({ examples: ['support@example.com'] }),
    from: z.string().optional(),
  }),
);

const CompanyShippingOptionsSchema = registry.register(
  'CompanyShippingOptions',
  z.object({
    method: z.string().meta({ examples: ['standard'] }),
    shipment: z.object({
      standard: z
        .object({
          dealer: z.string().optional(),
          price: z.number().optional(),
          currency: z.string().optional(),
        })
        .optional(),
      free: z
        .object({
          price: z.number().optional(),
          currency: z.string().optional(),
        })
        .optional(),
    }),
  }),
);

export const AddCompanySchema = registry.register(
  'AddCompany',
  z.object({
    name: z.string().meta({ examples: ['Opia Heart'] }),
    baseUrl: z
      .string()
      .optional()
      .meta({ examples: ['https://opiaheart.com'] }),
    logo: z.array(z.object({ name: z.string(), image: z.string() })).optional(),
    favicon: z.array(z.object({ name: z.string(), image: z.string() })).optional(),
    description: z.string().optional(),
    timeZone: z
      .string()
      .optional()
      .meta({ examples: ['Ankara'] }),
    currency: z
      .string()
      .optional()
      .meta({ examples: ['TRY'] }),
    address: CompanyAddressSchema,
    socialMedia: z.array(CompanySocialMediaSchema).optional(),
    payments: z.array(CompanyPaymentSchema).optional(),
    properties: CompanyPropertiesSchema.optional(),
    mailOptions: CompanyMailOptionsSchema.optional(),
    shippingOptions: CompanyShippingOptionsSchema.optional(),
  }),
);

export const UpdateCompanySchema = registry.register('UpdateCompany', AddCompanySchema.partial());
