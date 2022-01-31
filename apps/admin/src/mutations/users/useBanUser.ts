import { useMutation, useQueryClient } from "react-query";

import { instance } from "@/lib/axios";

const useBanUser = (username: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => instance.put(`/admin/users/${username}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useBanUser;
