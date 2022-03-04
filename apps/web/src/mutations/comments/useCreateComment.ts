import { useMutation, useQueryClient } from "react-query";
import { API_ROUTES } from "shared/routes";
import { CreateCommentInput } from "shared";

import { instance } from "@/lib/axios";

const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: CreateCommentInput) =>
      instance.post<CreateCommentInput>(
        API_ROUTES.CREATE__COMMENT_ROUTE(postId),
        data
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts", postId]);
      },
    }
  );
};

export default useCreateComment;
