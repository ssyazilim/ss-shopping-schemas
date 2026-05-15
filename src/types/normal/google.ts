export type IDestination =
  | 'Shopping ads'
  | 'Buy_on_Google_listings'
  | 'Display_ads'
  | 'Local_inventory_ads'
  | 'Free_listings'
  | 'Free_local_listings'
  | 'YouTube_Shopping'; // prettier-ignore

export type IGoogleShipping = {
  country: string;
  region?: string;
  postal_code?: string;
  location_id?: string;
  location_group_name?: string;
  service?: string;
  price: string;
  min_handling_time?: string;
  max_handling_time?: string;
  min_transit_time?: string;
  max_transit_time?: string;
};

export type IGoogleTax = {
  country: string;
  region: string;
  rate: string;
  tax_ship: 'true' | 'false';
};

export interface IReqHeaderGoogle {
  title: string;
  baseUrl: string;
  description: string;
}

export interface IReqHeaderYandex {
  name: string;
  company: string;
  baseUrl: string;
  description: string;
}

export interface IReqXMLGoogle {
  // BASIC PRODUCT DATA
  id: string;
  store_code: string; // https://support.google.com/merchants/answer/13869896
  title: string;
  structured_title?: string; // https://support.google.com/merchants/answer/6324415
  description: string;
  structured_description?: string; // https://support.google.com/merchants/answer/6324468
  link: string;
  image_link: string;
  additional_image_link?: string[];
  virtual_model_link?: string; // https://support.google.com/merchants/answer/13674896
  mobile_link?: string; // https://support.google.com/merchants/answer/6324459
  // PRICE AND AVAILABILITY
  availability: 'in_stock' | 'out_of_stock' | 'preorder' | 'backorder';
  availability_date?: string; // https://support.google.com/merchants/answer/6324470
  cost_of_goods_sold?: string; // https://support.google.com/merchants/answer/9017895
  expiration_date?: string; // https://support.google.com/merchants/answer/6324499
  price: string;
  sale_price?: string;
  sale_price_effective_date?: string; // https://support.google.com/merchants/answer/6324460
  unit_pricing_measure?: string; // https://support.google.com/merchants/answer/6324455
  unit_pricing_base_measure?: string; // https://support.google.com/merchants/answer/6324490
  installments?: { months: string; amount: string; downpayment: string }; // https://support.google.com/merchants/answer/6324474
  subscription_cost?: string; // https://support.google.com/merchants/answer/7437904
  loyalty_program?: string; // https://support.google.com/merchants/answer/12922446
  auto_pricing_min_price?: string; // https://support.google.com/merchants/answer/10071801
  // PRODUCT CATEGORY
  google_product_category?: string; // https://support.google.com/merchants/answer/6324436
  product_type?: string; // https://support.google.com/merchants/answer/6324406
  // PRODUCT IDENTIFIERS
  brand?: string; // https://support.google.com/merchants/answer/6324351
  gtin?: string; // https://support.google.com/merchants/answer/6324461
  mpn?: string; // https://support.google.com/merchants/answer/6324482
  identifier_exists?: 'true' | 'false'; // https://support.google.com/merchants/answer/6324478
  // DETAILED PRODUCT DESCRIPTION
  condition: 'new' | 'refurbished' | 'used'; // https://support.google.com/merchants/answer/6324469
  adult?: 'true' | 'false'; // https://support.google.com/merchants/answer/6324508
  multipack?: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'; // https://support.google.com/merchants/answer/6324488
  is_bundle?: 'true' | 'false'; // https://support.google.com/merchants/answer/6324449
  certification?: { authority: string; name: string; code: string }; // https://support.google.com/merchants/answer/13528839
  energy_efficiency_class?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'; // https://support.google.com/merchants/answer/7562785
  min_energy_efficiency_class?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  max_energy_efficiency?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  age_group?: 'newborn' | 'infant' | 'toddler' | 'kids' | 'adult'; // https://support.google.com/merchants/answer/6324463
  color?: string; // https://support.google.com/merchants/answer/6324487
  gender?: 'unisex' | 'male' | 'female'; // https://support.google.com/merchants/answer/6324479
  material?: string; // https://support.google.com/merchants/answer/6324410
  pattern?: string; // https://support.google.com/merchants/answer/6324483
  size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'; // https://support.google.com/merchants/answer/6324492
  size_type?: 'regular' | 'petite' | 'maternity' | 'big' | 'tall'; // https://support.google.com/merchants/answer/6324497
  size_system?: 'US' | 'UK' | 'EU' | 'JP' | 'CN' | 'BR' | 'MX' | 'AU'; // https://support.google.com/merchants/answer/6324502
  item_group_id?: string; // https://support.google.com/merchants/answer/6324507
  product_length?: string; // https://support.google.com/merchants/answer/11018531
  product_width?: string; // cm | in => 20 cm
  product_height?: string; // cm | in => 20 cm
  product_weight?: string; // lb | oz | g | kg => 5 lb
  product_detail?: { sec_name: string; att_name: string; att_value: string }; // https://support.google.com/merchants/answer/9218260
  product_highlight?: string; // https://support.google.com/merchants/answer/9216100
  // SHOPPING CAMPAIGNS AND OTHERS
  ads_redirect?: string; // https://support.google.com/merchants/answer/6324450
  custom_label_0?: string; // https://support.google.com/merchants/answer/6324473
  custom_label_1?: string;
  custom_label_2?: string;
  custom_label_3?: string;
  custom_label_4?: string;
  promotion_id?: string; // https://support.google.com/merchants/answer/7050148
  lifestyle_image_link?: string; // https://support.google.com/merchants/answer/9103186
  // DESTINATIONS
  excluded_destination?: IDestination; // https://support.google.com/merchants/answer/6324486
  included_destination?: IDestination;
  shopping_ads_excluded_country?: string; // https://support.google.com/merchants/answer/9837523
  pause?: 'ads'; // https://support.google.com/merchants/answer/11909930
  // SHIPPING
  shipping?: IGoogleShipping; // https://support.google.com/merchants/answer/6324484
  shipping_label?: string; // https://support.google.com/merchants/answer/6324504
  shipping_weight?: string; // https://support.google.com/merchants/answer/6324503
  shipping_length?: string; // https://support.google.com/merchants/answer/6324498
  shipping_width?: string; // cm | in => 20 cm
  shipping_height?: string; // cm | in => 20 cm
  ships_from_country?: string; // https://support.google.com/merchants/answer/9837936
  max_handling_time?: string; // https://support.google.com/merchants/answer/7388496
  min_handling_time?: string;
  free_shipping_threshold?: { country: string; price: string }; // https://support.google.com/merchants/answer/14768922
  // TAX
  tax?: IGoogleTax; // https://support.google.com/merchants/answer/6324454
  tax_category?: string; // https://support.google.com/merchants/answer/7569847
}
