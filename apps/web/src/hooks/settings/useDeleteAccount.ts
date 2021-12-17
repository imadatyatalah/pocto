import Router from "next/router";

import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useDeleteAccount = () =>
  useMutation(() => instance.delete("/current_user/delete_account"), {
    onSuccess: () => Router.push("/"),
  });

export default useDeleteAccount;
