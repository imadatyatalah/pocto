import type { GetStaticProps, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getUsers, useGetUsers } from "@/api/index";
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

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["users"], () => getUsers());

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Home;
