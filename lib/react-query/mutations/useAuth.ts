import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import { login, recoverPassword, register } from "@/lib/api/auth.api";
import { IRecoverPassword, IUsers, IUsersReg } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

const isLoggedIn = () => {
  return (
    localStorage.getItem("access_token") !== null ||
    Cookies.get("access_token") !== undefined
  );
};

const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (payload: IUsers) => {
      const response = await login(payload);
      return response.response;
    },
    onSuccess: (data) => {
      const { token } = data;
      localStorage.setItem("access_token", token);
      Cookies.set("access_token", token, { expires: 1 });
      router.push("/");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
    },
  });

  const recoverPasswordMutation = useMutation({
    mutationFn: async (payload: IRecoverPassword) => {
      const response = await recoverPassword(payload);
      return response.response;
    },
    onSuccess: (data) => {
      router.push("/signin");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: IUsersReg) => {
      const response = await register(payload);
      return response.response;
    },
    onSuccess: (data) => {
      router.push("/");
    },
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
    },
  });

  const logout = () => {
    localStorage.removeItem("access_token");
    Cookies.remove("access_token");
    queryClient.invalidateQueries();
    router.push("/signin");
  };

  return {
    loginMutation,
    registerMutation,
    recoverPasswordMutation,
    logout,
  };
};

export { isLoggedIn };

export default useAuth;
