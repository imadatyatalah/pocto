import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { CreateCommunityInput } from "shared";

const useCreateCommunity = () =>
  useMutation((data: CreateCommunityInput) =>
    instance.post("/communities", data)
  );

export default useCreateCommunity;
