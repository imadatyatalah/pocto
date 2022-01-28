export type TComment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
  likes: { userId: number }[];
  _count: { likes: number };
  user: {
    id: number;
    name: string;
    username: string;
  };
};
