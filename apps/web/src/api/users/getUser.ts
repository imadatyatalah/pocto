import { SERVER_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TUser } from "@/types/index";

export const getUser = async (username: string): Promise<TUser> => {
  const { data } = await instance.get(SERVER_ROUTES.GET__USER_ROUTE(username));

  return data;
};

export const useGetUser = (username: string) =>
  useQuery<TUser, Error>(["users", username], () => getUser(username));
