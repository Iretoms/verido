import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {  ICreatePartner } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { createPartners } from "@/lib/api/partners.api";
import useCustomToast from "@/lib/hooks/useCustomToast";

const usePartner = () => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast()

  const createPartnerMutation = useMutation({
    mutationFn: async (payload: ICreatePartner) => {
      const response = await createPartners(payload);
      return response.response;
    },
    onSuccess: (data) => {
       showToast("Success!", "Consultant Created.", "success");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
       showToast("Someone went wrong", errDetail, "error");
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
