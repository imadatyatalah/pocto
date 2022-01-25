import { SERVER_ROUTES } from "shared/routes";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeletePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    () => instance.delete(SERVER_ROUTES.DELETE__POST_ROUTE(postId)),
    {
      onSuccess: () => {
        toast.success("Your post was deleted successfully!");

        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["users"]);
        queryClient.invalidateQueries(["communities"]);
      },
    }
  );
};

export default useDeletePost;
