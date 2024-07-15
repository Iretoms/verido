import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import {
  ICreateConsultantCreate,

} from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { createConsultants } from "@/lib/api/consultants.api";

const useConsultant = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createConsultantMutation = useMutation({
    mutationFn: async (payload: ICreateConsultantCreate) => {
      const response = await createConsultants(payload);
      return response.response;
    },
    onSuccess: (data) => {},
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['consultants'],
      });
    },
  });

  return {
    createConsultantMutation,
  };
};

export default useConsultant;
