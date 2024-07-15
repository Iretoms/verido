import { VeridoAPI } from "./axios";

export const fetchPartners = async () => {
  const { data } = await VeridoAPI.get("/admin/partners");

  return data;
};

export const fetchPartnerById = async (id: string) => {
  const { data } = await VeridoAPI.get(`/admin/partners/${id}`);
  return data;
};
