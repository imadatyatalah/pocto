import { API_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TPost } from "@/types/index";

export const getPost = async (id: string) => {
  const { data } = await instance.get<TPost>(API_ROUTES.GET__POST_ROUTE(id));

  return data;
};

export const useGetPost = (id: string) =>
  useQuery<TPost, Error>(["posts", id], () => getPost(id));
