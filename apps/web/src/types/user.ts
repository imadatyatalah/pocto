export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  profile?: {
    bio: string;
    website: string;
    location: string;
  };
};
