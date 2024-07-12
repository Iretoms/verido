export interface IUsers {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface IUsersReg {
  fullName: string;
  email: string;
  phoneNumber: string;
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
interface Transaction {

}

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
  id: number;
  enterprise_name: string;
  name: string;
  institution: string;
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
  business_owners: BusinessOwner[];
}

// export interface Consultant {
//   _id: string;
//   username: string;
//   password: string;
//   email: string;
//   consultant_id: string;
//   mobile_number: string;
//   rating: number;
//   ratedBy: number;
//   business: string[];
//   messages: string[];
//   __v: number;
//   token: string;
//   suspended: boolean;
//   dateJoined: string;
//   businessName: string;
//   institution: string;
//   status: string;
//   updatedAt: string;
// }

export interface AdminBusinessResponse {
  money_in: {
    other_transaction: Transaction[];
    refund: Transaction[];
    material_assign: Transaction[];
    labour_assign: Transaction[];
  };
  money_out: {
    direct_material_purchase: Transaction[];
    credit_purchase: Transaction[];
    direct_labour: Transaction[];
    overhead: Transaction[];
    other_transaction: Transaction[];
    refund_given: Transaction[];
    asset_purchase: Transaction[];
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
  institution: any[];
  videos: any[];
  consultant: Consultant[];
  messages: any[];
  suspended: boolean;
}
