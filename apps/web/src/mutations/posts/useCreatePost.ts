import Router from "next/router";

import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { AxiosResponse } from "axios";
import type { CreatePostInput } from "shared";

import type { TPost } from "@/types/index";

const useCreatePost = () =>
  useMutation(
    (data: CreatePostInput) =>
      instance.post<CreatePostInput, AxiosResponse<TPost>>(
        SERVER_ROUTES.CREATE__POST_ROUTE,
        data
      ),
    {
      onSuccess: ({ data }) => {
        Router.push(`/post/${data.id}`);
      },
    }
  );

export default useCreatePost;
