import { SERVER_ROUTES } from "shared/routes";
import { useMutation } from "react-query";
import toast from "react-hot-toast";

import { instance } from "@/lib/axios";

import type { UpdateProfileInput } from "shared";

const useUpdateProfile = () =>
  useMutation(
    (data: UpdateProfileInput) =>
      instance.put<UpdateProfileInput>(
        SERVER_ROUTES.UPDATE__PROFILE_ROUTE,
        data
      ),
    {
      onSuccess: () => {
        toast.success("Your profile was updated successfully!");
      },
    }
  );

export default useUpdateProfile;
