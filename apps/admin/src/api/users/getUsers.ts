import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TUser } from "@/types/index";

export const getUsers = async () => {
  const { data } = await instance.get<TUser[]>("/admin/users");

  return data;
};

export const useGetUsers = () =>
  useQuery<TUser[], Error>(["users"], () => getUsers());
