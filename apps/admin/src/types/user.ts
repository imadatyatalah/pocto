import type { TPost } from "./post";
import type { TProfile } from "./profile";

export interface TUser {
  id: number;
  name: string;
  username: string;
  posts: TPost[];
  profile: TProfile;
}

export interface TCurrentUser {
  id: number;
  name: string;
  username: string;
  profile: TProfile;
}
