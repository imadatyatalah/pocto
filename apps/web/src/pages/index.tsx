import type { GetStaticProps, NextPage } from "next";

import { QueryClient } from "react-query";

import { getPosts, useGetPosts } from "@/api/index";
import HomePage from "@/modules/home/HomePage";

const Home: NextPage = () => {
  const { data: posts } = useGetPosts();

  return <HomePage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  const posts = await queryClient.fetchQuery(["posts"], () => getPosts());

  return {
    props: { posts },
    revalidate: 1,
  };
};

export default Home;
