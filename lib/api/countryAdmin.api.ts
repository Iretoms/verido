import { ICreateCountryAdmin } from "@/components/AllUsers/CountryAdminForm";
import { VeridoAPI } from "./axios";

export const createCountryAdmin = async (payload: ICreateCountryAdmin) => {
  const { data } = await VeridoAPI.post("/admin/create-country-admin" , payload);
  return data;
};
