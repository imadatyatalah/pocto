import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TSignUpData } from "@/types/index";

const useSignUp = () =>
  useMutation((data: TSignUpData) => instance.post(`/auth/signup`, data), {
    onSuccess: () => Router.push("/"),
  });

export default useSignUp;
