import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

import type { UpdateProfileInput } from "shared";

// TODO: Show a toast onSuccess
const useUpdateProfile = () =>
  useMutation((data: UpdateProfileInput) =>
    instance.put("/current_user/update_profile", data)
  );

export default useUpdateProfile;
