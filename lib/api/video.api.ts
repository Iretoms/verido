import { ICreateVideo, IUpdateVideo } from "@/types";
import { VeridoAPI } from "./axios";

export const fetchVideos = async () => {
  const { data } = await VeridoAPI.get("/admin/videos");

  return data;
};
export const createVideos = async (payload: ICreateVideo) => {
  const { data } = await VeridoAPI.post("/admin/videos/create", payload);

  return data;
};
export const updateVideos = async ({payload , id}: IUpdateVideo) => {
  const { data } = await VeridoAPI.post(`/admin/videos/update/${id}`, {payload , id});

  return data;
};


