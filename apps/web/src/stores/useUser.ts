import create from "zustand";
import { persist } from "zustand/middleware";

import { instance } from "@/lib/axios";

type User = {
  id: number;
  role: "USER" | "ADMIN";
  iat: number;
  exp: number;
};

type BearState = {
  user: null | User;
  logged_in: boolean;
  fetchUser: () => Promise<void>;
};

const useUser = create<BearState>(
  persist(
    (set) => ({
      user: null,
      logged_in: false,
      fetchUser: async () => {
        try {
          const { data: user } = await instance.get<User>("/me");

          set({ user, logged_in: true });
        } catch (err) {
          set({ user: null, logged_in: false });
        }
      },
    }),
    { name: "user" }
  )
);

export default useUser;
