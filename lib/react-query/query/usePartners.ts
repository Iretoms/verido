import { useQuery } from "@tanstack/react-query";
import { fetchPartners , fetchPartnerById } from "@/lib/api/partners.api";
import { Partner } from "@/types";

export const usePartners = () => {
  return useQuery<Partner[], Error>({
    queryKey: ["partners"],
    queryFn: async () => {
      const response = await fetchPartners();
      return response.response;
    },
  });
};
export const usePartnerById = (id: string) => {
  return useQuery<Partner, Error>({
    queryKey: ["partner"],
    queryFn: async () => {
      const response = await fetchPartnerById(id);
      return response.response;
    },
  });
};
