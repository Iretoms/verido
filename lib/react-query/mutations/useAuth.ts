import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { login, recoverPassword, register, logout } from "@/lib/api/auth.api";
import { IRecoverPassword, IUsers, IUsersReg } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import useCustomToast from "@/lib/hooks/useCustomToast";

const isLoggedIn = () => {
  return (
    localStorage.getItem("access_token") !== null ||
    Cookies.get("access_token") !== undefined
  );
};

const useAuth = () => {
  const queryClient = useQueryClient();
  const showToast = useCustomToast();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (payload: IUsers) => {
      const response = await login(payload);
      return {
        response: response.response,
        token: response.token,
      };
    },
    onSuccess: (data) => {
      const { token, response } = data;
      localStorage.setItem("access_token", token.accessToken);
      localStorage.setItem("user_role", response.role);
      Cookies.set("access_token", token.accessToken);
      Cookies.set("user_role", response.role);
      router.push("/");
      showToast("Success!", "Sign in Successful.", "success");
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
  });

  const recoverPasswordMutation = useMutation({
    mutationFn: async (payload: IRecoverPassword) => {
      const response = await recoverPassword(payload);
      return response.response;
    },
    onSuccess: (data) => {
      const { token } = data;
      localStorage.setItem("access_token", token);
      Cookies.set("access_token", token);
      showToast("Success!", "Password recovery is Successful.", "success");

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
      showToast("Something went wrong", errDetail, "error");
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: IUsersReg) => {
      const response = await register(payload);
      return response.response;
    },
    onSuccess: (data) => {
      showToast("Success!", "Registration Successful.", "success");
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
      showToast("Something went wrong", errDetail, "error");
    },
  });
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await logout();
    },
    onSuccess: (data) => {
      showToast("Success!", "Logout.", "success");
      localStorage.removeItem('access_Token')
      localStorage.removeItem('user_role')
      Cookies.remove("access_token");
      Cookies.remove("user_role");
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
      showToast("Something went wrong", errDetail, "error");
    },
  });





  return {
    loginMutation,
    registerMutation,
    recoverPasswordMutation,
    logoutMutation,
  };
};

export { isLoggedIn };

export default useAuth;
