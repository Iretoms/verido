import { VeridoAPI } from "./axios";

export const fetchConsultants = async () => {
  const { data } = await VeridoAPI.get("/consultants");

  return data;
};
