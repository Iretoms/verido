import axios from "axios";
import { redirect } from "next/navigation";

export const BASE_URL = "https://bknd.verido.app";


export const VeridoAPI = axios.create({
  baseURL: BASE_URL,
});

VeridoAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

VeridoAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (
      error?.response &&
      error?.response?.status === 401 &&
      !String(error?.response?.config?.url).includes("/signin")
    ) {
      localStorage.removeItem("access_token");
    }
    return Promise.reject(error);
  }
);
