import type { TPost } from "./post";

export interface TCommunity {
  name: string;
  title: string;
  description: string;
  type: "PUBLIC";
  posts: TPost[];
}
