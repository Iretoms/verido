import { useQuery } from "@tanstack/react-query";
import {
  fetchCountryAdmin,
  fetchCountryAdminById,
} from "@/lib/api/countryAdmin.api";

export const useCountryAdmin = () => {
  return useQuery({
    queryKey: ["country_admin"],
    queryFn: async () => {
      const response = await fetchCountryAdmin();
      return response;
    },
  });
};

export const useCountryAdminById = (id: string) => {
  return useQuery<any>({
    queryKey: ["country_admin"],
    queryFn: async () => {
      const response = await fetchCountryAdminById(id);
      return response
    },
  });
};
