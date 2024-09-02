import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useCustomToast from "@/lib/hooks/useCustomToast";

import { useQueryClient } from "@tanstack/react-query";
import { createCompany } from "@/lib/api/company.api";
import { createCountryAdmin } from "@/lib/api/countryAdmin.api";
import { createSuperAgents } from "@/lib/api/superAgent.api";
import { ICreateCountryAdmin } from "@/components/AllUsers/CountryAdminForm";
import { ICreateSuperAgent } from "@/components/AllUsers/SuperAgentForm";
import { ICreateCompany } from "@/components/AllUsers/CompanyForm";

const useUser = () => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();

  const createCountryAdminMutation = useMutation({
    mutationFn: async (payload: ICreateCountryAdmin) => {
      const response = await createCountryAdmin(payload);
      return response.response;
    },
    onSuccess: (data) => {
      showToast("Success!", "Country Admin Created", "success");
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
        queryKey: ["country_admin"],
      });
    },
  });

  const createSuperAgentMutation = useMutation({
    mutationFn: async (payload: ICreateSuperAgent) => {
      const response = await createSuperAgents(payload);
      return response.response;
    },
    onSuccess: (data) => {
      showToast("Success!", "Super Agent Created", "success");
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
        queryKey: ["super_agent"],
      });
    },
  });
  const createCompanytMutation = useMutation({
    mutationFn: async (payload: ICreateCompany) => {
      const response = await createCompany(payload);
      return response.response;
    },
    onSuccess: (data) => {
      showToast("Success!", "Company Created", "success");
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
        queryKey: ["company"],
      });
    },
  });

  return {
    createCountryAdminMutation,
    createSuperAgentMutation,
    createCompanytMutation,
  };
};

export default useUser;
