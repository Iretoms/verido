import { useQuery } from "@tanstack/react-query";
import { fetchCountryAdmin } from "@/lib/api/countryAdmin.api";

export const useCountryAdmin = () => {
  return useQuery({
    queryKey: ["country_admin"],
    queryFn: async () => {
      const response = await fetchCountryAdmin();
      return response;
    },
  });
};
