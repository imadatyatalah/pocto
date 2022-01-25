import type { TPost } from "./post";

export type TCommunity = {
  name: string;
  title: string;
  description: string;
  type: "PUBLIC";
  posts: TPost[];
};
