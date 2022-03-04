import { useMutation, useQueryClient } from "react-query";
import { API_ROUTES } from "shared/routes";

import { instance } from "@/lib/axios";

const useTogglePostLike = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.post(API_ROUTES.CREATE__POST_LIKE_ROUTE(postId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["communities"]);
      },
    }
  );
};

export default useTogglePostLike;
