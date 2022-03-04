import { API_ROUTES } from "shared/routes";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { ChangePasswordInput } from "shared";

const useUpdatePassword = () =>
  useMutation(
    (data: ChangePasswordInput) =>
      instance.put<ChangePasswordInput>(
        API_ROUTES.UPDATE__PASSWORD_ROUTE,
        data
      ),
    {
      onSuccess: () => {
        toast.success("Your password was updated successfully!");
      },
    }
  );

export default useUpdatePassword;
