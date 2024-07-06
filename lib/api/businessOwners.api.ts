import { VeridoAPI } from "./axios";

export const fetchBusinessOwners = async () => {
  const { data } = await VeridoAPI.get("/businessOwners");

  return data;
};

export const fetchBusinessById = async (id: number) => {
  const { data } = await VeridoAPI.get(`/businessOwners/${id}`);
  return data;
};
