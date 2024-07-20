import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useCustomToast from "@/lib/hooks/useCustomToast";

import { IChangeConsultant, ICreateConsultantCreate } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import {
  createConsultants,
  changeConsultant,
  suspendConsultant,
  activateConsultant,
} from "@/lib/api/consultants.api";

const useConsultant = () => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const router = useRouter();

  const createConsultantMutation = useMutation({
    mutationFn: async (payload: ICreateConsultantCreate) => {
      const response = await createConsultants(payload);
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
      showToast("Something went wrong", errDetail, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["consultants"],
      });
    },
  });
  const changeConsultantMutation = useMutation({
    mutationFn: async (payload: IChangeConsultant) => {
      const response = await changeConsultant(payload);
      return response.response;
    },
    onSuccess: (data) => {
      showToast("Success!", "Consultant Changes.", "success");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
      showToast("Something went wrong", errDetail, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["change-consultants"],
      });
    },
  });
  const suspendConsultantMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await suspendConsultant(id);
      return response.response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["consultants"],
      });
      showToast("Success!", "Consultant Suspended.", "success");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
      showToast("Something went wrong", errDetail, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["consultants"],
      });
    },
  });
  const activateConsultantMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await activateConsultant(id);
      return response.response;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["consultants"],
      });
      showToast("Success!", "Consultant Activated.", "success");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
      showToast("Something went wrong", errDetail, "error");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["consultants"],
      });
    },
  });

  return {
    createConsultantMutation,
    changeConsultantMutation,
    suspendConsultantMutation,
    activateConsultantMutation,
  };
};

export default useConsultant;
