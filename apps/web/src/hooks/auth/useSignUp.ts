import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { SignupInput } from "shared";

const useSignUp = () =>
  useMutation((data: SignupInput) => instance.post("/auth/signup", data), {
    onSuccess: () => Router.push("/"),
  });

export default useSignUp;
