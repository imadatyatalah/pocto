import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { ChangePasswordInput } from "shared";

const useUpdatePassword = () =>
  useMutation((data: ChangePasswordInput) =>
    instance.put(`/current_user/change_password`, data)
  );

export default useUpdatePassword;
