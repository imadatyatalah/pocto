import Router from "next/router";

import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { AxiosResponse } from "axios";
import type { SignupInput } from "shared";

const useSignUp = () =>
  useMutation(
    (data: SignupInput) =>
      instance.post<
        SignupInput,
        AxiosResponse<{ error: boolean; message: string }>
      >(SERVER_ROUTES.SIGN_UP_ROUTE, data),
    {
      onSuccess: ({ data }) => {
        toast.success(data.message);

        Router.push("/");
      },
    }
  );

export default useSignUp;
