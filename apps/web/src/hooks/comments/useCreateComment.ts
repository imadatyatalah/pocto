import { useMutation, useQueryClient } from "react-query";
import { CreateCommentInput } from "shared";

import { instance } from "@/lib/axios";

const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: CreateCommentInput) => instance.post(`/comments/${postId}`, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts", postId]);
      },
    }
  );
};

export default useCreateComment;
