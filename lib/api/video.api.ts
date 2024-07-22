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
export const deleteVideo = async (id:string) => {
  const { data } = await VeridoAPI.delete(`admin/videos/${id}`);

  return data;
};
export const updateVideos = async ({
  id,
  title,
  vidoeID,
  category,
}: IUpdateVideo) => {
  const { data } = await VeridoAPI.post(`/admin/videos/update/${id}`, {
    title,
    vidoeID,
    category,
  });

  return data;
};


