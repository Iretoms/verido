import { VeridoAPI } from "./axios";

export const fetchDashboardStats = async () => {
  const { data } = await VeridoAPI.get("/dashboard/stat");

  return data;
};
