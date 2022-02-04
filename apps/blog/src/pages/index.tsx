import type { NextPage, InferGetStaticPropsType } from "next";

import { allBlogs } from ".contentlayer/data";

import { BlogPostData, sortPostsByDate } from "@/lib/blogPost";
import HomePage from "@/modules/home/HomePage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) => BlogPostData(post));

  const sortedPosts = sortPostsByDate(posts);

  return { props: { posts: sortedPosts } };
};

export default Home;
