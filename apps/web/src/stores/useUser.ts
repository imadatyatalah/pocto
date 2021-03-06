import create from "zustand";
import { persist } from "zustand/middleware";

import { instance } from "@/lib/axios";

import type { TCurrentUser } from "@/types/index";

type UserState = {
  user?: TCurrentUser;
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
          const { data: user } = await instance.get<TCurrentUser>(
            "/current_user/me"
          );

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
