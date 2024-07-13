import { useQuery } from "@tanstack/react-query";
import { fetchBusiness , fetchBusinessById } from "@/lib/api/businessOwners.api";
import { AdminBusinessResponse, BusinessOwner } from "@/types";

export const useBusiness = () => {
  return useQuery<AdminBusinessResponse[], Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusiness();
      return response.response;
    },
  });
};
export const useBusinessById = (id: string) => {
  return useQuery<AdminBusinessResponse, Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusinessById(id);
      return response.response;
    },
  });
};
