export interface Product {
  id:number
  name: string;
  cost_price: number;
  selling_price: number;
  forecast_month: string;
  units: number;
}

export interface BusinessOwner {
  id:number
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
  consultants: Consultant[]
}

export interface Consultant {
  id:number
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
