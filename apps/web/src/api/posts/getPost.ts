import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TPost } from "@/types/index";

export const getPost = async (id: string): Promise<TPost> => {
  const { data } = await instance.get(`/posts/${id}`);

  return data;
};

export const useGetPost = (id: string) =>
  useQuery<TPost, Error>(["posts", id], () => getPost(id));
