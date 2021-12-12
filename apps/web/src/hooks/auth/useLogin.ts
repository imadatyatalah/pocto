import { useMutation } from "react-query";
import Router from "next/router";

import { instance } from "@/lib/axios";

import type { TLoginData } from "@/types/auth/login";

const useLogin = () =>
  useMutation((data: TLoginData) => instance.post(`/auth/login`, data), {
    onSuccess: () => Router.push("/"),
  });

export default useLogin;
