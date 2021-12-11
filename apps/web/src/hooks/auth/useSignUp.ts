import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TSignUpData } from "@/types/auth/signUp";

const useSignUp = () =>
  useMutation((data: TSignUpData) => instance.post(`/auth/signup`, data));

export default useSignUp;
