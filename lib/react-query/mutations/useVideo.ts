import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ICreateVideo } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

import { createVideos } from "@/lib/api/video.api";

const useVideos = () => {
  const queryClient = useQueryClient();

  const createVideoMutation = useMutation({
    mutationFn: async (payload: ICreateVideo) => {
      const response = await createVideos(payload);
      return response.response;
    },
    onSuccess: (data) => {},
    onError: (error) => {
      let errDetail = error.message;
      if (error instanceof AxiosError) {
        errDetail = error?.response?.data?.message;
        if (Array.isArray(errDetail)) {
          errDetail = errDetail[0];
        }
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
  });

  return {
    createVideoMutation,
  };
};

export default useVideos;
