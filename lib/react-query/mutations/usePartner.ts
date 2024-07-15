import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { ICreateConsultantCreate , ICreatePartner } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { createConsultants } from "@/lib/api/consultants.api";
import { createPartners } from "@/lib/api/partners.api";

const usePartner = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createPartnerMutation = useMutation({
    mutationFn: async (payload: ICreatePartner) => {
      const response = await createPartners(payload);
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
        queryKey: ["partners"],
      });
    },
  });

  return {
    createPartnerMutation,
  };
};

export default usePartner;
