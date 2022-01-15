import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { CreatePostInput } from "shared";

const useCreatePost = () =>
  useMutation((data: CreatePostInput) => instance.post("/posts", data));

export default useCreatePost;
