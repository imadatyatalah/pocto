import { API_ROUTES } from "shared/routes";
import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

export const getMyCommunities = async () => {
  const { data } = await instance.get(API_ROUTES.GET_MY_COMMUNITIES);

  return data;
};

export const useGetMyCommunities = () =>
  useQuery(["current_user", "communities"], () => getMyCommunities());
