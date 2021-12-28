import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { SigninInput } from "shared";

const useSignIn = () =>
  useMutation((data: SigninInput) => instance.post("/auth/signin", data), {
    onSuccess: () => Router.push("/"),
  });

export default useSignIn;
