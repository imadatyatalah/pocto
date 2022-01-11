import type { TPost } from "./post";
import type { TProfile } from "./profile";

export type TUser = {
  id: number;
  name: string;
  username: string;
  posts: TPost[];
  profile?: TProfile;
};

export type TCurrentUser = {
  id: number;
  name: string;
  username: string;
  profile?: TProfile;
};
