import { useQuery } from "@tanstack/react-query";
import { fetchCompany } from "@/lib/api/company.api";

export const useCompany = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetchCompany();
      return response;
    },
  });
};
