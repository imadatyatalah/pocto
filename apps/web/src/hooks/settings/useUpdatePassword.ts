import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { ChangePasswordInput } from "shared";

const useUpdatePassword = () =>
  useMutation(
    (data: ChangePasswordInput) =>
      instance.put("/current_user/change_password", data),
    {
      onSuccess: () => {
        toast.success("Your password was updated successfully!");
      },
    }
  );

export default useUpdatePassword;
