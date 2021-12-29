import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TPost } from "@/types/index";

export const getPosts = async (): Promise<TPost[]> => {
  const { data } = await instance.get("/posts");

  return data;
};

export const useGetPosts = () =>
  useQuery<TPost[], Error>(["posts"], () => getPosts());
