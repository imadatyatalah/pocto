import type { TComment } from "./comment";

export type TPost = {
  id: string;
  content: string;
  createdAt: string;
  userId: number;
  likes: { userId: number }[];
  _count: { comments: number; likes: number };
  user: {
    id: number;
    name: string;
    username: string;
  };
  comments: TComment[];
  community?: { name: string };
};
