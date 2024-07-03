import { VeridoAPI } from "./axios";

export const fetchConsultants = async () => {
  const { data } = await VeridoAPI.get("/consultants");

  return data;
};

export const fetchConsultantById = async (id: number) => {
  const { data } = await VeridoAPI.get(`/consultants/${id}`);
  return data;
};
