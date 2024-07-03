import { useQuery } from "@tanstack/react-query";
import { fetchConsultants } from "@/lib/api/consultants.api";
import { Consultant } from "@/types";

export const useConsultants = () => {
  return useQuery<Consultant[], Error>({
    queryKey: ['consultants'],
    queryFn: async () => {
      const response = await fetchConsultants();
      return response;
    },
  });
};
