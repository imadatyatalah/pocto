import type { TComment } from "./comment";

export type TPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  _count: { comments: number };
  user: {
    id: number;
    name: string;
    username: string;
  };
  comments: TComment[];
};
