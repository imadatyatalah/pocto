import Router from "next/router";

import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { SigninInput } from "shared";

const useSignIn = () =>
  useMutation(
    (data: SigninInput) => instance.post(SERVER_ROUTES.SIGN_IN_ROUTE, data),
    {
      onSuccess: () => {
        toast.success("You have successfully signed in!");

        Router.push("/");
      },
    }
  );

export default useSignIn;
