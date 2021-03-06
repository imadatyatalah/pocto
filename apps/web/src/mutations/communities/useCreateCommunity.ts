import { API_ROUTES } from "shared/routes";
import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { CreateCommunityInput } from "shared";

const useCreateCommunity = () =>
  useMutation((data: CreateCommunityInput) =>
    instance.post<CreateCommunityInput>(
      API_ROUTES.CREATE__COMMUNITY_ROUTE,
      data
    )
  );

export default useCreateCommunity;
