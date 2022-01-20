import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { CreatePostInput } from "shared";

const useCreatePost = () =>
  useMutation((data: CreatePostInput) =>
    instance.post<CreatePostInput>(SERVER_ROUTES.CREATE__POST_ROUTE, data)
  );

export default useCreatePost;
