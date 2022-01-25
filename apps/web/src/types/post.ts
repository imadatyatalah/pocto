import type { TComment } from "./comment";

export type TPost = {
  id: string;
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
  community?: { name: string };
};
