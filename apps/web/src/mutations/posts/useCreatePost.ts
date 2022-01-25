import { SERVER_ROUTES } from "shared/routes";
import { useMutation, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

import type { AxiosResponse } from "axios";
import type { CreatePostInput } from "shared";

import type { TPost } from "@/types/index";

const useCreatePost = (communityName?: string) => {
  const queryClient = useQueryClient();

  const createPostRoute = communityName
    ? `${SERVER_ROUTES.CREATE__POST_ROUTE}/${communityName}`
    : SERVER_ROUTES.CREATE__POST_ROUTE;

  return useMutation(
    (data: CreatePostInput) =>
      instance.post<CreatePostInput, AxiosResponse<TPost>>(
        createPostRoute,
        data
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        queryClient.invalidateQueries(["communities", communityName]);
      },
    }
  );
};

export default useCreatePost;
