import type Iyzipay from 'iyzipay';
import type { IAgreement } from '../agreement';
import type { IBrand } from '../brand';
import type { ICategory } from '../category';
import type {
  ICompany,
  IHomePage,
  IMailOptions,
  IOrderSettings,
  IPaymentMethods,
  IPaymentSettings,
  IProductSettings,
} from '../company';
import type { ICity, ICountry, IDistrict, IUpdatedData } from '../country';
import type {
  IModule,
  ICrispConfig,
  IIyzicoConfig,
  IWhatsappConfig,
  ITawkToConfig,
  IGoogleAuthConfig,
  IFacebookAuthConfig,
  INetgsmConfig,
  IGeliverConfig,
} from '../module';
import type {
  IGeliverAddPackageTemplateResponse,
  IGeliverAddProviderResponse,
  IGeliverAddWebHookResponse,
  IGeliverAddressAddResponse,
  IGeliverCity,
  IGeliverDistrict,
  IGeliverShipmentAddResponse,
  IDealerPricesWithDesi,
  IPackageTemplate,
} from '../geliver';
import type { IOrder, IOrderBasketItem } from '../order';
import type { IPost, IPostCounts } from '../post';
import type { IPrice, IProduct, IProductAndVariant, IStaticImage, IType } from '../product';
import type { IQuestion } from '../question';
import type { IReview } from '../review';
import type { ISocketVisitor } from '../traffic';
import type { ITranslation } from '../translation';
import type { IUser } from '../user';
import type { IVariant, IVariantValue } from '../variant';
import type { IDateButton, ITableIndex } from '../common';
import type { IClient, INavigation, ISecondaryNavigation, ITopNavigation } from '../menu';

/*************************
 *       TYPES           *
 *************************/

export type IInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type IInputMode = 'none' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

export interface PGoogle {
  favicon?: string;
  sellerData?: { name?: string; baseUrl?: string; description?: string };
}

export interface PProductQuickView {
  selectedProduct?: IProduct;
}

export interface PRedirect {
  path?: string;
}

export interface PReviewQuickView {
  rowData?: (IQuestion & ITableIndex) | (IReview & ITableIndex);
}

export interface PSidebarSection {
  data?: IClient[];
  isRouter?: boolean;
}

export interface PStackedList {
  items?: IPaymentMethods[];
}

export interface PMainLogo {
  route?: string;
  linkClass?: string;
  imageClass?: string;
}

export interface PAlert {
  message?: string;
  type?: 'danger' | 'success' | 'warning' | 'info';
}

export interface PBadge {
  colour?: string;
  text?: string;
}

export interface PBanner {
  text1?: string;
  text2?: string;
}

export interface PDivider {
  text?: string;
  textClass?: string;
  lineClass?: string;
}

export interface PHeader {
  header?: string;
  title?: string;
}

export interface PLanguageSelector {
  inputClass?: string;
}

export interface PListFeeds {
  data?: IProductAndVariant[];
  templates?: IPackageTemplate[];
}

export interface PModal {
  show?: boolean;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  modalSize?: string;
  title?: string;
  text?: string;
  type?: string;
}

export interface PProfileIcon {
  activeUser?: IUser;
}

export interface PSlideOver {
  show?: boolean;
}

export interface PToolTip {
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: 'red' | 'green' | 'orange' | 'indigo' | 'yellow' | 'gray';
  contentClass?: string;
}

export interface PFeedbackAlert {
  image?: string;
  title?: string;
  text?: string;
  homeButton?: boolean;
}

export interface PError {
  code?: number;
  wrap?: boolean;
}

export interface PBestSeller {
  currency?: string;
  activeType?: string;
  label?: string;
  labell?: string;
  basketItems?: IOrderBasketItem[];
  basketItemss?: IOrderBasketItem[];
}

export interface PLine {
  currency?: string;
  dateButtons?: IDateButton[];
  basketItems?: IOrderBasketItem[];
  basketItemss?: IOrderBasketItem[];
}

export interface PDoughnut {
  dateButtons?: IDateButton[];
  doughnutChartData?: Record<string, number>;
}

export interface PFunnel {
  dateButtons?: IDateButton[];
  visitors?: { totalReferrer?: number; totalDirect?: number; totalBot?: number; total?: number };
  getLiveVisitors?: ISocketVisitor[];
  totalCartCount?: number;
  totalOrderCount?: number;
}

export interface PStatSection {
  totalCount?: number;
  basketItems?: IOrderBasketItem[];
  basketItemss?: IOrderBasketItem[];
}

export interface PTopSection {
  currency?: string;
  dateButtons?: IDateButton[];
}

export interface PBrandAdd {
  isAdd?: boolean;
  rowData?: ITableIndex & IBrand;
}

export interface PCategoryAdd {
  isAdd?: boolean;
  categories?: ICategory[];
  rowData?: ITableIndex & ICategory;
}

export interface PInfoRow {
  title?: string;
  icon?: string;
  text?: string;
}

export interface PMain {
  currency?: string;
  provider?: string;
  order?: IOrder;
  paymentResultIyzico?: Iyzipay.PaymentResult | null;
}

export interface PCard {
  currency?: string;
  itemTransactions?: Iyzipay.PaymentResult['itemTransactions'];
}

export interface PCash {
  currency?: string;
  order?: IOrder;
}

export interface POrderAddress {
  currency?: string;
  order?: IOrder;
  templates?: IPackageTemplate[];
}

export interface PCardInformation {
  paymentResultIyzico?: Iyzipay.PaymentResult | null;
}

export interface PTableGroup {
  item?: IOrder;
  type?: string;
}

export interface PAddBasketItems {
  products?: IProduct[];
  variants?: IVariant[];
  templates?: IPackageTemplate[];
}

export interface PAddBuyer {
  triggerClick?: number;
  phoneCodes?: ICountry[];
  cities?: IGeliverCity[];
}

export interface PAddShipping {
  templates?: IPackageTemplate[];
}

export interface PVariantAdd {
  isAdd?: boolean;
  rowData?: ITableIndex & IVariant;
  dealer?: string;
  products?: IProduct[];
  dealerPrices?: IDealerPricesWithDesi[];
}

export interface PProductAdd {
  isAdd?: boolean;
  product?: IProduct;
  productVariants?: { type?: IType[]; values?: IVariantValue[] };
  categories?: ICategory[];
  brands?: IBrand[];
  taxAmount?: number;
  dealer?: string;
  dealerPrices?: IDealerPricesWithDesi[];
}

export interface PAgreementAdd {
  isAdd?: boolean;
  agreementId?: string;
  agreement?: IAgreement;
}

export interface PPostAdd {
  isAdd?: boolean;
  postId?: string;
  post?: IPost;
  countries?: ICountry[];
  cities?: ICity[];
  districts?: IDistrict[];
}

export interface PChat {
  company?: ICompany;
  // external?: IExternal;
  phoneCodes?: ICountry[];
}

export interface PCommunication {
  company?: ICompany;
  phoneCodes?: ICountry[];
}

export interface PRegion {
  company?: ICompany;
  timeZones?: (ICountry['timezones'][number] & { name: string })[];
  currencies?: IUpdatedData[];
}

export interface PSellerAddress {
  company?: ICompany;
  phoneCodes?: ICountry[];
}

export interface PSellerGeneral {
  company?: ICompany;
}

export interface PSellerPayment {
  company?: ICompany;
  // external?: IExternal;
}

export interface PSellerShipping {
  company?: ICompany;
  // external?: IExternal;
  currencies?: IUpdatedData[];
  dealers?: IDealerPricesWithDesi[];
}

export interface PSocialMedia {
  company?: ICompany;
}

export interface PHomePage {
  companyId?: string;
  homePage?: IHomePage;
  translation?: ITranslation;
  postCounts?: IPostCounts;
}

export interface POrderSettings {
  companyId?: string;
  orderSettings?: IOrderSettings;
}

export interface PPaymentSettings {
  companyId?: string;
  paymentSettings?: IPaymentSettings;
}

export interface PProductSettings {
  companyId?: string;
  productSettings?: IProductSettings;
}

export interface PTranslationAdd {
  isAdd?: boolean;
  translationId?: string;
  translation?: ITranslation;
}

export interface PPersonalInfo {
  activeUser?: IUser;
}

export interface PMailOptions {
  mailOptions?: IMailOptions;
}

export interface PPaymentAdd {
  isAdd?: boolean;
  payment?: {
    _id?: string;
    status?: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface PAddQuestion {
  isAdd?: boolean;
  rowData?: ITableIndex & IQuestion;
}

export interface PAddReview {
  isAdd?: boolean;
  rowData?: ITableIndex & IReview;
}

export interface PAddUser {
  isAdd?: boolean;
  rowData?: ITableIndex & IUser;
}

export interface PFileUploader {
  objectPath?: string;
  isAdd?: boolean;
  resetUploader?: boolean;
  staticImages?: IStaticImage;
  dynamicImages?: string[];
}

export interface PImageUploader {
  inputId?: string;
  imageClass?: string;
  image?: string;
}

export interface PResetPassword {
  resetPasswordKey?: string;
}

export interface PButton {
  uniqueId?: string;
  type?: 'button' | 'submit' | 'reset';
  iconAfter?: boolean;
  buttonClass?: string;
  labelTitle?: string;
  disabled?: boolean;
}

export interface PButtonGroup {
  edit?: boolean;
  delete?: boolean;
  multiple?: boolean;
  review?: boolean;
  test?: boolean;
}

export interface PCheckBox {
  modelValue?: boolean;
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  disabled?: boolean;
  inputClass?: string;
}

export interface PCommandPalette {
  products?: IProduct[];
  variants?: IVariant[];
  modelValue?: string;
  type?: string;
  uniqueId?: string;
  autocomplete?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  placeholder?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PDefaultForm {
  modelValue?: string | number;
  isNumber?: boolean;
  uniqueId?: string;
  type?: IInputType;
  inputMode?: IInputMode;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: string;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
  showPasswordToggle?: boolean;
}

export interface PDraggableList {
  modelValue?: any[];
}

export interface PFileUpload {
  id?: string;
}

export interface PImageUpload {
  modelValue?: string;
  uniqueId?: string;
  inputMode?: IInputMode;
  placeholder?: string;
  readonly?: boolean;
  autocomplete?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PInputOverlap {
  modelValue?: string | number;
  uniqueId?: string;
  type?: IInputType;
  placeholder?: string;
  disabled?: boolean;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PRadioList {
  data?: { _id?: string | number; [key: string]: any }[];
  modelValue?: object;
  type?: string;
  selectedIndex?: number;
  formClass?: string;
  labelTitle?: string;
  labelDescription?: string;
}

export interface PSearch {
  modelValue?: string;
  uniqueId?: string;
  inputMode?: IInputMode;
  placeholder?: string;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PSelectCheck {
  data?: { name?: string; [key: string]: any }[];
  modelValue?: string;
  type?: string;
  labelTitle?: string;
  inputClass?: string;
  disabled?: boolean;
}

export interface PSelectCombo {
  data?: { [key: string]: any }[];
  modelValue?: string;
  type?: string;
  uniqueId?: string;
  autocomplete?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  placeholder?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PSelectDefault {
  data?: { name: string; code?: string; [key: string]: any }[];
  modelValue?: string;
  type?: 'default' | 'translation' | 'category' | 'sort';
  uniqueId?: string;
  autocomplete?: string;
  formClass?: string;
  inputClass?: string;
  placeholder?: string;
  disabled?: boolean;
  labelTitle?: string;
  labelClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PSelectDetail {
  data?: { name?: string; description?: string; current?: boolean }[];
  modelValue?: string;
  type?: string;
  formClass?: string;
  labelClass?: string;
  labelTitle?: string;
  inputClass?: string;
}

export interface PSelectTime {
  modelValue?: Date[];
  uniqueId?: string;
  formClass?: string;
  inputClass?: string;
  placeholder?: string;
  disabled?: boolean;
  labelTitle?: string;
  labelClass?: string;
  activeValidate?: boolean;
}

export interface PState {
  uniqueId?: string;
  formClass?: string;
  description?: string;
  labelTitle?: string;
  labelClass?: string;
  activeValidate?: boolean;
}

export interface PSwitch {
  modelValue?: string | boolean;
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  labelLink?: string;
  disabled?: boolean;
}

export interface PTextArea {
  modelValue?: string;
  uniqueId?: string;
  rows?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  autocomplete?: boolean;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PAccordion {
  data?: { name?: string; [key: string]: any }[];
}

export interface PPrivateSidebar {
  navigation?: INavigation[];
  secondaryNavigation?: ISecondaryNavigation[];
}

export interface PPrivateSidebarMobile {
  navigation?: INavigation[];
  secondaryNavigation?: ISecondaryNavigation[];
  sidebarOpen?: boolean;
}

export interface PPrivateTabSection {
  tabs?: { title?: string; path?: string; checked?: boolean }[];
  isRouter?: boolean;
}

export interface PCta {
  translation?: ITranslation;
}

export interface PHero {
  translation?: ITranslation;
}

export interface PLogoClouds {
  translation?: ITranslation;
}

export interface PSlider {
  translation?: ITranslation;
}

export interface PStat {
  translation?: ITranslation;
}

export interface PTablePagination {
  totalCount?: number;
  activeCount?: number;
  totalPage?: number;
  currentPage?: number;
  maxVisibleButtons?: number;
}

export interface PTableTopSection {
  navigation?: ITopNavigation[];
}

export interface PTableTopSectionMobile {
  navigation?: ITopNavigation[];
  open?: boolean;
}

export interface PTableVariants {
  isAdd?: boolean;
  product?: IProduct;
  variants?: { type?: IType[]; values?: IVariantValue[] };
  oldTypes?: IType[];
  price?: IPrice;
}

export interface PEditor {
  modelValue?: string;
}

export interface PSimpleEditor {
  modelValue?: string;
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  labelClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PShippingAdd {
  isAdd?: boolean;
  isRecipient?: boolean;
  rowData?: ITableIndex & IGeliverAddressAddResponse;
  phoneCodes?: ICountry[];
  cities?: IGeliverCity[];
  districts?: IGeliverDistrict[];
}

export interface PShippingAddPackage {
  isAdd?: boolean;
  rowData?: ITableIndex & IGeliverAddPackageTemplateResponse;
}

export interface PPreviewBox {
  length?: string;
  width?: string;
  height?: string;
}

export interface PShippingAddTemplate {
  isAdd?: boolean;
  rowData?: ITableIndex;
  products?: IProduct[];
}

export interface PShipmentAdd {
  isAdd?: boolean;
  products?: IProduct[];
  variants?: IVariant[];
  phoneCodes?: ICountry[];
  templates?: IPackageTemplate[];
  receivers?: { name?: string; description?: string; current?: boolean }[];
  senders?: { name?: string; description?: string; current?: boolean }[];
  cities?: IGeliverCity[];
  rowData?: ITableIndex & IGeliverShipmentAddResponse;
}

export interface PShipping {
  order?: IOrder;
  cities?: IGeliverCity[];
}

export interface PDesiInformation {
  templates?: IPackageTemplate[];
  item?: IProductAndVariant;
}

export interface POrderAddAddress {
  selectedAddress?: string;
  triggerClick: number;
  cities?: IGeliverCity[];
}

export interface POrderAddBillingAddress {
  cities?: IGeliverCity[];
}

export interface PProviderAdd {
  isAdd?: boolean;
  rowData?: ITableIndex & IGeliverAddProviderResponse;
}

export interface PRadioListSmall {
  data?: { name?: string; [key: string]: any }[];
  selectedData?: string;
  dataIndex?: number;
  formClass?: string;
  labelTitle?: string;
  labelDetail?: string;
}

export interface PWebhookAdd {
  isAdd?: boolean;
  rowData?: ITableIndex & IGeliverAddWebHookResponse;
}

export interface IActivityFeed {
  id?: string;
  type?: string;
  person?: { name?: string; imageUrl?: string };
  comment?: string;
  date?: string;
  dateTime?: string;
}

export interface PActivityFeed {
  activity?: IActivityFeed[];
}

export interface PPbar {
  data?: number[];
  labels?: string[];
  showHeader?: boolean;
  label?: string;
  backgroundColor?: string;
}

export interface PPhoneInput {
  modelValue?: string;
  data?: ICountry[];
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  disabled?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PInlineLinks {
  data?: (IModule & { description: string })[],
  buttonLabel?: string,
  buttonLabel2?: string,
  buttonLabel3?: string,
}

export interface PModuleIyzico {
  moduleKey: 'iyzico',
  moduleData?: Partial<IIyzicoConfig>,
}

export interface PModuleWhatsapp {
  moduleKey: 'whatsapp',
  moduleData?: Partial<IWhatsappConfig>,
}

export interface PModuleCrisp {
  moduleKey: 'crisp',
  moduleData?: Partial<ICrispConfig>,
}

export interface PModuleTawkTo {
  moduleKey: 'tawkTo',
  moduleData?: Partial<ITawkToConfig>,
}

export interface PModuleGoogleAuth {
  moduleKey: 'googleAuth',
  moduleData?: Partial<IGoogleAuthConfig>,
}

export interface PModuleFacebookAuth {
  moduleKey: 'facebookAuth',
  moduleData?: Partial<IFacebookAuthConfig>,
}

export interface PModuleNetgsm {
  moduleKey: 'netgsm',
  moduleData?: Partial<INetgsmConfig>,
}

export interface PModuleGeliver {
  moduleKey: 'geliver',
  moduleData?: Partial<IGeliverConfig>,
}

/*************************
 *       CONSTANTS       *
 *************************/
export const DEFAULT_SELLER_DATA: PGoogle['sellerData'] = {
  name: '',
  baseUrl: '',
  description: '',
};
export const DEFAULT_VISITORS: PFunnel['visitors'] = {
  totalReferrer: 0,
  totalDirect: 0,
  totalBot: 0,
  total: 0,
};
