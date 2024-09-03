import { ICreateCompany } from "@/components/AllUsers/CompanyForm";
import { VeridoAPI } from "./axios";

export const createCompany = async (payload: ICreateCompany) => {
  const { data } = await VeridoAPI.post("/partner/create-company", payload);
  return data;
};

export const fetchCompany = async () => {
  const { data } = await VeridoAPI.get("/partner/fetch-companies");

  return data;
};
