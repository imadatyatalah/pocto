import type { TPost } from "./post";

export interface TSimpleCommunity {
  name: string;
  title: string;
  description: string;
  type: "PUBLIC";
}

export interface TCommunity extends TSimpleCommunity {
  posts: TPost[];
}
