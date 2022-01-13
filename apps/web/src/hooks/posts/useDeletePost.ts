import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeletePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => instance.delete(`/posts/${postId}`), {
    onSuccess: () => {
      toast.success("Your post was deleted successfully!");

      queryClient.invalidateQueries(["posts"]);
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useDeletePost;
