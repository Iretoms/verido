import { VeridoAPI } from "./axios";

export const fetchConsultants = async () => {
  const { data } = await VeridoAPI.get("/admin/consultants");

  return data;
};

export const fetchConsultantById = async (id: string) => {
  const { data } = await VeridoAPI.get(`/admin/consultants/${id}`);
  return data;
};
