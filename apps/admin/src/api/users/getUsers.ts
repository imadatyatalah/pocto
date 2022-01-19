import { useQuery } from "react-query";

import { instance } from "@/lib/axios";

export const getUsers = async (): Promise<any> => {
  const { data } = await instance.get("/admin/users");

  return data;
};

export const useGetUsers = () =>
  useQuery<any, Error>(["users"], () => getUsers());
