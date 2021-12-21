import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TUser } from "@/types/user";

export const getUser = async (username: string): Promise<TUser> => {
  const { data } = await instance.get(`/users/${username}`);

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<TUser, Error>(["user", username], () => getUser(username));
