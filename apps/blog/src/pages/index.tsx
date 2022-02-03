import type { NextPage, InferGetStaticPropsType } from "next";

import { pick } from "@contentlayer/client";
import { allBlogs } from ".contentlayer/data";

import HomePage from "@/modules/home/HomePage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, [
      "slug",
      "title",
      "summary",
      "publishedAt",
      "image",
      "author",
      "readingTime",
    ])
  );

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts } };
};

export default Home;
