import Router from "next/router";

import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeleteAccount = () =>
  useMutation(() => instance.delete(SERVER_ROUTES.DELETE__ACCOUNT_ROUTE), {
    onSuccess: () => {
      toast.success("Your account was deleted successfully!");

      Router.push("/");
    },
  });

export default useDeleteAccount;
