import { IChangeConsultant, ICreateConsultantCreate } from "@/types";
import { VeridoAPI } from "./axios";

export const fetchConsultants = async () => {
  const { data } = await VeridoAPI.get("/admin/super-agent");

  return data;
};
export const createConsultants = async (payload: ICreateConsultantCreate) => {
  const { data } = await VeridoAPI.post("/consultant/create" , payload);

  return data;
};
export const changeConsultant = async (payload: IChangeConsultant) => {
  const { data } = await VeridoAPI.post("/admin-business/change-consultant" , payload);

  return data;
};
export const suspendConsultant = async (id:string) => {
  const { data } = await VeridoAPI.get(`/consultant/suspend/${id}`);

  return data;
};
export const activateConsultant = async (id:string) => {
  const { data } = await VeridoAPI.get(`/consultant/activate/${id}`);

  return data;
};

export const fetchConsultantById = async (id: string) => {
  const { data } = await VeridoAPI.get(`/admin/consultants/${id}`);
  return data;
};
