export type TPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  userId: number;
  user: {
    id: number;
    name: string;
    username: string;
  };
};
