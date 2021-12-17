import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { TUpdateProfileData } from "@/types/index";

// TODO: Show a toast onSuccess
const useUpdateProfile = () =>
  useMutation((data: TUpdateProfileData) =>
    instance.put(`/current_user/update_profile`, data)
  );

export default useUpdateProfile;
