import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api/users.api";
import { isLoggedIn } from "../mutations/useAuth";
import { CurrentUserProfile } from "@/types";



export const useCurrentUser = () => {
  return useQuery<CurrentUserProfile | null, Error>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await getMe();
      return response.response;
    },
  });
};

