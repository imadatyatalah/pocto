import create from "zustand";
import { persist } from "zustand/middleware";

import { instance } from "@/lib/axios";

import type { TUser } from "@/types/index";

type UserState = {
  user: null | TUser;
  logged_in: boolean;
  fetchUser: () => Promise<void>;
};

const useUser = create<UserState>(
  persist(
    (set) => ({
      user: null,
      logged_in: false,
      fetchUser: async () => {
        try {
          const { data: user } = await instance.get<TUser>("/current_user/me");

          if (user) {
            set({ user, logged_in: true });
          } else {
            set({ user: null, logged_in: false });
          }
        } catch (err) {
          set({ user: null, logged_in: false });
        }
      },
    }),
    { name: "user" }
  )
);

export default useUser;
