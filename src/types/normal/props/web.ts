import type { IAddress } from '../../zod/address';
import type { IBrand } from '../../zod/brand';
import type { ICategory, ICategoryMenu } from '../../zod/category';
import type { ICompany, IProductSettings, IShippingOptions } from '../../zod/company';
import type { IPaymentResultForIyzico } from '../iyzico';
import type { IPayment, IPaymentBasketItems } from '../../zod/payment';
import type { IPost } from '../../zod/post';
import type { IProduct } from '../../zod/product';
import type { IQuestion } from '../../zod/question';
import type { IReview } from '../../zod/review';
import type { ICard } from '../../zod/card';
import type { IImageData } from '../common';
import type { ILink, INavigation, ISecondaryNavigation } from '../menu';
import type { IInputType, IInputMode } from './admin';

/*************************
 *       WEB-PANEL       *
 *************************/

export interface PPFooter {
  selectedIndex?: number;
  paymentResultIyzico?: IPaymentResultForIyzico;
  billingAddress?: IPayment['billingAddress'];
  basketItems?: IPaymentBasketItems[];
  shipment?: IPayment['shipment'];
}

export interface PPDetails {
  paymentUser?: IPayment['paymentUser'];
  shippingAddress?: IPayment['shippingAddress'];
  basketItems?: IPaymentBasketItems[];
}

export interface PPCashInformation {
  isOneColumn?: boolean;
}

export interface PPComment {
  postId?: string;
  data?: IPost;
}

export interface PPList {
  posts?: IPost[];
}

export interface PPQuestions {
  product?: IProduct;
  totalQuestion?: number;
  questions?: IQuestion[];
}

export interface PPDescriptions {
  product?: IProduct;
}

export interface PPFeatures {
  totalReview?: number;
  product?: IProduct;
  reviews?: IReview[];
}

export interface PPTabPanel {
  product?: IProduct;
  totalReview?: number;
  reviews?: IReview[];
  totalQuestion?: number;
  questions?: IQuestion[];
  isReviewClicked?: number;
}

export interface PPSlider {
  products?: IProduct[];
  dealerPrices?: unknown[];
  productSettings?: IProductSettings;
  shippingOptions?: IShippingOptions;
}

export interface PPCheckout {
  company?: ICompany;
}

export interface PPImageSlider {
  imageData?: IImageData[];
}

export interface PPReceipt {
  payment?: IPayment | Omit<IPayment, 'status' | 'method'>;
}

export interface PPProductList {
  dealerPrices?: unknown[];
  products?: IProduct[];
  totalCount?: number;
  totalPage?: number;
}

export interface PPQuickView {
  show?: boolean;
  item?: IProduct;
  dealerPrices?: unknown[];
  productSettings?: IProductSettings;
  shippingOptions?: IShippingOptions;
}

export interface PPDataList {
  items?: unknown[];
  selectedType?: string;
  type?: string;
}

export interface PPRedirect {
  path?: string;
}

export interface PPCategoryRoot {
  categoryTree?: string[];
}

export interface PPPatternFull {
  theme?: string;
}

export interface PPMainLogo {
  route?: string;
  linkClass?: string;
  imageClass?: string;
}

export interface PPAlert {
  message?: string;
  type?: string;
}

export interface PPHeader {
  header?: string;
  title?: string;
}

export interface PPModal {
  show?: boolean;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  lockCloseEvent?: boolean;
  title?: string;
  text?: string;
  type?: string;
}

export interface PPSlideOver {
  show?: boolean;
  title?: string;
}

export interface PPThemeSelector {
  isWhite?: boolean;
}

export interface PPToolTip {
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: 'red' | 'green' | 'orange' | 'indigo' | 'yellow' | 'gray';
  contentClass?: string;
}

export interface PPBadge {
  colour?: string;
  text?: string;
  showDot?: boolean;
}

export interface PPSearchBar {
  showMobileMenu?: boolean;
  showExitButton?: boolean;
}

export interface PPAccordion {
  data?: { _id?: string; [key: string]: unknown }[];
  type?: 'default' | 'questions' | 'agreements';
}

export interface PPDivider {
  text?: string;
}

export interface PPBanner {
  text1?: string;
  text2?: string;
}

export interface PPLanguageSelector {
  inputClass?: string;
}

export interface PPFeedbackAlert {
  image?: string;
  title?: string;
  text?: string;
  homeButton?: boolean;
  supportButton?: boolean;
  errorPath?: string;
}

export interface PPFilterCategory {
  data?: ICategory[];
}

export interface PPFilterBrand {
  brands?: IBrand[];
}

export interface PPResetPassword {
  resetPasswordKey?: string;
}

export interface PPActivation {
  verificationKey?: string;
}

export interface PPPaymentDefault {
  isCheckout?: boolean;
}

export interface PPOptions {
  paymentMethod?: string;
}

export interface PPCheckoutAddress {
  isCheckout?: boolean;
}

export interface PPAddressList {
  addresses?: IAddress[];
}

export interface PPAddressAddBill {
  isUserHasBill?: boolean;
}

export interface PPAddressAdd {
  modalStatus?: '' | 'create' | 'edit' | 'delete';
  selectedId?: string;
}

export interface PPTemplateStatic {
  index?: number;
  lastFourDigits?: string;
  cardType?: string;
  cardBankName?: string;
  cardAssociation?: string;
  cardFamily?: string;
}

export interface PPCardAdd {
  isCheckout?: boolean;
  showCvc?: boolean;
}

export interface PPCardList {
  cards?: ICard[];
}

export interface PPAddReview {
  productId?: string;
  isAdd?: boolean;
  selectedData?: { _id?: string; [key: string]: unknown };
  activeStatus?: string;
}

export interface PPAddQuestion {
  productId?: string;
  isAdd?: boolean;
  selectedData?: { _id?: string; [key: string]: unknown };
  activeStatus?: string;
}

export interface PPImageUploader {
  inputId?: string;
  imageClass?: string;
  image?: string;
  allowedMimeTypes?: string[];
}

export interface PPFormHelp {
  errorPath?: string;
  errorContent?: string;
}

export interface PPButtonGroup {
  edit?: boolean;
  delete?: boolean;
}

export interface PPCheckBox {
  modelValue?: boolean;
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PPFileUpload {
  id?: string;
  fileName?: string;
  labelTitle?: string;
  labelClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PPSelectCombo {
  data?: { name?: string; [key: string]: unknown }[];
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

export interface PPSelectDefault {
  data?: { name?: string; [key: string]: unknown }[];
  modelValue?: string;
  uniqueId?: string;
  autocomplete?: string;
  formClass?: string;
  inputClass?: string;
  placeholder?: string;
  disabled?: boolean;
  labelTitle?: string;
  needTranslate?: boolean;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PPSwitch {
  modelValue?: string | boolean;
  uniqueId?: string;
  formClass?: string;
  labelTitle?: string;
  labelLink?: string;
}

export interface PPTextArea {
  modelValue?: string;
  uniqueId?: string;
  rows?: string;
  placeholder?: string;
  readonly?: boolean;
  autocomplete?: string;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  labelTitle?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PPDefault {
  modelValue?: string | number;
  uniqueId?: string;
  type?: IInputType;
  inputMode?: IInputMode;
  placeholder?: string;
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
}

export interface PPRadioListSmall {
  data?: { name?: string; variants?: string[] };
  selectedData?: string;
  dataIndex?: number;
  formClass?: string;
  labelTitle?: string;
  labelDetail?: string;
}

export interface PPRadioListNoButton {
  data?: unknown[];
  modelValue?: string;
  formClass?: string;
  labelTitle?: string;
  labelDescription?: string;
}

export interface PPSelectCheck {
  data?: { name?: string; [key: string]: unknown }[];
  modelValue?: string;
  type?: string;
  labelTitle?: string;
  inputClass?: string;
}

export interface PPButton {
  uniqueId?: string;
  type?: 'button' | 'submit' | 'reset';
  buttonClass?: string;
  labelTitle?: string;
  labelClass?: string;
  disabled?: boolean;
  iconAfter: boolean;
}

export interface PPRadioList {
  data?: { _id?: string | number; disabled?: boolean; [key: string]: unknown }[];
  modelValue?: object;
  type?: string;
  selectedIndex?: number;
  formClass?: string;
  labelTitle?: string;
  labelDescription?: string;
}

export interface PPCommandPalette {
  showCommandPalette?: boolean;
}

export interface PPSearch {
  modelValue?: string;
  uniqueId?: string;
  inputMode?: IInputMode;
  placeholder?: string;
  readonly?: boolean;
  minlength?: string;
  maxlength?: string;
  formClass?: string;
  inputClass?: string;
  validateInvalid?: boolean;
  validateError?: boolean;
  validateMessage?: string;
  activeValidate?: boolean;
}

export interface PPHeaderMobile {
  navigation?: ICategoryMenu[];
  open?: boolean;
}

export interface PPMobileTabGroup {
  navigation?: ICategoryMenu[];
}

export interface PPHeaderMain {
  showCompanyLogo?: boolean;
  showMobileMenu?: boolean;
  showExitButton?: boolean;
}

export interface PPHeaderMegaMenu {
  navigation?: ICategoryMenu[];
  showCompanyLogo?: boolean;
}

export interface PPHeaderSecondarySection {
  navigation?: ICategoryMenu[];
  otherNavigation?: ICategoryMenu[];
  brands?: IBrand[];
  showCompanyLogo?: boolean;
}

export interface PPHelpersAccordion {
  navigation?: INavigation[];
}

export interface PPHelpersOtherNavigation {
  otherNavigation?: ICategoryMenu[];
}

export interface PPHelpersAuthButtons {
  isWhite?: boolean;
  showExitButton?: boolean;
}

export interface PPHelpersBrandSelector {
  brands?: IBrand[];
}

export interface PPSidebarMobile {
  mobileFiltersOpen?: boolean;
  filters?: unknown[];
  selectedCategory?: ICategory[];
  brands?: IBrand[];
}

export interface PPSidebarTopSection {
  categoryTree?: string[];
  mobileFiltersOpen?: boolean;
  pagination?: { name?: string; [key: string]: unknown }[];
  sortOptions?: { id?: number; name?: string; href?: string; current?: boolean }[];
}

export interface PPSidebarMain {
  dealerPrices?: unknown[];
  filters?: unknown[];
  selectedCategory?: ICategory[];
  categoryTree?: string[];
  products?: IProduct[];
  brands?: IBrand[];
  sortOptions?: { id?: number; name?: string; href?: string; current?: boolean }[];
  pagination?: { name?: string; [key: string]: unknown }[];
  totalCount?: number;
  totalPage?: number;
  isLoading?: boolean;
}

export interface PPPrivateSidebar {
  navigation?: INavigation[];
  secondaryNavigation?: ISecondaryNavigation[];
}

export interface PPPrivateTabSection {
  tabs?: { name?: string; to?: { path?: string } | string; checked?: boolean }[];
}

export interface PPPrivateSidebarMobile {
  navigation?: INavigation[];
  secondaryNavigation?: ISecondaryNavigation[];
  sidebarOpen?: boolean;
}

export interface PPDefaultHeaderMobile {
  resources?: ILink[];
  solutions?: ILink[];
  isAuthenticated?: boolean;
  mobileMenuOpen?: boolean;
}

export interface PPDefaultOgTheme {
  colorMode?: string;
  title?: string;
  description?: string;
  icon?: string;
  siteName?: string;
  siteLogo?: string;
  theme?: string;
}

export interface PPPageSectionsStats {
  stats?: { id?: number; name?: string; nameDesc?: string }[];
}

export interface PPPageSectionsLogoClouds {
  logoData?: { id?: number; href?: string; alt?: string }[];
}

export interface PPPageSectionsCategoryPreview {
  category?: ICategory;
}

export interface PPPageSectionsFeatureCard {
  colSpan?: number;
  image?: string;
  objectPosition?: string;
  rounded?: string;
  header?: string;
  title?: string;
}

export interface PPPPageSectionsPosts {
  header?: string;
  title?: string;
  posts?: IPost[];
}

export interface PPPageSectionsCategory {
  rootCategories?: ICategory[];
}

export interface PPTablesPagination {
  totalCount?: number;
  activeCount?: number;
  totalPage?: number;
  currentPage?: number;
  maxVisibleButtons?: number;
}

export interface PPTablesSimple {
  data?: { _id?: string; [key: string]: unknown }[];
  type?: string;
  activeStatus?: string;
}

export interface PPTablesOrder {
  payments?: IPayment[];
}

export interface PPHelpersImageCard {
  image?: string;
}

export interface PPHelpersImageReview {
  like?: { average?: number; totalCount?: number };
  type?: string;
}

export interface PPHelpersPrice {
  type?: string;
  dealerPrices?: unknown[];
  item?: IProduct;
  productSettings?: IProductSettings;
  shippingOptions?: IShippingOptions;
}

export interface PPExtraDetails {
  product?: IProduct;
}

export interface PPProgressBar {
  show?: boolean;
  limit?: number;
  cartTotal?: number;
  text?: string;
}
