import { useMutation, useQueryClient } from "react-query";
import { SERVER_ROUTES } from "shared/routes";

import { instance } from "@/lib/axios";

const useToggleCommentLike = (commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.post(SERVER_ROUTES.CREATE__COMMENT_LIKE_ROUTE(commentId)),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
};

export default useToggleCommentLike;
