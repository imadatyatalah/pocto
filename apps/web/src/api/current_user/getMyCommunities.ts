import { API_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TCommunity } from "@/types/index";

export const getMyCommunities = async () => {
  const { data } = await instance.get<TCommunity[]>(
    API_ROUTES.GET_MY_COMMUNITIES
  );

  return data;
};

export const useGetMyCommunities = () =>
  useQuery<TCommunity[], Error>(["current_user", "communities"], () =>
    getMyCommunities()
  );
