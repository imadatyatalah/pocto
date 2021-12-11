import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TLoginData } from "@/types/auth/login";

const useLogin = () =>
  useMutation((data: TLoginData) => instance.post(`/auth/login`, data));

export default useLogin;
