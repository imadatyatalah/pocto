export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  posts: {
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
  }[];
  profile?: {
    bio: string;
    website: string;
    location: string;
  };
};
