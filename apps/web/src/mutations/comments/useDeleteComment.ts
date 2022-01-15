import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeleteComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => instance.delete(`/comments/${commentId}`), {
    onSuccess: () => {
      toast.success("Your comment was deleted successfully!");

      queryClient.invalidateQueries(["posts", postId]);
    },
  });
};

export default useDeleteComment;
