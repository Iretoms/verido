import { useQuery } from "@tanstack/react-query";
import { IVideo } from "@/types";
import { fetchVideos } from "@/lib/api/video.api";

export const useVideos = () => {
  return useQuery<IVideo[], Error>({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await fetchVideos();
      return response.response;
    },
  });
};

