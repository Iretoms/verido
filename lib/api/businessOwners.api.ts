import { VeridoAPI } from "./axios";

export const fetchBusiness = async () => {
  const { data } = await VeridoAPI.get("/admin-business");

  return data;
};

export const fetchBusinessById = async (id: string) => {
  const { data } = await VeridoAPI.get(`/admin-business/${id}`);
  return data;
};
