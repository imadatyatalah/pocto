import { API_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TPost } from "@/types/index";

export const getPosts = async () => {
  const { data } = await instance.get<TPost[]>(API_ROUTES.GET__POSTS_ROUTE);

  return data;
};

export const useGetPosts = () =>
  useQuery<TPost[], Error>(["posts"], () => getPosts());
