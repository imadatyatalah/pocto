import type { GetStaticProps, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";
import { Heading } from "ui";

import { getUsers, useGetUsers } from "@/api/index";

const Home: NextPage = () => {
  const { data: users } = useGetUsers();

  return <section></section>;
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
