import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { LoginData } from "@/types/auth/login";

const useLogin = () =>
  useMutation((data: LoginData) => instance.post(`/auth/login`, data));

export default useLogin;
