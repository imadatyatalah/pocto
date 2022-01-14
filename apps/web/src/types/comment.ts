export type TComment = {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
  user: {
    id: number;
    name: string;
    username: string;
  };
};
