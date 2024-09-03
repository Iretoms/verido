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
export interface Customer {
  _id: string;
  name: string;
  phone: string;
  email: string;
  businessName: string;
  address1: string;
  address2: string;
  postCode: string;
  region: string;
  town: string;
  safeDelete: number;
  userID: string;
  localID: string;
  __v: number;
}
export interface Supplier {
  _id: string;
  name: string;
  phone: string;
  email: string;
  businessName: string;
  address1: string;
  address2: string;
  postCode: string;
  region: string;
  town: string;
  safeDelete: number;
  userID: string;
  localID: string;
  __v: number;
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
  business: AdminBusinessResponse[];
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
export interface PartnerStatData {
  all_users: {
    consultants: number;
    businesses: number;
  };
  money_in_v_money_out: MoneyInVsMoneyOut;
}
export interface ConsultantStatData {
  all_users: {
    consultants: number;
    businesses: number;
  };
  money_in_v_money_out: MoneyInVsMoneyOut;
}
export interface PartnerFullResponse {
  code: number;
  response: Partner;
  data: ConsultantStatData;
}
export interface ConsultantFullResponse {
  code: number;
  response: Consultant;
  data: PartnerStatData;
}
export interface Partner {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  status: boolean;
  partner_id: string;
  consultants: Consultant[];
  businesses: AdminBusinessResponse[];
  dateJoined: string;
  __v: number;
  token: string;
}

export interface AdminBusinessFullResponse {
  code: number;
  response: AdminBusinessResponse;
  data: AdminBusinessData;
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
  consultant: Consultant;
  messages: any[];
  suspended: boolean;
}
export interface ExpenseItem {
  _id: string;
  totalAmount: number;
}
export interface LabourItem {
  _id: string;
  totalAmount: number;
}
export interface AdminBusinessData {
  money_in_v_money_out: {
    total_money_in: any[];
    total_money_out: any[];
    money_in: {
      sales: any[];
      refundsReceived: any[];
      otherMoneyIn: any[];
      installments: any[];
    };
    expenses: {
      directMaterial: ExpenseItem[];
      directLabour: LabourItem[];
      overheadItemTransactions: any[];
      assets: any[];
      refundsGiven: any[];
      otherMoneyOut: any[];
      installments: any[];
    };
  };
  associates: {
    customers: any[];
    suppliers: any[];
  };
  company: {
    products: any[];
    assets: any[];
    overhead: any[];
    labour: any[];
    material: any[];
  };
}

export interface ICreateConsultantCreate {
  name: string;
  email: string;
  phone: string;
  password: string;
  partner_id: string;
  confirmPassword: string;
}
export interface IChangeConsultant {
  consultant_id: string;
  user_id: any;
}
export interface ICreatePartner {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}
export interface ICreateVideo {
  title: string;
  vidoeID: string;
  category: string;
}
export interface IUpdateVideo {
  title: string;
  vidoeID: string;
  category: string;
  id: string | undefined;
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

export interface IDashboardStatistics {
  all_users: UserCounts;
  verido_users: UserCounts;
  independent_users: Partial<UserCounts>;
  money_in_v_money_out: MoneyInVsMoneyOut;
}

export interface UserCounts {
  partners: number;
  consultants: number;
  businesses: number;
}

export interface MoneyInVsMoneyOut {
  total_money_in: MoneyTransaction[];
  total_money_out: MoneyTransaction[];
  money_in: MoneyIn;
  expenses: Expenses;
  subscription: MoneyTransaction[];
}

export interface MoneyTransaction {
  month: string
  totalAmount: number;
}

export interface MoneyIn {
  sales: MoneyTransaction[];
  refundsReceived: MoneyTransaction[];
  otherMoneyIn: MoneyTransaction[];
  installments: MoneyTransaction[];
}

export interface Expenses {
  directMaterial: MoneyTransaction[];
  directLabour: MoneyTransaction[];
  overheadItemTransactions: MoneyTransaction[];
  assets: MoneyTransaction[];
  refundsGiven: MoneyTransaction[];
  otherMoneyOut: MoneyTransaction[];
  installments: MoneyTransaction[];
}



