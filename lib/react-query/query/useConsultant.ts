import { useQuery } from "@tanstack/react-query";
import { fetchConsultants , fetchConsultantById } from "@/lib/api/consultants.api";
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
export const useConsultantById = (id:number) => {
  return useQuery<Consultant, Error>({
    queryKey: ['consultant'],
    queryFn: async () => {
      const response = await fetchConsultantById(id);
      return response;
    },
  });
};
