import { useMutation } from "react-query";

import { instance } from "@/lib/axios";

const useBanUser = (username: string) =>
  useMutation(() => instance.put(`/admin/users/${username}`));

export default useBanUser;
