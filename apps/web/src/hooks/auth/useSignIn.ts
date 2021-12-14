import { useMutation } from "react-query";
import Router from "next/router";

import { instance } from "@/lib/axios";

import type { TSignInData } from "@/types/index";

const useSignIn = () =>
  useMutation((data: TSignInData) => instance.post(`/auth/signin`, data), {
    onSuccess: () => Router.push("/"),
  });

export default useSignIn;
