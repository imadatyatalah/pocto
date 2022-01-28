import { useMutation, useQueryClient } from "react-query";
import { SERVER_ROUTES } from "shared/routes";

import { instance } from "@/lib/axios";

const useTogglePostLike = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.post(SERVER_ROUTES.CREATE__POST_LIKE_ROUTE(postId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["communities"]);
      },
    }
  );
};

export default useTogglePostLike;
