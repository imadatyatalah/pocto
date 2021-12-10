import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { SignUpData } from "@/types/auth/signUp";

const useSignUp = () =>
  useMutation((data: SignUpData) => instance.post(`/auth/signup`, data));

export default useSignUp;
