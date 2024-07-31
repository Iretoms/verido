import { useQuery } from "@tanstack/react-query";
import { fetchBusiness , fetchBusinessById } from "@/lib/api/businessOwners.api";
import { AdminBusinessResponse, AdminBusinessFullResponse } from "@/types";

export const useBusiness = () => {
  return useQuery<AdminBusinessFullResponse[], Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusiness();
      return response.response;
    },
  });
};
export const useBusinessById = (id: string) => {
  return useQuery<AdminBusinessFullResponse, Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusinessById(id);
      return response;
    },
  });
};
