import { useQuery } from "@tanstack/react-query";
import { fetchBusinessOwners , fetchBusinessById } from "@/lib/api/businessOwners.api";
import { BusinessOwner } from "@/types";

export const useBusiness = () => {
  return useQuery<BusinessOwner[], Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusinessOwners();
      return response;
    },
  });
};
export const useBusinessById = (id: number) => {
  return useQuery<BusinessOwner, Error>({
    queryKey: ["business"],
    queryFn: async () => {
      const response = await fetchBusinessById(id);
      return response;
    },
  });
};
