import { VeridoAPI } from "./axios";

export const getMe = async () => {
  const { data } = await VeridoAPI.get("/admin/me");

  return data;
};
