import axios from "axios";
import { VeridoAPI } from "./axios";
import { IRecoverPassword, IUsers, IUsersReg, IUpdatePassword } from "@/types";

export const login = async (payload: IUsers) => {
  const { data } = await VeridoAPI.post("/admin-login", payload);

  return data;
};
export const register = async (payload: IUsersReg) => {
  const { data } = await VeridoAPI.post("/admin-register", payload);

  return data;
};
export const recoverPassword = async (payload: IRecoverPassword) => {
  const { data } = await VeridoAPI.post("/admin-reset-password", payload);

  return data;
};
export const updatePassword = async (payload: IUpdatePassword) => {
  const { data } = await VeridoAPI.post("/admin-password-update", payload);

  return data;
};
