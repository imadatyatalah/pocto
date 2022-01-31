import type { GetStaticProps } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getPosts, useGetPosts } from "@/api/index";
import HomePage from "@/modules/home/HomePage";

import type { PoctoPage, TCurrentUser } from "@/types/index";

type Props = {
  currentUser: TCurrentUser;
};

const Home: PoctoPage<Props> = ({ currentUser }) => {
  const { data: posts } = useGetPosts();

  return <HomePage posts={posts} currentUser={currentUser} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts"], () => getPosts());

  return {
    props: { dehydratedState: dehydrate(queryClient) },
    revalidate: 1,
  };
};

export default Home;
