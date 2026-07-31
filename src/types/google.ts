import { z } from 'zod';

export type IDestination = z.infer<typeof DestinationSchema>;
export const DestinationSchema = z.enum([
  'Shopping ads',
  'Buy_on_Google_listings',
  'Display_ads',
  'Local_inventory_ads',
  'Free_listings',
  'Free_local_listings',
  'YouTube_Shopping',
]);

export type IGoogleShipping = z.infer<typeof GoogleShippingSchema>;
export const GoogleShippingSchema = z.object({
  country: z.string(),
  region: z.string().optional(),
  postal_code: z.string().optional(),
  location_id: z.string().optional(),
  location_group_name: z.string().optional(),
  service: z.string().optional(),
  price: z.string(),
  min_handling_time: z.string().optional(),
  max_handling_time: z.string().optional(),
  min_transit_time: z.string().optional(),
  max_transit_time: z.string().optional(),
});

export type IGoogleTax = z.infer<typeof GoogleTaxSchema>;
export const GoogleTaxSchema = z.object({
  country: z.string(),
  region: z.string(),
  rate: z.string(),
  tax_ship: z.enum(['true', 'false']),
});

export type IReqHeaderGoogle = z.infer<typeof ReqHeaderGoogleSchema>;
export const ReqHeaderGoogleSchema = z.object({
  title: z.string(),
  baseUrl: z.string(),
  description: z.string(),
});

export type IReqHeaderYandex = z.infer<typeof ReqHeaderYandexSchema>;
export const ReqHeaderYandexSchema = z.object({
  name: z.string(),
  company: z.string(),
  baseUrl: z.string(),
  description: z.string(),
});

export type IReqXMLGoogle = z.infer<typeof ReqXMLGoogleSchema>;
export const ReqXMLGoogleSchema = z.object({
  // BASIC PRODUCT DATA
  id: z.string(),
  store_code: z.string(), // https://support.google.com/merchants/answer/13869896
  title: z.string(),
  structured_title: z.string().optional(), // https://support.google.com/merchants/answer/6324415
  description: z.string(),
  structured_description: z.string().optional(), // https://support.google.com/merchants/answer/6324468
  link: z.string(),
  image_link: z.string(),
  additional_image_link: z.array(z.string()).optional(),
  virtual_model_link: z.string().optional(), // https://support.google.com/merchants/answer/13674896
  mobile_link: z.string().optional(), // https://support.google.com/merchants/answer/6324459
  // PRICE AND AVAILABILITY
  availability: z.enum(['in_stock', 'out_of_stock', 'preorder', 'backorder']),
  availability_date: z.string().optional(), // https://support.google.com/merchants/answer/6324470
  cost_of_goods_sold: z.string().optional(), // https://support.google.com/merchants/answer/9017895
  expiration_date: z.string().optional(), // https://support.google.com/merchants/answer/6324499
  price: z.string(),
  sale_price: z.string().optional(),
  sale_price_effective_date: z.string().optional(), // https://support.google.com/merchants/answer/6324460
  unit_pricing_measure: z.string().optional(), // https://support.google.com/merchants/answer/6324455
  unit_pricing_base_measure: z.string().optional(), // https://support.google.com/merchants/answer/6324490
  installments: z
    .object({ months: z.string(), amount: z.string(), downpayment: z.string() })
    .optional(), // https://support.google.com/merchants/answer/6324474
  subscription_cost: z.string().optional(), // https://support.google.com/merchants/answer/7437904
  loyalty_program: z.string().optional(), // https://support.google.com/merchants/answer/12922446
  auto_pricing_min_price: z.string().optional(), // https://support.google.com/merchants/answer/10071801
  // PRODUCT CATEGORY
  google_product_category: z.string().optional(), // https://support.google.com/merchants/answer/6324436
  product_type: z.string().optional(), // https://support.google.com/merchants/answer/6324406
  // PRODUCT IDENTIFIERS
  brand: z.string().optional(), // https://support.google.com/merchants/answer/6324351
  gtin: z.string().optional(), // https://support.google.com/merchants/answer/6324461
  mpn: z.string().optional(), // https://support.google.com/merchants/answer/6324482
  identifier_exists: z.enum(['true', 'false']).optional(), // https://support.google.com/merchants/answer/6324478
  // DETAILED PRODUCT DESCRIPTION
  condition: z.enum(['new', 'refurbished', 'used']), // https://support.google.com/merchants/answer/6324469
  adult: z.enum(['true', 'false']).optional(), // https://support.google.com/merchants/answer/6324508
  multipack: z.enum(['2', '3', '4', '5', '6', '7', '8', '9', '10']).optional(), // https://support.google.com/merchants/answer/6324488
  is_bundle: z.enum(['true', 'false']).optional(), // https://support.google.com/merchants/answer/6324449
  certification: z.object({ authority: z.string(), name: z.string(), code: z.string() }).optional(), // https://support.google.com/merchants/answer/13528839
  energy_efficiency_class: z.enum(['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(), // https://support.google.com/merchants/answer/7562785
  min_energy_efficiency_class: z.enum(['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(),
  max_energy_efficiency: z.enum(['A+', 'A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(),
  age_group: z.enum(['newborn', 'infant', 'toddler', 'kids', 'adult']).optional(), // https://support.google.com/merchants/answer/6324463
  color: z.string().optional(), // https://support.google.com/merchants/answer/6324487
  gender: z.enum(['unisex', 'male', 'female']).optional(), // https://support.google.com/merchants/answer/6324479
  material: z.string().optional(), // https://support.google.com/merchants/answer/6324410
  pattern: z.string().optional(), // https://support.google.com/merchants/answer/6324483
  size: z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL']).optional(), // https://support.google.com/merchants/answer/6324492
  size_type: z.enum(['regular', 'petite', 'maternity', 'big', 'tall']).optional(), // https://support.google.com/merchants/answer/6324497
  size_system: z.enum(['US', 'UK', 'EU', 'JP', 'CN', 'BR', 'MX', 'AU']).optional(), // https://support.google.com/merchants/answer/6324502
  item_group_id: z.string().optional(), // https://support.google.com/merchants/answer/6324507
  product_length: z.string().optional(), // https://support.google.com/merchants/answer/11018531
  product_width: z.string().optional(), // cm | in => 20 cm
  product_height: z.string().optional(), // cm | in => 20 cm
  product_weight: z.string().optional(), // lb | oz | g | kg => 5 lb
  product_detail: z
    .object({ sec_name: z.string(), att_name: z.string(), att_value: z.string() })
    .optional(), // https://support.google.com/merchants/answer/9218260
  product_highlight: z.string().optional(), // https://support.google.com/merchants/answer/9216100
  // SHOPPING CAMPAIGNS AND OTHERS
  ads_redirect: z.string().optional(), // https://support.google.com/merchants/answer/6324450
  custom_label_0: z.string().optional(), // https://support.google.com/merchants/answer/6324473
  custom_label_1: z.string().optional(),
  custom_label_2: z.string().optional(),
  custom_label_3: z.string().optional(),
  custom_label_4: z.string().optional(),
  promotion_id: z.string().optional(), // https://support.google.com/merchants/answer/7050148
  lifestyle_image_link: z.string().optional(), // https://support.google.com/merchants/answer/9103186
  // DESTINATIONS
  excluded_destination: DestinationSchema.optional(), // https://support.google.com/merchants/answer/6324486
  included_destination: DestinationSchema.optional(),
  shopping_ads_excluded_country: z.string().optional(), // https://support.google.com/merchants/answer/9837523
  pause: z.literal('ads').optional(), // https://support.google.com/merchants/answer/11909930
  // SHIPPING
  shipping: GoogleShippingSchema.optional(), // https://support.google.com/merchants/answer/6324484
  shipping_label: z.string().optional(), // https://support.google.com/merchants/answer/6324504
  shipping_weight: z.string().optional(), // https://support.google.com/merchants/answer/6324503
  shipping_length: z.string().optional(), // https://support.google.com/merchants/answer/6324498
  shipping_width: z.string().optional(), // cm | in => 20 cm
  shipping_height: z.string().optional(), // cm | in => 20 cm
  ships_from_country: z.string().optional(), // https://support.google.com/merchants/answer/9837936
  max_handling_time: z.string().optional(), // https://support.google.com/merchants/answer/7388496
  min_handling_time: z.string().optional(),
  free_shipping_threshold: z.object({ country: z.string(), price: z.string() }).optional(), // https://support.google.com/merchants/answer/14768922
  // TAX
  tax: GoogleTaxSchema.optional(), // https://support.google.com/merchants/answer/6324454
  tax_category: z.string().optional(), // https://support.google.com/merchants/answer/7569847
});
