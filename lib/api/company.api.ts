import { ICreateCompany } from "@/components/AllUsers/CompanyForm";
import { VeridoAPI } from "./axios";

export const createCompany = async (payload: ICreateCompany) => {
  const { data } = await VeridoAPI.post("/partner/create-company", payload);
  return data;
};
