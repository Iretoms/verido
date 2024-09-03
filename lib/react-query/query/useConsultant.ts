import { useQuery } from "@tanstack/react-query";
import {
  fetchConsultants,
  fetchConsultantById,
} from "@/lib/api/consultants.api";
import { Consultant, ConsultantStatData } from "@/types";

export const useConsultants = () => {
  return useQuery<Consultant[], Error>({
    queryKey: ["consultants"],
    queryFn: async () => {
      const response = await fetchConsultants();
      return response.response;
    },
  });
};
export const useConsultantById = (id: string) => {
  return useQuery<{ response: Consultant; data: ConsultantStatData }, Error>({
    queryKey: ["consultant"],
    queryFn: async () => {
      const response = await fetchConsultantById(id);
      return response;
    },
  });
};
