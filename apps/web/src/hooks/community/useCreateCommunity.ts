import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TCreateCommunityData } from "@/types/index";

const useCreateCommunity = () =>
  useMutation((data: TCreateCommunityData) =>
    instance.post(`/communities`, data)
  );

export default useCreateCommunity;
