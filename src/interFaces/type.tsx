import { ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";


export interface explore {
  id: number;
  image: string;
  name: string;
  discount: string;
}

export interface policydata {
  title: string;
  paragraph1: string;
  paragraph2: string;
}

export interface breadcrumbs {
  id: number;
  pathName: string;
}

interface color {
  id: number;
  color: string;
  color_code: string;
  color_status: boolean;
}

interface productcolorimage {
  id: number;
  productId: number;
  color: {
    color_code: string;
    color: string;
  };
  image: string;
  price: string;
}

interface brand {
  brand_name: string;
  brand_description: string;
}

interface category {
  name: string;
}

interface subcategory {
  subcategory_name: string;
}

interface user {
  name: string;
  profile: string | null;
}

interface productreview {
  id: number;
  rating: string;
  comment: string;
  createdAt: string;
  user: user;
}

interface productdetail {
  id: number;
  details: string;
  productId: number;
}

interface productinfo {
  id: number;
  image: string;
  Special_feature: string;
  Item_weight: string;
  Compatible_Devices: string;
  productId: number;
}

interface faq {
  id: number;
  question: string;
  answer: string;
  productId: number;
}

export interface product {
  id: number;
  name: string;
  description: string;
  image: string;
  active: boolean;
  Featured: boolean;
  sellingproducts: boolean;
  topbrands: boolean;
  ArrivalsProducts: boolean;
  price: string;
  brandsId: number;
  subcategoryId: number;
  categoryId: number;
  colors: color[];
  product_color_image: productcolorimage[];
  brands: brand;
  category: category;
  subcategory: subcategory;
  Produsts_Review: productreview[];
  ProductDetails: productdetail[];
  productsinfo: productinfo[];
  Faq: faq[];
}

export interface userthought {
  id: number;
  heading: string;
  description: string;
  username: string;
  location: string;
}

export interface salecard {
  id: number;
  discount: string;
  subcategoryinfo: string;
  image: string;
}

export interface similarproduct {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface blogpostcard {
  id: number;
  date: string;
  description: string;
  image: string;
}

export interface inputtype {
  type?: string;
  name?: string;
  id?: string;
  inputclass?: string;
  placeholder?: string;
  className?: string;
  inputparent?: string;
  show?: boolean;
  showtype?: boolean;
  setshow?: Dispatch<SetStateAction<boolean>>;
  label: string;
  error?: string;
  [key: string]: any; // to allow additional props
}

export interface softwaredev {
  id: number;
  leadmanager: string;
  text: string;
  location: string;
  JobType: string;
  Experience: string;
  postdate: string;
}

export interface ordercard {
  tittle: string;
  size: string;
  color: string;
  colorvarient: string;
  price: string;
  currentposition: string;
  description: string;
  orderid?: boolean;
  orderdetail?: string;
  refundid?: boolean;
  refunddetail?: string;
  imgpath?: string;
  Rateproduct?: boolean;
  Returnproduct?: boolean;
  helpproduct?: boolean;
  openwritepopup?: () => void;
  openreturpopup?: () => void;
  routeto?: string
}

export interface leaddata {
  data: softwaredev;
}

export interface filterside {
  className?: string;
  filtersideleadmanager?: number;
}

export interface profileinterface {
  profilesidebar?: number | null;
  closebtn?: () => void;
  classname?: string | undefined;
}

export interface customner {
  className: string;
  closebtncustomer: () => void;
}

export interface whislits {
  className?: string;
}

export interface paymentoptionstype {
  children: ReactNode;
}

export interface closepopup {
  viewwishlist?: () => void;
  closepopup?: () => void;
  Createnew?: () => void;
  newlist?: () => void;
  cancelpopup?: () => void;
  cancelcreatenew?: () => void;
  cancelviewwishlist?: () => void;
  cancelnewlist?: () => void;
  cancelcoupon?: () => void;
}

export interface closepopupreview {
  closepopup?: () => void;
  heading?: string;
  btntext?: string;
}

export interface savedaddress {
  name: string;
  contact: string;
  useraddress: string;
  editadress?: () => void;
  deleteaddress?: () => void;
}

export interface blogpostdata {
  data: blogpostcard;
  samesize?: boolean;
  navroute?: string
}

export interface breadcrumbsdata {
  data: breadcrumbs[];
  bgcolor?: string;
  children?: ReactNode;
  className?: string;
}

export type buttonvariant =
  | "secondary"
  | "gray"
  | "primary"
  | "liquid"
  | "thirdly";

export interface ButtonProps {
  children: ReactNode;
  varient?: buttonvariant;
  className?: string;
  onClick?: () => void;
  icon?: boolean
  btntype?: "button" | "submit" | "reset";
  navroute?: string
  btnclass?: string

}
export interface checkboxtype {
  children?: ReactNode;
  labelclass?: string;
  color?: string;
  value?: string;
  Checkbox?: string;
  diraction?: string;
  id?: number;
  addItemToList?: any;
  // checked?: any;
  onChange?: any;
  className?: string;
  labletextclass?: string;
  onclick?: () => void
  Setchecked?: any
  checked?: any
  error?: string
  name?: string
}

export interface dealscard {
  card: string;
  data: any;
  openwritepopup?: () => void;
  openratingpopup?: () => void;
  show?: boolean;
  save?: boolean;
}

export interface dropdownprops {
  testclass?: string;
  heading: string;
  children: ReactNode;
  image?: string;
  className?: string;
  directionshovercontent?: string;
  arrow?: string;
  allcateDropdown?: any;
  onclick?: boolean;
  arrowimageclass?: string;
  positionsta?: boolean;
}

export interface explorecard {
  data: explore;
}

export interface cardinfo {
  star?: boolean;
  card?: string;
  data?: any;
  hoverEffect?: boolean;
  custompaddingboxbottom?: string;
  bg?: string;
  checkbox?: boolean;
  CreatenewList?: any;
  color?: boolean;
  onClick?: () => void;
  id?: number;
  index?: number;
  item?: any
  checked?: any
  clickme?: any
  ref?: any
}

export interface proptype {
  Children: string;
  className?: string;
  source?: string;
}

export interface layoutprops {
  children: ReactNode;
  showHeaderFooter: boolean;
}

export interface overlayprops {
  isOpen?: boolean;
}

export interface title {
  title: string;
  className: string;
}

export interface carddetails {
  bankname: String;
  digit1: String;
  digit2: String;
  digit3: String;
  digit4: String;
  expirymonth: String;
  expiryyear: String;
  holdername: String;
  className: String;
}

export interface banner {
  smallheading?: string;
  maintextfirst?: string;
  maintextlast?: string;
  ptext?: string;
  btndata?: string;
  spantext?: string;
  banner?: boolean;
  image?: string;
  sectionclass?: string;
  imageclass?: string;
  gap?: string;
  career?: boolean;
  linkto?: string;
}

export interface tabadata {
  bootomtabsdata: {
    id: number;
    name: string;
    image: string;
  }[];
  flexdiraction?: string;
  spacing?: string;
}

export interface checkbox {
  id?: any;
  children?: string | undefined;
  flexdirection?: string;
  color?: string;
  className?: string;
}

export interface faqdata {
  question: string;
  answer: string;
  questionclass?: string;
  answerclass?: string;
  icontype: string;
  iconclass?: string;
}

export interface header {
  noHeaderfooter?: string;
}

export interface headinginfo {
  headingmainclass?: string;
  testclass?: string;
  smtextclass?: string;
  smtext?: string;
  lgtextclass?: string;
  lgtext?: string;
  children?: ReactNode;
}

export interface inputselectdata {
  label?: string;
  optionname?: string;
  children?: ReactNode;
  val1?: string;
  val2?: string;
  className?: string;
}

export interface sidebar {
  sidebar: boolean;
  setsidebar?: any;
}

export interface swiperdetails {
  headingmainclass?: string;
  smtextclass?: string;
  smtext?: string;
  lgtextclass?: string;
  lgtext?: string;
  customtopbtnclass?: string;
  card?: string;
  custombttombtnclass?: string;
  topbtn?: boolean;
  bottombtn?: boolean;
  pagination?: boolean;
  testclass?: string;
  autoplay?: boolean;
  cardData?: product[];
  UserThoughtcarddata?: userthought[];
  SaleCard?: salecard[];
  SimilarProduct?: similarproduct[];
  blogpostcard?: blogpostcard[];
  OffersOnSimilarProducts?: offersonsimilarproducts[];
  route?: any;
}

export interface Inputrange {
  className?: string;
}

interface offersonsimilarproducts {
  id: number;
  image: string;
  productName: string;
  productsoffer: string;
}

export interface filterproducts {
  filter?: boolean;
}

export interface helpcentertype {
  className?: string;
  profilesidebar: any;
  closebtn?: () => void;
}

export interface order {
  className?: string;
  closebtn?: () => void;
  profilesidebar: any;
}

export interface wishlist {
  className: string;
  closebtn?: () => void;
  profilesidebar: any;
}

export interface policysectiontype {
  data: policydata;
}

export interface checkboxprops {
  value: string;
  color?: string;
  id: string;
  setItems: (items: string[]) => void;
  items: string[];
  className?: string;
  labelclass?: string;
}

export interface dealscardtype {
  card: string;
  data: any;
  openwritepopup?: () => void;
  openratingpopup?: () => void;
  opendeletepopup?: () => void;
  show?: boolean;
  save?: boolean;
  CreatenewList?: any;
  color?: boolean;
  openpopup?: () => void;
  closepopup?: () => void;

}

export interface icontype {
  type: string;
  className?: string;
  fill?: string;
}

export interface orderdetails {
  className?: string;
  closebtn?: () => void;
  orderdatils?: any;
}
export interface askquestion {
  closepopup?: () => void;
}

export interface orderdetails {
  orderdatils?: any;
  className?: string;
  closebtn?: () => void;
}

export interface Item {
  id: number;
  price: string;
  rate: string;
  total: string;
  availability: string;
  available: boolean;
}

export interface bank {
  id: number;
  name: string;
  logoSrc: string;
}

export interface areyousureprops {
  closepopup?: () => void;
  tittle?: string;
  buttontext?: string;
  cancelnewlist?: () => void;
  heading?: string;
  url?: string;
}


export interface orderitem {
  label: string;
  value: string;
  valueClass: string;
}

export interface ordersummaryprops {
  title: string;
  items: orderitem[];
  total: string;
  savings: string;
  customStyles?: string;
}

export interface datatype {
  fullName: string;
  age: number;
  city: string;
  landmark: string;
  mobile: number;
  pincode: number;
  state: string;
}

export interface couponcardprops {
  discount: string;
  extraDiscount: string;
  maxDiscount: string;
  expiryDate: string;
}

export interface ordercardprops {
  id: number;
  title: string;
  date: string;
  orderid: string;
  image: string;
}

export interface buttonpropshelpcenter {
  variant: "fasterDelivery" | "productInfo" | "cancelOrder";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface sortbydropdowntype {
  heading: string;
  children: React.ReactNode;
  className?: string;
  arrowImageClass?: string;
  width?: string;
}

export interface cardsoptiontype {
  addcard: boolean;
  setaddcard: boolean | undefined | any;
}

export interface loginuser {
  email: number;
  password: string;
}

export interface registeruser {
  firstname: string;
  lastname: string;
  email: string;
  mobileno: string;
  password: string;
  confirmpassword: string;
  policy: any
}

export interface forgetpassword {
  newpassword: string
  confirmpassword: string
}

export interface contactus {
  fullName: string
  email: string
  mobile: string
  subject: string
  description: string
  policy: boolean
}

export interface ratingsdata {
  "5_star": number;
  "4_star": number;
  "3_star": number;
  "2_star": number;
  "1_star": number;
}

export interface contactus {
  fullName: string
  email: string
  mobile: string
  subject: string
  description: string
  policy: boolean
}

export interface jobform {
  firstname: string
  lastname: string
  email: string
  mobile: number
  currentlocation: string
  gender: string
  resume: File
  coverletter: File
  description: string
}


export interface option {
  id: number;
  name: string;
  logo?: string;
}

export interface inputselect {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: option[];
  error?: string;
}

export interface wishlistpopup {
  setCreatenewlist?: any
  Createnewlist?: boolean
}

export interface applycouponstype {
  cancelcoupon?: () => void;
  data?: applycoupondatatype[]
}

export interface applycoupondatatype {
  checkboxValue: string;
  promotionText: string;
  offerExpiry: string;
}

export interface counterprops {
  start: number;
  end: number;
  duration: number;
  text: string;
  description: string;
  numbertext?: string
};


export interface breadcrumb {
  href: string;
  label: string;
}

export interface nextbreadcrumbprops {
  children?: ReactNode;
  bgcolor?: string;
  className?: string;
}

export interface OverlayProps {
  isOpen: boolean;
  onClose?: () => void;
}

export interface HeaderIconstype {
  wishitem?: number | any
  cartitem?: number | any
}

export interface ProductBottomTabtype {
  setfilter?: any
  filter?: boolean
  setsortby?: any
  sortby?: boolean
  grid: boolean
  setgrid?: any
}