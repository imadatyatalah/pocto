import type { TPost } from "./post";
import type { TProfile } from "./profile";

export type TUser = {
  id: number;
  name: string;
  username: string;
  role: "USER" | "ADMIN";
  posts: TPost[];
  profile: TProfile;
};

export type TCurrentUser = {
  id: number;
  name: string;
  username: string;
  role: "USER" | "ADMIN";
  profile: TProfile;
};
