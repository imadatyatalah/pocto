import Router from "next/router";

import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

const useDeleteAccount = () =>
  useMutation(() => instance.delete("/current_user/delete_account"), {
    onSuccess: () => {
      toast.success("Your account was deleted successfully!");

      Router.push("/");
    },
  });

export default useDeleteAccount;
