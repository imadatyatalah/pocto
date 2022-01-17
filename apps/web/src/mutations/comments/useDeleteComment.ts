import { useMutation, useQueryClient } from "react-query";
import { SERVER_ROUTES } from "shared/routes";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeleteComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.delete(SERVER_ROUTES.DELETE__COMMENT_ROUTE(commentId)),
    {
      onSuccess: () => {
        toast.success("Your comment was deleted successfully!");

        queryClient.invalidateQueries(["posts", postId]);
      },
    }
  );
};

export default useDeleteComment;
