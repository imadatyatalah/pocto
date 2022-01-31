import type { NextPage } from "next";

import { useGetUsers } from "@/api/index";
import UserCard from "@/components/UserCard/UserCard";

const Home: NextPage = () => {
  const { data: users } = useGetUsers();

  return (
    <section>
      {users?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </section>
  );
};

export default Home;
