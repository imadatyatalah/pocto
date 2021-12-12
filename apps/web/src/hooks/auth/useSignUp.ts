import { useMutation } from "react-query";
import Router from "next/router";

import { instance } from "@/lib/axios";

import type { TSignUpData } from "@/types/auth/signUp";

const useSignUp = () =>
  useMutation((data: TSignUpData) => instance.post(`/auth/signup`, data), {
    onSuccess: () => Router.push("/"),
  });

export default useSignUp;
