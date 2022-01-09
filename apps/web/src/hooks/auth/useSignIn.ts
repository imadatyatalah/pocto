import Router from "next/router";

import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { SigninInput } from "shared";

const useSignIn = () =>
  useMutation((data: SigninInput) => instance.post("/auth/signin", data), {
    onSuccess: () => {
      toast.success("You have successfully signed in!");

      Router.push("/");
    },
  });

export default useSignIn;
