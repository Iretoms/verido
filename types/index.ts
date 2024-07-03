export interface Product {
  name: string;
  cost_price: number;
  selling_price: number;
  forecast_month: string;
  units: number;
}

export interface BusinessOwner {
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
  expires: string;
  products: Product[];
}

export interface Consultant {
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
