import { useQuery } from "@tanstack/react-query";
import { fetchCompany, fetchCompanyById } from "@/lib/api/company.api";

export const useCompany = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetchCompany();
      return response;
    },
  });
};

export const useCompanyById = (id: string) => {
  return useQuery<any>({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetchCompanyById(id);
      return response;
    },
  });
};
