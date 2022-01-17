import { SERVER_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TCommunity } from "@/types/index";

export const getCommunity = async (name: string): Promise<TCommunity> => {
  const { data } = await instance.get(SERVER_ROUTES.GET__COMMUNITY_ROUTE(name));

  return data;
};

export const useGetCommunity = (name: string) =>
  useQuery<TCommunity, Error>(["communities", name], () => getCommunity(name));
