export interface IUsers {
  email: string;
  password: string;
}

export interface CurrentUserProfile {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  status: boolean;
  dateJoined: string;
  __v: number;
  token: string;
}
export interface IUsersReg {
  name: string;
  email: string;
  phone: string;
  partner_id: string;
  password: string;
  confirmPassword: string;
}
export interface IRecoverPassword {
  email: string;
}
export interface IUpdatePassword {
  email: string;
  confirm_password: string;
}

export interface Product {
  id: number;
  name: string;
  cost_price: number;
  selling_price: number;
  forecast_month: string;
  units: number;
}

export interface BusinessOwner {
  id: number;
  enterprise_name: string;
  name: string;
  institution: string;
  sector: string;
  currency: string;
  date_joined: string;
  status: string;
  admin: string;
  email: string;
  phone: string;
  about: string;
  company_info: string;
  rating: number;
  dob: string;
  address: string;
  expires: string;
  products: Product[];
  consultants: Consultant[];
}
interface Transaction {}

export interface SubscriptionStatus {
  _id: string;
  type: string;
  status: boolean;
  started: string;
  expires: string;
  __v: number;
}

export interface Business {
  market_products: any[];
  _id: string;
  name: string;
  sector: string;
  type: string;
  currency: string;
  currencySymbol: string;
  __v: number;
}

export interface Consultant {
  _id: string;
  username: string;
  password: string;
  email: string;
  consultant_id: string;
  mobile_number: string;
  rating: number;
  ratedBy: number;
  business: string[];
  messages: string[];
  __v: number;
  token: string;
  suspended: boolean;
  dateJoined: string;
  businessName: string;
  institution: string;
  status: string;
  updatedAt: string;
}
export interface Partners {
  _id: string;
  username: string;
  password: string;
  email: string;
  consultant_id: string;
  mobile_number: string;
  rating: number;
  ratedBy: number;
  business: string[];
  messages: string[];
  __v: number;
  token: string;
  suspended: boolean;
  dateJoined: string;
  businessName: string;
  institution: string;
  status: string;
  updatedAt: string;
}
export interface Partner {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  status: boolean;
  consultants: string[];
  dateJoined: string;
  __v: number;
  token: string;
}

export interface AdminBusinessResponse {
  money_in: {
    other_transaction: any[];
    refund: any[];
    material_assign: any[];
    labour_assign: any[];
  };
  money_out: {
    direct_material_purchase: any[];
    credit_purchase: any[];
    direct_labour: any[];
    overhead: any[];
    other_transaction: any[];
    refund_given: any[];
    asset_purchase: any[];
  };
  market_products: any[];
  _id: string;
  full_name: string;
  token: string;
  photoUrl: string | null;
  dateJoined: string;
  phoneVerified: boolean;
  idVerified: boolean;
  email: string;
  database: string;
  username: string;
  organization_id: string | null;
  customer: any[];
  product: any[];
  suppliers: any[];
  subscription_status: SubscriptionStatus;
  business: Business;
  password: string;
  __v: number;
  stripeCustomerID: string;
  institution: Partners[];
  videos: any[];
  consultant: Consultant[];
  messages: any[];
  suspended: boolean;
}

export interface ICreateConsultantCreate {
  name: string;
  email: string;
  phone: string;
  password: string;
  partner_id: string;
  confirmPassword: string;
}
export interface ICreatePartner {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface ICreateVideo {
  title: string;
  vidoeID: string;
  category: string;
}
export interface IUpdateVideo {
  payload: IVideo;
  id: string;
}
export interface IVideo {
  _id: string;
  title: string;
  vidoeID: string;
  category: string;
}

export interface ICountry {
  country: string;
  partners: number;
  consultants: number;
  businesses: number;
  subscribers: number;
}
