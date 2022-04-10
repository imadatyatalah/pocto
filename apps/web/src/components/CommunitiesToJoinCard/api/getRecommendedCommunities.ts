import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

import type { TSimpleCommunity } from "@/types/index";

export const getRecommendedCommunities = async () => {
  const { data } = await instance.get<TSimpleCommunity[]>(
    "/current_user/recommended_communities"
  );

  return data;
};

export const useGetRecommendedCommunities = () =>
  useQuery(["current_user", "recommended_communities"], () =>
    getRecommendedCommunities()
  );
