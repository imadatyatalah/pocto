import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TChangePasswordData } from "@/types/index";

const useUpdatePassword = () =>
  useMutation((data: TChangePasswordData) =>
    instance.put(`/current_user/change_password`, data)
  );

export default useUpdatePassword;
