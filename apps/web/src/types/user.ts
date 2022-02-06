import type { TPost } from "./post";
import type { TProfile } from "./profile";

export interface TUser {
  id: number;
  name: string;
  username: string;
  role: "USER" | "ADMIN";
  posts: TPost[];
  profile: TProfile;
}

export interface TCurrentUser {
  id: number;
  name: string;
  username: string;
  role: "USER" | "ADMIN";
  profile: TProfile;
}
