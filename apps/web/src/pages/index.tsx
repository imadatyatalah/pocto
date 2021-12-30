import type { GetStaticProps, NextPage } from "next";

import { dehydrate, QueryClient } from "react-query";

import { getPosts, useGetPosts } from "@/api/index";
import HomePage from "@/modules/home/HomePage";

const Home: NextPage = () => {
  const { data: posts } = useGetPosts();

  return <HomePage posts={posts} />;
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
